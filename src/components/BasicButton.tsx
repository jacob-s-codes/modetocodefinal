import Link from 'next/link'
import React from 'react'

interface BasicButtonProps {
    text: string;
    link: string;
}

const BasicButton = ({text, link} : BasicButtonProps) => {
    return (
        <div>
            <Link href={link} className="relative inline-flex px-8 py-4 font-medium group w-fit">
                <span
                    className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black text-lg group-hover:text-white uppercase">{text}</span>
            </Link>
        </div>
    )
}

export default BasicButton