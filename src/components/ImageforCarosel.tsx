import React from 'react'

interface BasicButtonProps {
    src: string,
    href: string
}

const BasicButton = ({ src, href }: BasicButtonProps) => {
    return (
        <div className=" flex lg:mx-10 mx-6 flex-col justify-center items-center h-[350px] ">
            <a href={href} target='_blank'><img src={src} className="lg:w-64 md:w-32 w-28" alt="" /></a>
        </div>
    )
}

export default BasicButton