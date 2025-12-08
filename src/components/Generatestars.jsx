import React, { useEffect, useState } from 'react'

export default function Generatestars() {
    const [stars, setstars] = useState([])
    const [metors, setmetors] = useState([])

    const starsdata = []
    const metorsdata = []

    useEffect(() => {
        makeingofstar();
        makeingofmetors();
    }, [])

    const makeingofstar = () => {
        const numberStars = Math.floor(window.innerHeight * window.innerWidth) / 10000
        for (let i = 0; i < numberStars; i++) {
            starsdata.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
            setstars(starsdata)
        }
    }
    const makeingofmetors = () => {
        const numbermetors = 5
        for (let i = 0; i < numbermetors; i++) {
            metorsdata.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 9,
                animationDuration: Math.random() * 4 + 3,
            })
            setmetors(metorsdata)
        }
    }
    return (
        <div className='fixed z-0 h-screen w-screen top-0  bg-black'>
            {
                stars.map((star) => (
                    <div key={star.id} className=" star animate-pulse-subtle" style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }} />

                ))

            }
            {
                metors.map((star) => (
                    <div key={star.id} className=" meteor animate-meteor" style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        delay:star.delay,
                        animationDuration: star.animationDuration + "s",
                    }} />

                ))

            }  </div>
    )
}
