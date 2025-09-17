"use client";

import Link from "next/link";

interface NewsSectionProps {
  subtitle: string;
  title: string;
  excerpt: string;
  link: string;
  imgSrc: string;
  reverse?: boolean; // default is left, true makes it right
}

function NewsSection({ subtitle, title, excerpt, link, imgSrc, reverse }: NewsSectionProps) {
  return (
    <div
      className={`flex ${
        reverse ? "lg:flex-row-reverse text-right" : "lg:flex-row"
      } flex-col-reverse parent-leftright lg:items-center justify-between`}
    >
      {/* Text Section */}
      <div
        className={`flex flex-col xl:max-w-2xl max-w-xl ${
          reverse ? "justify-end w-full animateleft" : "animateleft"
        }`}
      >
        <h3 className="uppercase text-blue-900 lg:text-3xl text-2xl">{subtitle}</h3>
        <h2 className="uppercase lg:text-4xl text-3xl font-bold pb-2">{title}</h2>
        <hr className="border-4 border-black mb-8" />
        <p className="lg:text-2xl text-xl font-light mb-8">{excerpt}</p>
        <Link
          href={link}
          target="_blank"
          className={`relative inline-flex px-8 py-4 font-medium group w-fit ${
            reverse ? "ml-auto" : ""
          }`}
        >
          <span className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white uppercase">
            READ MORE
          </span>
        </Link>
      </div>

      {/* Image Section */}
      <div
        className={`max-w-3xl relative animateright rounded-xl lg:pb-0 pb-8 ${
          reverse ? "lg:mr-8" : "lg:ml-8"
        }`}
      >
        <img
          src={imgSrc}
          alt={title}
          className="w-full rounded-xl shadow-2xl shadow-darkbg"
        />
      </div>
    </div>
  );
}

export default NewsSection;