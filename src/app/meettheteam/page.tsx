"use client";
import ProfileCard from "@/components/Profilecard";

const people = [
    {
        image: "/teachingimg1.jpg",
        name: "Jacob Shaul",
        title: "Founder",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti perspiciatis ipsa ullam necessitatibus illo laudantium harum, odit sapiente?",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Jane Doe",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Jane Doe",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Jane Doe",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Jane Doe",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Jane Doe",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Jane Doe",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Jane Doe",
        title: "Instructor",
        description:
            "Passionate about teaching and empowering young minds with tech skills.",
    },
    {
        image: "/teachingimg2.jpg",
        name: "Jane Doe",
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
                    <h1 className="text-9xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">MEET THE TEAM</h1>
                </div>
            </div>
            {/* Who we are */}
            <div className="w-full bg-blue-200 pb-32">
                <div className=" w-full max-w-[1800px] mx-auto px-8 row-auto col-auto gap-y-44 justify-between  pt-32 ">
                    <h2 className="text-6xl font-bold pb-12">OUR TEAM</h2>

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