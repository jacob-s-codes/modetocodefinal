"use client";
import Socialmedia from "@/components/Socialmedia";
import Link from "next/link";


export default function WebsitesClient() {
    return (
        <div className="w-full overflow-x-hidden overflow-y-hidden">
            <div className="contactbg h-screen w-full bg-cover bg-center overflow-y-hidden">
                <div className="h-full flex flex-col justify-center items-center text-white">
                    <h1 className="lg:text-9xl text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">CONTACT US</h1>
                </div>
            </div>
            {/* Who we are */}
            <div className="w-full bg-blue-200 pb-32">
                <div className=" w-full max-w-[1800px] mx-auto px-8 flex flex-col gap-y-44 justify-between  pt-32 ">
                    <div className="flex lg:flex-row flex-col-reverse parent-leftright lg:items-center justify-between">
                        <div className="flex flex-col xl:max-w-3xl max-w-xl animateleft">
                            <h3 className="uppercase text-blue-900 lg:text-3xl text-2xl">Email us</h3>
                            <h2 className="uppercase lg:text-4xl text-3xl font-bold pb-2">INTERESTED IN JOINING OR OFFERING MODE TO CODE AT YOUR SCHOOL?</h2>
                            <hr className="border-4 border-black mb-8" />
                            <p className="lg:text-2xl text-xl font-light mb-8">You can email Jacob at <a href="mailto:jacob@modetocode.com" className='font-bold hover:underline '>jacob@modetocode.com</a> for specific questions or email <a href="mailto:info@modetocode.com" className='font-bold hover:underline'>info@modetocode.com</a> for general ones.</p>
                            <p className="lg:text-2xl text-xl font-light mb-8"> You can also find and contact one of the members of our team by going to the &quot;Meet the Team&ldquo; page.</p>
                            <Link href="/meettheteam" className="relative inline-flex px-8 py-4 font-medium group w-fit">
                                <span
                                    className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white uppercase">Meet the team</span>
                            </Link>
                        </div>
                        <div className="max-w-3xl relative animateright rounded-xl lg:ml-8 lg:pb-0 pb-8">
                            <img src="/teachingimg18.jpg" alt="" className="w-full rounded-xl shadow-2xl shadow-darkbg" />
                        </div>
                    </div>


                    <div className="flex lg:flex-row flex-col parent-leftright lg:items-center items-end justify-between ">
                        <img src="/assistedliving/teachingimg1.jpg" alt=""
                            className="animateright w-full rounded-xl shadow-2xl max-w-3xl shadow-darkbg lg:mb-0 mb-6 items-center" />
                        <div className="text-3xl max-w-2xl text-right pl-8 animateleft">
                            <h2 className="lg:text-4xl text-3xl font-bold uppercase  pb-2 ">FInd us on social media</h2>
                            <hr className="w-full border-4" />
                            <p className="py-12 lg:text-2xl text-xl font-light">Check out our social media and stay updated with what we&apos;re up to!</p>
                            <Socialmedia />
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}