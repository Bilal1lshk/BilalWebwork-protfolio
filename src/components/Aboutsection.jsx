import React from "react";
import { BsCodeSquare } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";

import { GrProjects } from "react-icons/gr";


export default function Aboutsection() {
    return (
        <section id="about" className="relative text-white mt-40 pt-1">
            <div className="text-3xl mb-14">
                About <span className="text-primary">Me</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto">
                <div className="flex flex-row justify-end items-start gap-4">
                    <div data-aos="zoom-out-right" className="firstwrapper w-[80%] flex flex-col justify-center md:justify-start mx-auto md:mx-0 items-center gap-4">
                        <h3 className="text-2xl font-medium"> Passionate Web App developer Converting ideas into visuals</h3>
                        <p className="w-[80%]">
                            a frontend developer with 2 years of experience building sleek,
                            high-performance web apps. I’m obsessed with clean code, fast UX,
                            and crafting digital experiences that stand out.
                        </p>
                        <p className="w-[80%]">
                            Every project I build is grounded in performance, precision, and
                            creativity.
                        </p>
                        <div className="flex items-center justify-evenly gap-10"><button className="bg-primary px-7 py-3 rounded-full">Get in touch</button><button className=" text-primary px-7 py-2 border-2 border-primary rounded-full">Download Cv</button></div>
                    </div>
                </div>
                <div  data-aos="zoom-out-left" className="grid-cols-1 mx-auto md:mx-0 mt-6  md:mt-0  flex  md:block justify-center items-center flex-col space-y-6">
                    <div className="box1 flex card-hover gradient-border w-[80%] p-2 border border-gray-500">
                        <div className="wrapper flex flex-col items-center justify-between w-[30%] gap-2     "> <h4 >Web developent</h4>{" "}
                            <div className="logo"><BsCodeSquare className="text-2xl" /></div>
                        </div>

                        <p className="w-[70%]">
                            I craft intuitive, visually refined interfaces that balance
                            aesthetics with usability.
                        </p>
                    </div>
                    <div className="box1 flex card-hover gradient-border w-[80%] border border-gray-500">
                        <div className="wrapper flex flex-col items-center justify-between w-[30%]  p-2"> <h4 className="text-md" > Ui/Ux design</h4>{" "}
                            <div className="logo"><BsCodeSquare className="text-2xl" /></div>
                        </div>

                        <p className="w-[70%]">
                            My goal is to deliver on time, stay aligned with objectives, and
                            keep the entire team moving efficiently.
                        </p>
                    </div>
                    <div className="box1 flex card-hover gradient-border p-1 w-[80%] border border-gray-500">
                        <div className="wrapper flex flex-col items-center justify-between gap-3.5 w-[30%] "> <h4 className="leading-tight" >Project management</h4>{" "}
                            <div className="logo"><GrProjects className="text-2xl" /></div>
                        </div>

                        <p className="w-[70%]">
                            I build fast, responsive, and scalable web applications using
                            modern tools and clean, maintainable code.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
