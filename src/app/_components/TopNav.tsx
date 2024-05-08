import {SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { SimpleUploadButton } from './SimpleUploadButton';

const TopNav = () => {
    return (
      <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b bg-[dark]">
        <div>Planet Cure</div>
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