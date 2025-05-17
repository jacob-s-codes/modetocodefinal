import React from 'react';
import Link from 'next/link';

interface Props {
    link: string;
    name: string;
}

export default function MobileLink({link, name}: Props) {
    return (
        <div>
        <Link href={link} className={`block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200`} >{name}</Link>
    </div>
    );
    
}

