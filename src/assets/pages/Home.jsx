import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Generatestars from '../../components/Generatestars'
import Herosection from '../../components/Herosection'
import Aboutsection from '../../components/Aboutsection'
import Myskills from '../../components/Myskills'
import Myprojects from '../../components/Myprojects'
import Contact from '../../components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(()=>{
AOS.init();

  },[])
  return (
    <div className='min-h-screen w-full overflow-x-hidden'>
      <Navbar />
      <Generatestars />
      <Herosection />
      <Aboutsection />
      <Myskills />
      <Myprojects />
      <Contact />
    </div>
  )
}
