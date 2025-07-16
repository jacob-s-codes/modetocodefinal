import React from 'react'
import Marquee from 'react-fast-marquee'
import ImageforCarosel from './ImageforCarosel'

export default function App() {
  return (
    <>
      <section className="flex justify-center items-center ">
        <div className=" h-[200px] rounded-2xl w-8xl">
          <Marquee className="  py-3 overflow-hidden grid  " speed={150} pauseOnHover={true}>
            <ImageforCarosel src="/breakthrough.png" href="https://www.breakthroughsf.org/"/>
            <ImageforCarosel src="/bolivia/aisblogowide.png" href="https://www.aisb.edu.bo/eng.html#"/>
            <ImageforCarosel src="/liveoaklogo.jpg" href="https://www.liveoaksf.org/"/>
            <ImageforCarosel src="/caislogo.jpg" href="https://www.cais.org/"/>
            <ImageforCarosel src="/assistedliving/ivyparklogo.webp" href="https://ivyliving.com/cathedralhill/"/>
            <ImageforCarosel src="/rhodapic.jpg" href="https://rgplaza.jfcs.org/"/>
            <ImageforCarosel src="/botswana/westwoodlogo.png" href="https://www.westwood.ac.bw/"/>
            <ImageforCarosel src="/assistedliving/franklogo.webp" href="https://frankresidences.org/"/>
            <ImageforCarosel src="/schools/isflorence.png" href="https://www.isfitaly.org/"/>
            <ImageforCarosel src="/sfpllogo.png" href="https://sfpl.org/locations/noe-valley"/>
            <ImageforCarosel src="/schools/presidiomiddlelogo.jpg" href="https://www.sfusd.edu/school/presidio-middle-school"/>
            <ImageforCarosel src="/schools/neilcumminslogo.png" href="https://www.lcmschools.org/en-US"/>
            <ImageforCarosel src="/assistedliving/coterielogo.png" href="https://www.coterieseniorliving.com/luxury-retirement-communities/coterie-cathedral-hill-san-francisco-ca"/>
            <ImageforCarosel src="/schools/delhilogo.jpg" href="https://www.facebook.com/ISEdelhinangloi/"/>
            <ImageforCarosel src="/kismetlogo.png" href="https://sites.google.com/shcp.edu/kismet/home?authuser=1"/>
          </Marquee>
        </div>
      </section>
    </>
  )
}
