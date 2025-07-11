import React from 'react'

interface BasicButtonProps {
    src: string
}

const BasicButton = ({ src }: BasicButtonProps) => {
    return (
        <div className=" flex lg:pr-10 pr-6 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src={src} className="lg:w-64 md:w-32 w-28" alt="" />
        </div>
    )
}

export default BasicButton