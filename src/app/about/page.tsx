"use client";



const page = () => {
    return (
        <div className="w-full overflow-x-hidden overflow-y-hidden">
            <div className="aboutusbg h-screen w-full bg-cover bg-center overflow-y-hidden">
                <div className="h-full flex flex-col justify-center items-center text-white">
                    <h1 className="text-9xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">ABOUT US</h1>
                </div>
            </div>
            {/* Who we are */}
            <div className="w-full bg-blue-200 pb-32">
                <div className=" w-full max-w-[1800px] mx-auto px-8 flex flex-col gap-y-44 justify-between  pt-32 ">
                    <div className="flex lg:flex-row flex-col-reverse parent-leftright lg:items-center justify-between">
                        <div className="flex flex-col xl:max-w-3xl max-w-xl animateleft">
                            <h3 className="uppercase text-blue-900 text-3xl">Our Mission</h3>
                            <h2 className="uppercase text-4xl font-bold pb-2">Teaching students the technology that they need</h2>
                            <hr className="border-4 border-black mb-8" />
                            <p className="text-2xl font-light mb-8">Mode to Code brings together students of all ages who are intersted in technology and high schoolers who are passionate and skilled, both virtually and in person!</p>

                        </div>
                        <div className="max-w-3xl relative animateright rounded-xl lg:ml-8 lg:pb-0 pb-8">
                            <img src="/teachingimg27.jpg" alt="" className="w-full rounded-xl shadow-2xl shadow-darkbg" />
                        </div>
                    </div>


                    <div className="flex lg:flex-row flex-col parent-leftright lg:items-center items-end justify-between ">
                        <img src="/mapofworld.jpg" alt=""
                            className="animateright w-full rounded-xl shadow-2xl max-w-3xl shadow-darkbg lg:mb-0 mb-6 items-center" />
                        <div className="text-3xl max-w-2xl text-right pl-8 animateleft">
                            <h3 className="uppercase text-blue-900 text-3xl">Making an impact</h3>
                            <h2 className="text-4xl font-bold uppercase  pb-2 ">TEACHING 600+ STUDENTS AT 15+ Institutions</h2>
                            <hr className="w-full border-4" />
                            <p className="py-12 text-2xl font-light">Mode to Code is proud to be offering programs at schools all over San Francisco. We are also teaching students online in Vermont and India. We are proud to have over 50 hours of instruction to students accross the globe!</p>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default page