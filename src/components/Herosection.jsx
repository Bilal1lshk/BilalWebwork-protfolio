import React from 'react'

export default function Herosection() {
    return (
        <div data-aos="zoom-in" className='z-20  pt-40 h-auto text-white relative'>
            <div className="wrapper flex flex-col gap-8 justify-center items-center">
                <h1 className='text-white text-6xl '>Hi I am <span className='text-primary'>Bilal</span> Kamran</h1>
                <p className='w-1/2 mx-auto font-bold'>I build elegant, responsive, and high-performance websites — crafted with precision, powered by clean code, and designed to deliver unforgettable user experiences.</p>
                <button className='bg-primary p-2 inline w-[150px] rounded-md'>View more</button>
            </div>
        </div>
    )
}
