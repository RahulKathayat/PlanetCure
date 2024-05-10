"use client";
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react'
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

const page = () => {
    const router = useRouter();
    const [value,setValue] = useState<string>('');
    const handleRoomJoin = useCallback(() => {
        router.push(`/video-conferencing/${value}`);
    },[router,value]);
  return (
    <div className='flex gap-4 h-[10rem] justify-center items-center'>
        <Input 
        value={value}
        type='text'
        onChange={(e) => setValue(e.target.value)}
        placeholder='Enter Room ID'
        className=' placeholder:text-white mt- mr-2 text-white w-44 border-2 scale-110'
        />
        <Button type="button" onClick={handleRoomJoin} variant="secondary">Join</Button>
    </div>
  )
}

export default page