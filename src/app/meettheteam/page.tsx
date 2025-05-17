"use client";
import ProfileCard from "@/components/Profilecard";

const people = [
    {
        image: "/jacobpic.jpg",
        name: "Jacob S",
        title: "Founder",
        description:
            "I founded Mode to Code over the summer of 2024, and am passionate about teaching technology. I enjoy coding, playing drums, and hanging out with my family. You can email me at: jacob@modetocode.com",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Aydin K",
        title: "Assisted Living Program Co-Lead",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Graham T",
        title: "Assisted Living Program Co-Lead",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    {
        image: "/rohanpic.jpg",
        name: "Rohan S",
        title: "Instructor and Head Code Support Volunteer for UHS Hacks",
        description:
            "I'm a teacher with Mode to Code, and I’ve loved coding since I was in elementary school. I now like working on small coding projects, usually websites. I also enjoy playing piano and tennis.",
    },
    {
        image: "/rowanpic.jpeg",
        name: "Rowan C",
        title: "UHS Hacks Lead Outreach and Code Support Volunteer",
        description:
            "I joined Mode to Code because I want to create a space where students can come together to learn, build, and collaborate. I’ve seen how empowering it can be to bring an idea to life with code, and I wanted to be part of making that opportunity accessible to everyone. Outside of school, I enjoy biking, exploring nature, and traveling. I also work at a pizza restaurant and have lived in London! You can email me at: Rowan.chandra_26@sfuhs.org",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Caroline C",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Anna B",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Joey P",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    
    {
        image: "/ellapic.jpg",
        name: "Ella S",
        title: "Instructor",
        description:
            "I helped teach middle school classes at CAIS and Live Oak. I enjoy coding in HTML, CSS, Tailwind and Python. Founded my schools Girls Who Code club. I also enjoy math, basketball, and reading.",
    },
    {
        image: "/ellapic.jpg",
        name: "Lila R",
        title: "Social Media Manager",
        description:
            "I helped teach middle school classes at CAIS and Live Oak. I enjoy coding in HTML, CSS, Tailwind and Python. Founded my schools Girls Who Code club. I also enjoy math, basketball, and reading.",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Aristu S",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    
    {
        image: "/teachingimg2.jpg",
        name: "Naveen G",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Ethan P",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    // Add more people as needed
];



const page = () => {
    return (
        <div className="w-full overflow-x-hidden overflow-y-hidden">
            <div className="meettheteambg h-screen w-full bg-cover bg-center overflow-y-hidden">
                <div className="h-full flex flex-col justify-center items-center text-white">
                    <h1 className="lg:text-9xl text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">MEET THE TEAM</h1>
                </div>
            </div>
            {/* Who we are */}
            <div className="w-full bg-blue-200 pb-32">
                <div className=" w-full mx-auto row-auto col-auto gap-y-44 justify-between  pt-32 ">
                    <h2 className="lg:text-6xl text-5xl font-bold pb-12 text-center">OUR TEAM</h2>

                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
                            {people.map((person, index) => (
                                <ProfileCard
                                    key={index}
                                    image={person.image}
                                    name={person.name}
                                    title={person.title}
                                    description={person.description}
                                />
                            ))}
                        </div>

                        
                    </div>




                </div>
            </div>
        </div >
    )
}

export default page