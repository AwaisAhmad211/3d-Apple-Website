import React, { useEffect, useState } from 'react'
import { heroVideo } from '../../utils'
import { smallHeroVideo } from '../../utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
  let [videoSrc,setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  const handleVideoSrc = () => { 
     if(window.innerWidth < 760){
       setVideoSrc(smallHeroVideo)
     }else
       setVideoSrc(heroVideo);
   }
  useEffect(()=>{
    window.addEventListener('resize',handleVideoSrc)

    return () => {
      window.removeEventListener('resize',handleVideoSrc)
    }
  },[]);

  useGSAP(()=> {
    gsap.to("#hero",{opacity:1,delay:2})
    gsap.to("#ctn",{opacity:1,y:0 , delay : 2})
  },[])
  return (
    <section className='flex-center flex-col nav-height '>
      <p id='hero' className='hero-title'>iPhone 15 pro</p>
      <div className='relative  md:w-10/12 w-9/12 pointer-events-none'>
        <video
          muted controls={false} autoPlay={true} playsInline={true}
        > <source src={videoSrc} type='video/mp4'/>
        </video>
      </div>
      <div id='ctn' className='flex-center flex-col translate-y-12 opacity-0'>
        <button className='btn'>Buy</button>
        <p>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
