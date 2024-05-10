'use client';
import React from 'react'
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useUser } from '@clerk/nextjs';

const Room = ({ params }: { params: { id: string } }) => {
  const { user } = useUser();
  const id = params.id;
  let myMeeting : any =  async (element: any) => {
    const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");
    const appID:number = Number(process.env.NEXT_PUBLIC_APP_ID);
    const serverSecret:string = String(process.env.NEXT_PUBLIC_SERVER_SECRET);
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, params.id, String(user?.id), "Rahul kathayat");
    const zc =  ZegoUIKitPrebuilt.create(kitToken);
    console.log(zc);
    zc.joinRoom({
      container: element,
      scenario:{
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      sharedLinks:[
        {
          name: 'Personal link',
          url:
           window.location.protocol + '//' + 
           window.location.host + window.location.pathname ,
        },
      ],
      showScreenSharingButton: true,
    });
  };


  return (
    <div>
      <div  ref={myMeeting}/>
    </div>
  )
}

export default Room