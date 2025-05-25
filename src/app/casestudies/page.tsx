"use client";
import Casestudy from "@/components/Casestudy";
// import Link from "next/link";


const page = () => {
    return (
        <div className="w-full overflow-x-hidden overflow-y-hidden">
            <div className="casestudiesbg h-screen w-full bg-cover bg-center overflow-y-hidden">
                <div className="h-full flex flex-col justify-center items-center text-white">
                    <h1 className="lg:text-9xl text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">CASE STUDIES</h1>
                </div>
            </div>
            <div className="w-full bg-blue-200 pb-32">
                <div className="py-48 max-w-[1800px] flex flex-col items-center mx-auto px-12">
                    <h2 className="lg:text-6xl text-5xl font-bold pb-12 text-center">EXPLORE CASE STUDIES</h2>
                    <div className="w-full max-w-7xl grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 gap-x-6 items-center">
                        <Casestudy place="In-Person School" title="Chinese American International School" image="/caislogo.jpg" link="/casestudies/cais" description="One of Mode to Code's very first classes, Chinese American International School was"/>
                        <Casestudy place="Assisted Living Center" title="Rhoda Goldman Plaza" image="/rhodapic.jpg" link="/casestudies/rhodagoldman" description="One of Mode to Code's very first classes, Chinese American International School was"/>
                        <Casestudy place="Online Class" title="The American International School of Bolivia" image="/bolivialogo.jpg" link="/casestudies/bolivia" description="One of Mode to Code's very first classes, Chinese American International School was"/>
                        {/* <Casestudy place="Partner Company" title="Breakthrough SummerBridge" image="/breakthrough.png" link="/casestudies/breakthrough" description="One of Mode to Code's very first classes, Chinese American International School was"/> */}
                    </div>

                    {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                        <Link href="/cais.html"><div className="relative hover:cursor-pointer flex flex-col justify-between rounded-2xl overflow-hidden h-full text-white">
                            <img src="/caislogo.jpg" alt="" className="imgeffect" />
                            <div className="absolute py-12 inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/60 to-transparent">
                                <h3 className="lg:text-4xl text-2xl font-bold uppercase">Chinese American International School</h3>
                                <p className="lg:text-2xl text-xl font-thin">This was one of the first schools for Mode to Code!</p>
                            </div>
                        </div></Link>

                        <div className="relative hover:cursor-pointer flex flex-col justify-between rounded-2xl overflow-hidden h-full text-white">
                            <img src="/liveoaklogo.jpg" alt="" className="imgeffect" />
                            <div className="absolute py-12 inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/60 to-transparent">
                                <h3 className="lg:text-4xl text-2xl font-bold uppercase">Live Oak School</h3>
                                <p className="Clg:text-2xl text-xl font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti perspiciatis ipsa ullam necessitatibus illo laudantium harum, odit sapiente?</p>
                            </div>
                        </div>

                        <div className="relative hover:cursor-pointer flex flex-col justify-between rounded-2xl overflow-hidden h-fit text-white">
                            <img src="/rhodagoldmanlogo.jpg" alt="" className="imgeffect" />

                            <div className="absolute py-12 inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/60 to-transparent">
                                <h3 className="lg:text-4xl text-2xl font-bold uppercase">Rhoda Goldman Plaza</h3>
                                <p className="lg:text-2xl text-xl font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti perspiciatis ipsa ullam necessitatibus illo laudantium harum, odit sapiente?</p>
                            </div>
                        </div>

                        <div className="relative hover:cursor-pointer flex flex-col justify-between rounded-2xl overflow-hidden h-full text-white">
                            <img src="/liveoaklogo.jpg" alt="" className="imgeffect" />
                            <div className="absolute py-12 inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/60 to-transparent">
                                <h3 className="lg:text-4xl text-2xl font-bold uppercase">Live Oak School</h3>
                                <p className="lg:text-2xl text-xl font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti perspiciatis ipsa ullam necessitatibus illo laudantium harum, odit sapiente?</p>
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>
        </div >
    )
}

export default page