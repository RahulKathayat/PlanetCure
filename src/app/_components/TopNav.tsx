import {SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { SimpleUploadButton } from './SimpleUploadButton';
import Link from 'next/link';

const TopNav = () => {
    return (
      <nav className="flex w-full items-center justify-around p-4 text-xl font-semibold border-b-2 bg-[dark]">
        <Link href='/'><div>Planet Cure</div></Link>
        <Link href='/dashboard'>Dashboard</Link>
        <div className='flex flex-row gap-4 item-center'>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <span className='z-10 flex gap-4'>    
                    <SimpleUploadButton/>
                    <UserButton />
                </span>
            </SignedIn>
        </div>
      </nav>
    );
}
export default TopNav;