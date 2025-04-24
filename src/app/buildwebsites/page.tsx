import CardLeft from '@/components/CardLeft'
import CardRight from '@/components/CardRight'
import React from 'react'

const page = () => {
    return (
        <div className='w-full overflow-x-hidden overflow-y-hidden bg-gradient-to-b from-white to-blue-300'>
            <div className="buildwebsitesbg h-screen w-full bg-cover bg-center overflow-y-hidden">
                <div className="h-full flex flex-col justify-center items-center text-white">
                    <h1 className="text-9xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">BUILD WEBSITES</h1>
                </div>
            </div>
            <div className='w-full'>
                <CardLeft title={'Step 1: Basics of AI'} description={'Start here on your AI journey! This 3blue1brown video is a great introduction to how AI works using neural networks.'} imageUrl={'/3blue1brow.jpg'} buttonText={'Start Watching Now!'} buttonUrl={'https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&ab_channel=3Blue1Brown'}></CardLeft>

                <CardRight title={"Step 2: Harvard\'s AI Course"} description={'Now that you understand the basics of AI, start coding your own projects! This Harvard course is a great place to start. This free course will take you through the basics of AI and machine learning.'} imageUrl={'/harvardimage.jpg'} buttonText={'Try it out!'} buttonUrl={'https://www.edx.org/learn/machine-learning/harvard-university-machine-learning-and-ai-with-python'} ></CardRight>

                <CardLeft title={'Step 3: Free Code Camp AI Course'} description={'This almost 4-hour video will help you create your own AI self-driving car. This is a great way to learn how to code AI projects.'} imageUrl={'/fccai.png'} buttonText={'Watch Now!'} buttonUrl={'https://www.youtube.com/watch?v=VgzHT9quo5c'}></CardLeft>

                <CardRight title={"Step 4: Google\'s AI Course"} description={'Try out Google\'s own free AI course, \"AI for Anyone\". This fantastic course is taught by Google\'s AI experts and will teach you the basics of AI.'} imageUrl={'/googleimg.jpeg'} buttonText={'Try it out!'} buttonUrl={'https://www.edx.org/learn/machine-learning/harvard-university-machine-learning-and-ai-with-python'} ></CardRight>
            </div>

        </div>
    )
}

export default page