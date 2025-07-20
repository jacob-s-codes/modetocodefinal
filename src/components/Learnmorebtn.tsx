import React from 'react'
import { usePathname } from 'next/navigation'

const Learnmorebtn = () => {
    const pathname = usePathname();
    const hoverText = pathname === '/uhshacks' ? 'hover:text-red-300' : 'hover:text-blue-300';
    const hoverBorder = pathname === '/uhshacks' ? 'hover:border-b-red-300' : 'hover:border-b-blue-300';
    return (
        <div className='mt-4'>
            <p className={`border-b border-b-white w-fit ${hoverText} ${hoverBorder}`}>Learn more</p>
        </div>

    )
}

export default Learnmorebtn