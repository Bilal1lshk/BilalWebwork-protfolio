import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function roundOff(num, ndigits) {
    const work = num.toFixed(ndigits)
    console.log(work)

}
roundOff(3.00997, 2)

export default function Contact() {
    return (
        <div className='relative text-white h-auto w-[80%] mx-auto'>
            <div className="wrapeer flex flex-col gap-1.5">
                <h2 className='text-4xl text-bold '>            Stay Connected
                </h2>
                <p className='text-primary font-bold'>Let's Build Something Amazing Together
                    Got a project in mind? Drop me a message and let's make it happen.</p>
                <div> <h5 className='text-3xl'>Contact <span>Information</span></h5>
                    <div className="main w-[70%] mx-auto grid  gap-4 mt-7 grid-rows-4">
                        <div className='flex flex-row  gap:1 items-center justify-around w-[50%] mx-auto'>
                            <div className="logo  flex justify-start items-center w-[30px]  h-full">
                                <MdOutlineEmail className='text-2xl   md:mr-0 text-primary  ' />
                            </div>
                            <div className='info w-auto pl-3 md:pl-0'>
                                <p>Email</p>
                                <p>bilalsheikhsb77@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex flex-row   items-center justify-around w-[50%] mx-auto'>
                            <div className="logo flex justify-start items-center w-[30px]  h-full ">
                                <FaPhone className='text-2xl -ml-6 text-primary' />
                            </div>
                            <div className='info w-auto'>
                                <p>Phone</p>
                                <p>03191099549</p>
                            </div>
                        </div>
                        <div className='flex flex-row   items-center justify-around w-[50%] mx-auto'>
                            <div className="logo  flex justify-start items-center w-[30px]  h-full ">
                                <FaLocationCrosshairs className='text-2xl -ml-5 pl-0 text-primary' />
                            </div>
                            <div className='info w-auto'>
                                <p>Location</p>
                                <p>Punjab,Pakistan</p>
                            </div>
                        </div>


                    </div>

                    <h3 className='text-3xl '>
                        Connect with me
                    </h3>
                    <div className="logos mx-auto flex items-center justify-center mt-5 gap-3 w-full">

                        <FaLinkedin  className='text-3xl'/><FaInstagramSquare className='text-3xl'/><FaTwitter className='text-3xl' />

                    </div>
                </div>
            </div>
        </div>
    )
}
