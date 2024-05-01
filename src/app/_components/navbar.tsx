"use client" 

import { useRouter } from 'next/navigation';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { UploadButton } from '~/utils/uploadthing';

export default function TopNav() {
  const router = useRouter()
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
      <h1>Gallery</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <div className='flex gap-4 items-center'>
          <UploadButton 
            endpoint="imageUploader"
            onClientUploadComplete={()=> router.refresh()}
            />
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  );
}