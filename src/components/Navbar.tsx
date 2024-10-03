import Link from 'next/link';
import Image from 'next/image';
import { ClerkLoading, ClerkLoaded, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          NG SOCIAL
        </Link>
      </div>
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center">
            <Image src="/home.png" alt="Homepage" width={16} height={16} className="w-4 h-4" />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image src="/friends.png" alt="Friends" width={16} height={16} className="w-4 h-4" />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image src="/stories.png" alt="Stories" width={16} height={16} className="w-4 h-4" />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input type="text" placeholder="search..." className="bg-transparent outline-none" />
          <Image src="/search.png" alt="search" width={14} height={14} />
        </div>
      </div>
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 text-blue-600 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="hidden md:block cursor-pointer">
              <Image src="/people.png" alt="people" width={24} height={24} />
            </div>
            <div className="hidden md:block cursor-pointer">
              <Image src="/messages.png" alt="messages" width={24} height={24} />
            </div>
            <div className="hidden md:block cursor-pointer">
              <Image src="/notifications.png" alt="notifications" width={24} height={24} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="cursor-pointer flex items-center gap-2">
              <Image src="/login.png" alt="login" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
