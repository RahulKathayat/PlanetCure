import {SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const TopNav = () => {
    return (
      <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
        <div className='flex flex-row gap-4 item-center'>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
}
export default TopNav;