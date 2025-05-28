// "use client";
// import dynamic from "next/dynamic";
// import BasicButton from "@/components/BasicButton";
import Client from "./client";
// import { Metadata } from "next";
// import Map from "@/components/TeachingMap";



export const metadata = { 
    title: "Mode to Code | About",
    description: "Learn more about Mode to Code, our mission, and how we are making an impact in the world of technology education.",
}

const page = () => {
    return (
        <Client/>
    )
}

export default page