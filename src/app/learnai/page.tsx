import CardLeft from '@/components/CardLeft'
import CardRight from '@/components/CardRight'
import React from 'react'

const page = () => {
    return (
        <div className='w-full overflow-x-hidden overflow-y-hidden bg-gradient-to-b from-white to-blue-300'>
            <div className="learnaibg h-screen w-full bg-cover bg-center overflow-y-hidden">
                <div className="h-full flex flex-col justify-center items-center text-white">
                    <h1 className="text-9xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">LEARN AI</h1>
                </div>
            </div>
            <div className='w-full'>
                <CardLeft title={'Step 1: Basics of AI'} description={'Start here on your AI journey! This 3blue1brown video is a great introduction to how AI works using neural networks.'} imageUrl={'/teachingimg1.jpg'} buttonText={'Start Watching Now!'} buttonUrl={'https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&ab_channel=3Blue1Brown'}></CardLeft>

                <CardRight title={'Hi'} description={'Hi'} imageUrl={'/teachingimg1.jpg'} buttonText={'Hi'} buttonUrl={'Hi'} ></CardRight>
            </div>

        </div>
    )
}

export default page