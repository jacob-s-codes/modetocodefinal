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
                <CardLeft title={'Step 1: Learn HTML and CSS'} description={'This websites teaches you all the basics that you need to know about websites and is how I started learning.'} imageUrl={'/Internetingishard.png'} buttonText={'Try it Out!'} buttonUrl={'https://internetingishard.netlify.app/html-and-css/introduction/'}></CardLeft>

                <CardRight title={"Step 2: The Odin Project"} description={'Another completely free resource that allows you to learn the basics of HTML and CSS but also more advanced topics if you\'re interested.'} imageUrl={'/theodinprojectimage.png'} buttonText={'Try it Out!'} buttonUrl={'https://www.theodinproject.com/paths/foundations/courses/foundations#html-foundations'} ></CardRight>

                <CardLeft title={'Step 3: Free Code Camp HTML and CSS'} description={'This website provides fantastic, free resources to help you learn almost anything about coding that you would want, but their web development course specifically is incredibly helpful!'} imageUrl={'/freecodecamplogo.png'} buttonText={'Try it Out!'} buttonUrl={'https://www.freecodecamp.org/'}></CardLeft>

                <CardRight title={"Step 4: Tailwind CSS"} description={'Once you\'ve got the basics of HTML and CSS, you can start customizing and styling your websites to look cool and modern. I used Tailwind CSS to make this website and I highly recommend it! Here\'s a free 4 hour course that will teach you everything you need!'} imageUrl={'/tailwindlogo.webp'} buttonText={'Try it out!'} buttonUrl={'https://www.youtube.com/watch?v=ft30zcMlFao'} ></CardRight>

                <CardLeft title={'Step 5: Host Your Website Online (For Free!)'} description={'Watch this video on how to use github and then watch this short video to learn how to host your video online for free using github!'} imageUrl={'/githublogo.png'} buttonText={'Host now!'} buttonUrl={'https://www.youtube.com/watch?v=OltY8JIaP-4'}></CardLeft>
            </div>

        </div>
    )
}

export default page