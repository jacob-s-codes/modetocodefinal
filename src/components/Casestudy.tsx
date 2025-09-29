import React from 'react';
import Image from 'next/image';

export default function Casestudy({ 
  place, 
  title, 
  image, 
  description, 
  link 
}: { 
  place: string;
  title: string;
  image: string;
  description: string;
  link: string;
}) {
  return (
    <div className="group relative flex flex-col gap-6 p-6 lg:h-[450px] lg:w-80 w-full h-auto bg-gray-50 border-2 border-gray-300 rounded-xl shadow-sm hover:shadow-lg hover:shadow-gray-400 hover:border-gray-400 transition-all duration-300 ease-in-out">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg">
        <Image 
          src={image} 
          alt="Case study image" 
          width={500} 
          height={300} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 flex-grow">
        {/* Place and Title */}
        <div className="space-y-1">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {place}
          </p>
          <a 
            href={link} 
            className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 line-clamp-2 group-hover:underline decoration-2 underline-offset-2"
          >
            {title}
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {description}...
        </p>

        {/* Subtle visual indicator */}
        <a href={link}><div className="flex items-center justify-between mt-auto pt-2">
          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-darkbg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <svg 
            className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div></a>
      </div>
    </div>
  );
}