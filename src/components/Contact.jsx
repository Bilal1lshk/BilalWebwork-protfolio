import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const contactdata = [
    {
        logo: <MdOutlineEmail />,
        paragraph: "Email",
        information: "bilalsheikhsb77@gmail.com"
    },
    {
        logo: <FaPhone />,
        paragraph: "Phone",
        information: "03191099549"
    },
    {
        logo: <FaLocationCrosshairs />,
        paragraph: "Location",
        information: "Punjab,Pakistan"

    }
]

export default function Contact() {
    return (
        <div id='contact' data-aos="fade-up"
            data-aos-duration="3000" className='relative text-white h-auto w-[80%] mx-auto p-3'>
            <div className="wrapeer flex flex-col gap-1.5">
                <h2 className='text-4xl text-bold '>            Stay Connected
                </h2>
                <p className='text-primary font-bold'>Let's Build Something Amazing Together
                    Got a project in mind? Drop me a message and let's make it happen.</p>
                <div> <h5 className='text-3xl'>Contact <span>Information</span></h5>
                    <div className="main w-[70%] mx-auto grid  gap-4 mt-7 grid-rows-4">
                        {
                            contactdata.map((contact,key) => (
                                <>
                                    <div  className=" flex mx-auto  min-w-[200px]  gap-3 items-center justify-between p-1"key={key}>
                                        <div className='text-2xl text-primary ' >
                                            {contact.logo}
                                        </div>

                                        <div className=''>
                                            <div className='whitespace-pre-wrap'>
                                                {
                                                    contact.paragraph

                                                }
                                            </div>
                                            <div>
                                                {
                                                    contact.information

                                                }
                                            </div>

                                        </div>
                                    </div>
                                </>
                            ))
                        }


                    </div>

                    <h3 className='text-3xl '>
                        Connect with me
                    </h3>
                    <div className="logos mx-auto flex items-center justify-center mt-5 gap-3 w-full">

                        <FaLinkedin className='text-3xl text-primary' /><FaInstagramSquare className='text-3xl text-primary' /><FaTwitter className='text-3xl text-primary' />

                    </div>
                </div>
            </div>
        </div>
    )
}
