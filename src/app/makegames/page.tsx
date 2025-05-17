import CardLeft from '@/components/CardLeft'
import CardRight from '@/components/CardRight'
import React from 'react'

const page = () => {
    return (
        <div className='w-full overflow-x-hidden overflow-y-hidden bg-gradient-to-b from-white to-blue-300'>
            <div className="makegamesbg h-screen w-full bg-cover bg-center overflow-y-hidden">
                <div className="h-full flex flex-col justify-center items-center text-white">
                    <h1 className="lg:text-9xl text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500 uppercase">Make Games</h1>
                </div>
            </div>
            <div className='w-full'>
                <CardLeft title={'Step 1: Learn the Basics'} description={'Python is a coding language that is easy to learn and is used by many programmers. I highly recommend starting with Khan Academy, a free, online learning platform.'} imageUrl={'/khanlogo.png'} buttonText={'Try it out!'} buttonUrl={'https://www.khanacademy.org/computing/intro-to-python-fundamentals'}></CardLeft>

                <CardRight title={"Step 2: Bro Code Python Course"} description={'This is an excellent course that will teach you more of the basics while also giving you great projects to work on!'} imageUrl={'/brocodeimg.jpg'} buttonText={'Watch now!'} buttonUrl={'https://youtube.com/playlist?list=PLZPZq0r_RZOOkUQbat8LyQii36cJf2SWT&si=SCJsO8HqhKSgQ2iL'} ></CardRight>

                <CardLeft title={'Step 3: Practice Problems'} description={'Once you feel like you\'ve mastered the basics, try out these free logic problems in python!'} imageUrl={'/codingbat.jpg'} buttonText={'Start practicing!'} buttonUrl={'https://codingbat.com/python'}></CardLeft>

                <CardRight title={"Step 4: Free Code Camp Pygame"} description={'At this point, you should have the basics down and are ready to make your own games. This excellent tutorial will help you make your own platformer in python!'} imageUrl={'/platformer.png'} buttonText={'Watch now!'} buttonUrl={'https://www.youtube.com/watch?v=6gLeplbqtqg'} ></CardRight>
            </div>

        </div>
    )
}

export default page