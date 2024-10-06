'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { link } from 'fs'

export const Navbar = () => {
    const pathname = usePathname();
    const username = [
        {
            name: "Henry James",
            email: "taiwoolujames@gmail.com",
            phone: "08117968963"
        }
        
    ]
    const navbar = [
        {
            name: "Dashboard",
            link: "/"
        },
        {
            name: "Messages",
            link: "/messages"
        },
        {
            name: "Routes",
            link: "/routes"
        },
        {
            name: "Inbox",
            link: "/inbox"
        },
        {
            name: "Schedule",
            link: "/calendar"
        },
        {
            name: "Payments",
            link: "/payments"
        },
        {
            name: "Reports",
            link: "/reports"
        }
    ]
  return (
    <div className='w-screen md:w-[280px] h-screen overflow-hidden bg-blue-500 md:fixed md:p-4 flex flex-col place-items-center z-50'>
        <div className="relative h-full">
            <div className='font-bold text-2xl text-green-200 py-6 md:mb-2'>BlueFrost Global Limited</div>
            {username.map((user, id)=>(
                <div className="grid grid-flow-col place-items-center w-full py-6 border border-y-blue-400 border-x-transparent" key={id}>
                    <Image
                        src='/profile.jpg'
                        alt='user-profile-pic'
                        width={60}
                        height={60}
                        className='rounded-full'
                    />
                    <div className='flex flex-col px-2 text-white/80'>
                        <span className='font-bold font-poppins'>{user.name}</span>
                        <span className='text-sm'>{user.email}</span>
                    </div>
                </div>
            ))}
            <div className='flex flex-col items-start w-full py-3'>
                {
                    navbar.map((nav)=>{
                        return(
                        <Link href={nav.link} key={nav.name} className={clsx('p-2 rounded-sm font-medium text-white/80 w-full hover:bg-green-200 hover:cursor-pointer hover:text-blue-500 text-lg',
                        {
                            'bg-blue-500 text-white/80': pathname === nav.link,
                        },)}>{nav.name}</Link>
                        )
                    })
                }
                <div className='my-3 p-1 w-full text-center text-red-500 border border-red-500 hover:cursor-pointer hover:bg-red-500 hover:text-white/80 bg-red-300/50 backdrop:blur-lg rounded-sm absolute bottom-3'>Logout</div>
            </div>
        </div>
    </div>
  )
}
