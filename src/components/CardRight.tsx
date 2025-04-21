import Link from 'next/link';
import React from 'react'

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    buttonText: string;
    buttonUrl: string;
}

export default function Card({ title, description, imageUrl, buttonText, buttonUrl }: CardProps) {
    return (
            <div className="text-white card pt-[10rem] md:w-[50%] w-[75%] my-12  ml-auto shadow-lg relative z-10 mr-12"
                    style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="card-content p-[1.5em]">
                        <h2 className="lg:text-3xl text-2xl card-title relative max-w-[100%]">
                            {title}
                        </h2>
                        <p className="pr-[15%] text-xl py-4">
                            {description}
                        </p>
                        <Link href={buttonUrl}
                            target="_blank">
                            <button
                                className="text-white border-4 md:px-6 px-2 py-1 rounded-lg border-white transition-all ease-linear duration-200 hover:shadow-2xl bg-transparent hover:scale-[105%]">
                                {buttonText}
                            </button>
                        </Link>
                    </div>
                </div>
    )
}