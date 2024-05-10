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
    <div className='flex gap-4 h-full justify-center items-center'>
        <Input 
        value={value}
        type='text'
        onChange={(e) => setValue(e.target.value)}
        placeholder='Enter room id'
        className=' placeholder:text-black mr-2 text-black w-44'
        />
        <Button type="button" onClick={handleRoomJoin}>Join</Button>
    </div>
  )
}

export default page