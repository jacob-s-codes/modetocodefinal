"use client";
import BasicButton from "@/components/BasicButton";
// import Map from "@/components/TeachingMap";
import dynamic from "next/dynamic";

const TeachingMap = dynamic(() => import('@/components/TeachingMap'), {
    ssr: false
});

export default function Client() {
    return (
        <div className="w-full overflow-x-hidden overflow-y-hidden ">
            <div className="aboutusbg h-screen w-full bg-cover bg-center overflow-y-hidden">
                <div className="h-full flex flex-col justify-center items-center text-white">
                    <h1 className="lg:text-9xl text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">ABOUT US</h1>
                </div>
            </div>
            {/* Who we are */}
            <div className="w-full bg-blue-200 pb-32">
                <div className=" w-full max-w-[1800px] mx-auto px-8 flex flex-col gap-y-44 justify-between  pt-32 ">
                    <div className="flex lg:flex-row flex-col-reverse parent-leftright lg:items-center justify-between">
                        <div className="flex flex-col xl:max-w-3xl max-w-xl animateleft relative z-20">
                            <div className="absolute -z-10 inset-0 scale-x-200 xl:scale-150 xl:scale-y-125 lg:scale-y-105 md:scale-150 scale-125 bg-blue-300 -skew-y-3 rounded-xl xl:-translate-x-12 -translate-x-8 lg:translate-y-0 -translate-y-6"></div>
                            <h3 className="uppercase text-blue-900 text-3xl">Our Mission</h3>
                            <h2 className="uppercase text-4xl font-bold pb-2">Teaching students the technology that they need</h2>
                            <hr className="border-4 border-black mb-8" />
                            <p className="text-2xl font-light mb-8">Mode to Code brings together students of all ages who are interested in technology and high school volunteers who are passionate and skilled, both in person and virtually!</p>

                        </div>
                        <div className="max-w-3xl relative animateright rounded-xl lg:ml-8 lg:pb-0 pb-8 z-20">
                            <img src="/assistedliving/frankfox2.jpg" alt="" className="w-full rounded-xl shadow-2xl shadow-darkbg z-20" />
                        </div>
                    </div>


                    <div className="flex lg:flex-row flex-col parent-leftright lg:items-center items-end justify-between z-20 relative">
                        
                        <TeachingMap />

                        <div className="text-3xl max-w-2xl text-right pl-8 animateleft relative z-20">
                            

                            <h3 className="uppercase text-blue-900 text-3xl lg:pt-0 pt-4">Making an impact</h3>
                            <h2 className="text-4xl font-bold uppercase pb-2">
                                TEACHING 1200+ STUDENTS ACROSS 30+ Institutions
                            </h2>
                            <hr className="w-full border-4" />
                            <p className="py-12 text-2xl font-light">
                                Mode to Code is proud to offer programs at schools in the San Francisco Bay Area. We are also
                                teaching students online in Bolivia, Botswana, India, Italy, and Jamaica. We are proud to have{' '}
                                <span className="font-bold">thousands of hours</span> of instruction around the world!
                            </p>
                            <BasicButton text="Read some case studies" link="/casestudies" />
                        </div>
                    </div>




                </div>
            </div>
        </div >
    )
}