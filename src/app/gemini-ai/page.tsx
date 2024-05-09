"use client";
import AiMain from "~/components/AiMain";
import AiSideBar from "~/components/AiSideBar";
import ContextProvider from "~/context/Context";

const page = () => {
  return (
    <div className="flex">
        <ContextProvider>
            <AiSideBar/>
            <AiMain />
        </ContextProvider>
    </div>
  )
}
export default page;