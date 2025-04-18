"use client";

import Socialmedia from "@/components/Socialmedia";



const page = () => {
    return (
        <div className="w-full overflow-x-hidden overflow-y-hidden">
            <div className="contactbg h-screen w-full bg-cover bg-center overflow-y-hidden">
                <div className="h-full flex flex-col justify-center items-center text-white">
                    <h1 className="text-9xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">CONTACT US</h1>
                </div>
            </div>
            {/* Who we are */}
            <div className="w-full bg-blue-200 pb-32">
                <div className="py-48 max-w-[1800px] mx-auto px-12">
                    <h2 className="text-6xl font-bold pb-12">EXPLORE CASE STUDIES</h2>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <a href="/cais.html"><div className="relative hover:cursor-pointer flex flex-col justify-between rounded-2xl overflow-hidden h-full text-white">
                            <img src="/caislogo.jpg" alt="" className="imgeffect"/>
                                <div className="absolute py-12 inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/60 to-transparent">
                                    <h3 className="lg:text-4xl text-2xl font-bold uppercase">Chinese American International School</h3>
                                    <p className="lg:text-2xl text-xl font-thin">This was one of the first schools for Mode to Code!</p>
                                </div>
                        </div></a>

                        <div className="relative hover:cursor-pointer flex flex-col justify-between rounded-2xl overflow-hidden h-full text-white">
                            <img src="/liveoaklogo.jpg" alt="" className="imgeffect"/>
                                <div className="absolute py-12 inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/60 to-transparent">
                                    <h3 className="lg:text-4xl text-2xl font-bold uppercase">Live Oak School</h3>
                                    <p className="lg:text-2xl text-xl font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti perspiciatis ipsa ullam necessitatibus illo laudantium harum, odit sapiente?</p>
                                </div>
                        </div>

                        <div className="relative hover:cursor-pointer flex flex-col justify-between rounded-2xl overflow-hidden h-fit text-white">
                            <img src="/rhodagoldmanlogo.jpg" alt="" className="imgeffect"/>

                                <div className="absolute py-12 inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/60 to-transparent">
                                    <h3 className="lg:text-4xl text-2xl font-bold uppercase">Rhoda Goldman Plaza</h3>
                                    <p className="lg:text-2xl text-xl font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti perspiciatis ipsa ullam necessitatibus illo laudantium harum, odit sapiente?</p>
                                </div>
                        </div>

                        <div className="relative hover:cursor-pointer flex flex-col justify-between rounded-2xl overflow-hidden h-full text-white">
                            <img src="/liveoaklogo.jpg" alt="" className="imgeffect"/>
                                <div className="absolute py-12 inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/60 to-transparent">
                                    <h3 className="lg:text-4xl text-2xl font-bold uppercase">Live Oak School</h3>
                                    <p className="lg:text-2xl text-xl font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti perspiciatis ipsa ullam necessitatibus illo laudantium harum, odit sapiente?</p>
                                </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default page