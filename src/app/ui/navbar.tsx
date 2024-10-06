'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import BackIcon from '../../../public/svg/backIcon'
import { useState } from 'react'

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

    const [close, setClose] = useState(false);

    const handleClick = () => {
        setClose(true);
    }
  return (
    <div className={`w-screen md:w-[280px] max-h-screen overflow-hidden from-blue-400 to-blue-700 bg-gradient-to-t fixed top-0 md:p-4 flex flex-col items-center justify-around z-50`} style={{ left: close ? '-100%' : '0' }}>
        <div className="relative w-full h-screen">
            <div className='font-bold text-[24px] text-blue-200 py-6 px-3 md:mb-2 flex flex-row items-center w-full'>
                <button onClick={handleClick}><BackIcon className='icon mr-2' width='22' height='22'/></button>
                BlueFrost Global Limited
            </div>
            {username.map((user, id)=>(
                <div className="flex flex-row items-left px-5 w-full py-6 border border-y-blue-400 border-x-transparent" key={id}>
                    <Image
                        src='/profile.jpg'
                        alt='user-profile-pic'
                        width={60}
                        height={60}
                        className='rounded-full'
                    />
                    <div className='flex flex-col text-white/80 text-lg ml-4'>
                        <span className='font-bold font-poppins'>{user.name}</span>
                        <span className='text-sm'>{user.email}</span>
                    </div>
                </div>
            ))}
            <div className='flex flex-col items-start w-full py-3 px-5'>
                {
                    navbar.map((nav)=>{
                        return(
                        <Link href={nav.link} key={nav.name} className={clsx('p-2 rounded-sm font-medium text-white/80 w-full hover:bg-blue-200 hover:cursor-pointer hover:text-blue-500 text-lg',
                        {
                            ' bg-blue-300 text-blue-500': pathname === nav.link,
                        },)}>{nav.name}</Link>
                        )
                    })
                }
            </div>
        </div>
        <div className='my-3 p-1 w-[90%] text-center text-red-500 border border-red-500 hover:cursor-pointer hover:bg-red-500 hover:text-white/80 bg-red-300/70 backdrop:blur-lg rounded-sm'>Logout</div>
    </div>
  )
}
