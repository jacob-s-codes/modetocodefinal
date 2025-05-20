"use client";
import ProfileCard from "@/components/Profilecard";

const people = [
    {
        image: "/jacobpic.png",
        name: "Jacob S",
        title: "Founder",
        description:
            "I founded Mode to Code over the summer of 2024, and am passionate about teaching technology. I enjoy coding, playing drums, and hanging out with my family. You can email me at: jacob@modetocode.com",
    },
    {
        image: "/aydinpic.jpg",
        name: "Aydin K",
        title: "Assisted Living Program Co-Lead",
        description:
            "Hi! I'm Aydin, a co-leader of the Assisted Living Program for Mode to Code. My goal is to create a space where we can bridge the digital divide gap between the youth and the elderly. Outside of school and teaching, I love volunteering, playing soccer, and hanging out with friends.",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Graham T",
        title: "Assisted Living Program Co-Lead",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    {
        image: "/rohanpic.png",
        name: "Rohan S",
        title: "Instructor and Head Code Support Volunteer for UHS Hacks",
        description:
            "I'm a teacher with Mode to Code, and I’ve loved coding since I was in elementary school. I now like working on small coding projects, usually websites. I also enjoy playing piano and tennis.",
    },
    {
        image: "/rowanpic.png",
        name: "Rowan C",
        title: "UHS Hacks Lead Outreach and Code Support Volunteer",
        description:
            "I joined Mode to Code because I want to create a space where students can come together to learn, build, and collaborate. Outside of school, I enjoy biking, exploring nature, and traveling. You can email me at: Rowan.chandra_26@sfuhs.org",
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
            "Hi! I’m Anna, an instructor with Mode to Code. I help teach various classes to people of all ages. I enjoy coding in Python, Swift and HTML. I also love to play basketball and crochet.",
    },
    {
        image: "/joeypic.jpg",
        name: "Joey P",
        title: "Instructor",
        description:
            "I taught with Jacob at the Noe Branch public library over the course of a few weeks where we taught a group of middle schoolers how to design in html. Outside of school I like to play badminton, chess, and hang out with friends :)",
    },
    
    {
        image: "/ellapic.jpg",
        name: "Ella S",
        title: "Instructor and High School Outreach for UHS Hacks",
        description:
            "I helped teach middle school classes at CAIS and Live Oak. I enjoy coding in HTML, CSS, Tailwind and Python. I founded my schools Girls Who Code club and also enjoy math, basketball, and reading.",
    },
    {
        image: "/lilapic.png",
        name: "Lila R",
        title: "Social Media Manager",
        description:
            "Hi! I help out with Mode to Code’s social media. In my free time, you can find me writing, learning about psychology, or listening to music. You can email me at: lilajaderaj@gmail.com",
    },
    {
        image: "/aristupic.png",
        name: "Aristu S",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    
    {
        image: "/naveenpic.png",
        name: "Naveen G",
        title: "UHS Hacks Organizer and Code Support Volunteer",
        description:
            "Excited to help out with UHS Hacks. Currently a software developer at Branded NIL and founder of locatemeals.com. I like to make crypto and AI related projects and play basketball.",
    },
    {
        image: "/ethanpic.png",
        name: "Ethan P",
        title: "UHS Hacks Code Support Volunteer and Organizer",
        description:
            "Hi, I'm Ethan. I like all types of programming, including competitive programming, web, app, and game development, and math and physics visualizations. Regarding UHS Hacks, I've created the problems and solving interface for the midday competitive programming activity. You can view my projects at: https://github.com/grassEqualsBugs",
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
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