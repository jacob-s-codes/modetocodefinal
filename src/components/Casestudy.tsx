import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Casestudy({ place, title, image, description, link }: { place: string, title: string, image: string, description: string, link: string }) {
  return (
    <div className='flex flex-col gap-x-4 lg:gap-y-6 gap-y-12 hover:shadow-2xl px-4 pt-4 pb-8 lg:h-[450px] hover:shadow-black duration-300 lg:w-80 w-full h-auto rounded-lg lg:bg-blue-200 bg-blue-300 border-4 border-white'>
      {/* <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt="Case study image"
          fill
          className="object-cover"
        />
      </div> */}
      <Image src={image} alt="case" width={500} height={500} className='w-full h-auto rounded-lg'/>

      <div>
        <p className='text-gray-700 text-sm'>{place}</p>
        <Link href={link}><h2 className='text-xl font-black hover:underline hover:text-blue-700 hover:cursor-pointer'>{title}</h2></Link>
      </div>
      
      <p>{description}...</p>
    </div>
  );
}
