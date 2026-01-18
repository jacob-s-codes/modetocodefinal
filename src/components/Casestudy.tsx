import React from 'react';
// import Image from 'next/image';

export default function Casestudy({ 
  
  title, 
  image, 
  description, 
  link 
}: { 
 
  title: string;
  image: string;
  description: string;
  link: string;
}) {
  return (
    <div className="group flex flex-col lg:gap-6 gap-4 p-6 max-w-xl w-full h-auto ">
      {/* Image Container */}
      <div className="rounded-lg">
        <a href={link} target='_blank'><img 
          src={image} 
          alt="Case study image" 
           
          className="w-full h-96 " 
        /></a>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:gap-3 gap-2 mr-8">
        {/* Place and Title */}
        <div className="space-y-1">
          
          <a 
            href={link} target='_blank' 
            className="text-xl font-bold text-gray-900 hover:text-blue-500 transition-colors duration-200 line-clamp-2 group-hover:underline decoration-2 underline-offset-2"
          >
            {title}
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed flex-grow ">
          {description}...
        </p>

        
      </div>
    </div>
  );
}