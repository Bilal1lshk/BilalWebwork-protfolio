import React, { useEffect, useRef, useState } from 'react'
import { FaRegMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

import gsap from 'gsap';
export default function Navbar() {
    const navref = useRef(null)
    const [ismobilenav, setismobilenav] = useState(false)
    const navItems = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];
    useEffect(() => {
        if (ismobilenav && navref.current) {
            gsap.fromTo(navref.current,
                {
                    x: "-100%",
                    duration: 0.5,
                },
                {
                    x: "0%",
                    duration: 2.5,
                    ease: "power3.out"
                }
            );
        }
    }, [ismobilenav]);
    const closeanimation = () => {
        if (navref.current) {
            gsap.to(navref.current, {
                x: "-100%",
                duration: 1.5,
                ease: "power3.in",
                onComplete: () => setismobilenav(false)
            });
        }
    };
    return (
        <>
            {/* desktop responsive navbar */}
            <div className=" relative z-20 flex p-10 justify-around md:justify-between items-center flex-row h-[80px]">
                <div data-aos="fade-up" className="left flex items-start pl-0 md:pl-15 w-[50%]">
                    <div className="logo text-2xl">
                        <div className='text-white'>Bilal <span className='text-primary font-semibold text-glow'>Webworks</span> </div>
                    </div>
                </div>
                <div data-aos="fade-down" className="rigth  w-[50%] hidden md:block flex-row   justify-between">

                    <div className="list space-x-4 pointer-events-auto">
                        {
                            navItems.map((item, key) => (
                                <a key={key} href={item.href} className='text-white text-[19px] hover:text-[20px]  hover:text-primary  transition-all duration-300 ' >{item.name} </a>
                            ))
                        }
                    </div>
                </div>

                <div onClick={() => setismobilenav((prev) => !prev)} className='font-black text-gray-600 text-4xl md:hidden'>
                    <CiMenuFries />
                </div>
            </div>
            {/* Mobile Nav BAr */}
            {ismobilenav && <div ref={navref} className='min-h-screen navbar block md:hidden p-10 w-[66%]  top-0 text-white z-50 fixed bg-black'>
                <div className="wrapper relative h-full w-full">
                    <MdOutlineCancel onClick={closeanimation} className=' absolute  left-[93%] -top-5  text-5xl' />
                    <div className="logo text-2xl pr-6">
                        <div className='text-white'>Bilal <span className='text-primary font-semibold text-glow'>Webworks</span> </div>
                        <div className="list flex flex-col  space-y-12 mt-10">
                            {
                                navItems.map((item, key) => (
                                    <a onClick={closeanimation} key={key} href={item.href} className=' box w-[150px] text-xl hover:text-primary transition-colors duration-500' >{item.name} </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>}


        </>
    )
}