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
           
          className="w-full h-auto " 
        /></a>
        
      </div>

      {/* Content */}
      <div className="flex flex-col lg:gap-3 gap-2 mr-8">
        {/* Place and Title */}
        <div className="space-y-1">
          
          <a 
            href={link} target='_blank' 
            className="text-xl font-bold text-white hover:text-blue-300 transition-colors duration-200 line-clamp-2 group-hover:underline  decoration-2 underline-offset-2"
          >
            {title}
          </a>
        </div>

        {/* Description */}
        <p className="text-white text-sm leading-relaxed flex-grow ">
          {description}...
        </p>

        
      </div>
    </div>
  );
}