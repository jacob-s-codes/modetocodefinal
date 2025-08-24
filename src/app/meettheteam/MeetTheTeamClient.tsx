"use client";
import ProfileCard from "@/components/Profilecard";

const people = [
    {
        image: "/people/jacobpic.png",
        name: "Jacob S",
        title: "Founder",
        description:
            "I founded Mode to Code over the summer of 2024, and am passionate about teaching technology. I enjoy coding, playing drums, and hanging out with my family. You can email me at: jacob@modetocode.com",
    },
    
    {
        image: "/people/aydinpic.jpg",
        name: "Aydin K",
        title: "Assisted Living Program Co-Lead",
        description:
            "Hi! I'm Aydin, a co-leader of the Assisted Living Program for Mode to Code. My goal is to create a space where we can bridge the digital divide gap between the youth and the elderly. Outside of school and teaching, I love volunteering, playing soccer, and hanging out with friends.",
    },
    {
        image: "/people/grahampic.jpg",
        name: "Graham T",
        title: "Assisted Living Program Co-Lead",
        description:
            "Hi, my name is Graham. I joined Mode to Code because I noticed a disconnect between younger generations and their grandparents. Through the assisted living program, I hope to help bridge that gap. Outside of Mode to Code, I enjoy playing sports, reading, and spending time with my friends and family.",
    },
    {
        image: "/people/rohanpic.png",
        name: "Rohan S",
        title: "Instructor and UHS Hacks Volunteer",
        description:
            "I'm a teacher with Mode to Code, and I’ve loved coding since I was in elementary school. I now like working on small coding projects, usually websites. I also enjoy playing piano and tennis.",
    },
    {
        image: "/people/franchesqa.png",
        name: "Franchesqa L",
        title: "UHS Hacks Social Media Manager",
        description:
            "Hi! I'm Franchesqa, and I help with community outreach and content creation. When not designing our next post for UHS Hacks, I program small projects in Java, Python, and R. Outside of all of this, I spend my time playing badminton, teaching, or playing video games. ",
    },
    {
        image: "/people/lilalpic.jpg",
        name: "Lila L",
        title: "UHS Hacks Lead Finance",
        description:
            "Hi! I’m helping out with UHS Hacks because I enjoy coding and want to help others learn more. I have experience in Java, Javascript, HTML, and CSS, and have helped develop websites for UCSF. In my free time, I enjoy doing gymnastics, drawing, and baking.",
    },
    {
        image: "/people/lilapic.png",
        name: "Lila R",
        title: "Mode to Code Social Media Manager",
        description:
            "Hi! I help out with Mode to Code’s social media. In my free time, you can find me writing, learning about psychology, or listening to music. You can email me at: lilajaderaj@gmail.com",
    },
    {
        image: "/people/carolinepic.jpg",
        name: "Caroline C",
        title: "Instructor",
        description:
            "Hi! I'm Caroline, an instructor with Mode to Code. I have been passionate about coding since elementary school, and now I lead my high school’s Girls Who Code club. Outside of school, I love to dance and hang out with my dogs!",
    },
    {
        image: "/people/annapic.png",
        name: "Anna B",
        title: "Instructor",
        description:
            "Hi! I’m Anna, an instructor with Mode to Code. I help teach various classes to people of all ages. I enjoy coding in Python, Swift and HTML. I also love to play basketball and crochet.",
    },
    {
        image: "/people/joeypic.jpg",
        name: "Joey P",
        title: "Instructor",
        description:
            "I taught with Jacob at the Noe Branch public library over the course of a few weeks where we taught a group of middle schoolers how to design in html. Outside of school I like to play badminton, chess, and hang out with friends :)",
    },
    {
        image: "/people/khalilpic.jpg",
        name: "Khalil S",
        title: "Instructor",
        description:
            "Hi, my name is Khalil. I want to make sure that in a time with such advanced and targeted cyber attacks, everyone can feel safe and comfortable using technology and the internet. I enjoy fencing and 3d modeling. ",
    },
    {
        image: "/people/ellapic.jpg",
        name: "Ella S",
        title: "Instructor and UHS Hacks Volunteer",
        description:
            "I helped teach middle school classes at CAIS and Live Oak. I enjoy coding in HTML, CSS, Tailwind and Python. I founded my school's Girls Who Code club and also enjoy math, basketball, and reading.",
    },
    {
        image: "/people/rowanpic.png",
        name: "Rowan C",
        title: "UHS Hacks Volunteer",
        description:
            "I joined Mode to Code because I want to create a space where students can come together to learn, build, and collaborate. Outside of school, I enjoy biking, exploring nature, and traveling. You can email me at: Rowan.chandra_26@sfuhs.org",
    },
    {
        image: "/people/aristupic.png",
        name: "Aristu S",
        title: "UHS Hacks Volunteer",
        description:
            "Hi, I'm Aristu. I'm passionate about teaching and empowering young minds with tech skills. I'm excited to help out with UHS Hacks!",
    },
    
    {
        image: "/people/naveenpic.png",
        name: "Naveen G",
        title: "UHS Hacks Volunteer",
        description:
            "Excited to help out with UHS Hacks. Currently a software developer at Branded NIL and founder of locatemeals.com. I like to make crypto and AI related projects and play basketball.",
    },
    {
        image: "/people/ethanpic.png",
        name: "Ethan P",
        title: "UHS Hacks Volunteer",
        description:
            "Hi, I'm Ethan. I like all types of programming, including competitive programming, web, app, and game development, and math and physics visualizations. Regarding UHS Hacks, I've created the problems and solving interface for the midday competitive programming activity. You can view my projects at: https://github.com/grassEqualsBugs",
    },
    // Add more people as needed
];

export default function MeetTheTeamClient() {
    return (
        <div className="w-full overflow-x-hidden overflow-y-hidden">
            <div className="meettheteambg h-screen w-full bg-cover bg-center overflow-y-hidden">
                <div className="h-full flex flex-col justify-center items-center text-white">
                    <h1 className="lg:text-9xl text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">MEET THE TEAM</h1>
                </div>
            </div>
            {/* Who we are */}
            <div className="w-full bg-blue-200 pb-32">
                <div className=" w-full row-auto col-auto gap-y-44 justify-between  pt-32 ">
                    <h2 className="lg:text-6xl text-5xl font-bold pb-12 text-center">OUR TEAM</h2>

                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
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