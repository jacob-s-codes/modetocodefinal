import React from 'react'
import Marquee from 'react-fast-marquee'
import ImageforCarosel from './ImageforCarosel'

export default function App() {
  return (
    <>
      <section className="flex justify-center items-center ">
        <div className=" h-[200px] rounded-2xl w-8xl">
          <Marquee className="  py-3 overflow-hidden grid  " speed={150}>
            <ImageforCarosel src="/breakthrough.png"/>
            <ImageforCarosel src="/bolivia/aisblogowide.png"/>
            <ImageforCarosel src="/liveoaklogo.jpg"/>
            <ImageforCarosel src="/caislogo.jpg"/>
            <ImageforCarosel src="/assistedliving/ivyparklogo.webp"/>
            <ImageforCarosel src="/rhodapic.jpg"/>
            <ImageforCarosel src="/botswana/westwoodlogo.png"/>
            <ImageforCarosel src="/assistedliving/franklogo.webp"/>
            <ImageforCarosel src="/schools/isflorence.png"/>
            <ImageforCarosel src="/sfpllogo.png"/>
            <ImageforCarosel src="/schools/presidiomiddlelogo.jpg"/>
            <ImageforCarosel src="/schools/neilcumminslogo.png"/>
            <ImageforCarosel src="/assistedliving/coterielogo.png"/>
          </Marquee>
        </div>
      </section>
    </>
  )
}
