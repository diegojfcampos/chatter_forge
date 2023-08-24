"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {

  const isUserLoggerIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

    }

    setProviders();
  }, [])
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image 
          src="/assets/images/logo.svg"
          alt="Chatter Forge Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p classNmae="logo_text">Chatter Forge</p>
      </Link>

      {/*Desketop Navigation*/}
      <div className="sm:flex hidden">
        {isUserLoggerIn ? (
          <div classNmae="flex gap-3 md:gap-5">
            <Link 
              href="/create-prompt"
              className="black_btn">
                Create Post
            </Link>

            <button 
              type="button" 
              onClick={signOut} 
              className="outline_btn">
                Sign Out
            </button>

            <Link href="/profile">
              <Image 
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                alt="Profile"
                className='rounded-full'
                />
            </Link>

          </div>
        ):(
        <>
          {providers && 
            Object.values(providers).map((provider) => {
              <button
                type="button"
                key={provider.name}
                onClick={()=> signIn(provider.id)}
                className="black_btn"
              >
                Sign In
              </button>
            })}
        </>
        )}
      </div>

    </nav>
  )
}

export default Nav