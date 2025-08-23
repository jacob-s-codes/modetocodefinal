import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';

export default function Casestudy({ place, title, image, description, link }: { place: string, title: string, image: string, description: string, link: string }) {
  return (
    <div className='flex flex-col gap-x-4 lg:gap-y-6 gap-y-12  px-4 pt-4 pb-8 lg:h-[450px] hover:shadow-black duration-300 lg:w-80 w-full h-auto  border-2 border-black '>
      {/* <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt="Case study image"
          fill
          className="object-cover"
        />
      </div> */}
      <Image src={image} alt="case" width={500} height={500} className='w-full h-auto rounded-lg' />

      <div>
        <p className='text-gray-700 text-sm'>{place}</p>
        <a href={link} className="text-xl font-black underline w-fit hover:text-blue-700 hover:cursor-pointer">
          {title}
        </a>
      </div>

      <p>{description}...</p>
    </div>
  );
}
