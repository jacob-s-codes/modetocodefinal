import React, { useEffect, useState } from 'react';
import Learnmorebtn from './Learnmorebtn';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Effect to prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="sticky top-0 z-30">
            <div className="text-white w-full bg-darkbg relative overflow-visible">
                <ul className="max-w-[1800px] mx-auto flex flex-row items-center justify-between lg:text-xl text-lg">
                    <Link href="/">
                        <li className="text-2xl ml-8">
                            <img src="/horizontalmtclogo.jpg" alt="Logo" className="w-36" />
                        </li>
                    </Link>

                    {/* Hamburger Icon */}
                    <button
                        className="flex flex-col justify-center items-center sm:hidden h-12 w-12 mr-8 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <span className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                        <span className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                    </button>

                    {/* Dropdown for Mobile Menu */}
                    <div
                        className={`absolute top-full right-0 w-3/4 sm:w-1/2 h-screen bg-darkbg text-white shadow-2xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}`}
                    >
                        <div className="p-4 flex flex-col gap-2">
                            <a href="./about.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200">ABOUT</a>
                            <a href="./theteam.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200 pl-8">MEET THE TEAM</a>
                            <a href="./casestudies.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200 pl-8">CASE STUDIES</a>
                            <div className="h-px bg-gray-700 my-2"></div>
                            <a href="./learn.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200">LEARN</a>
                            <a href="./learnai.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200 pl-8">LEARN AI</a>
                            <a href="./buildwebsites.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200 pl-8">BUILD WEBSITES</a>
                            <a href="./makegames.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200 pl-8">MAKE GAMES</a>
                            <div className="h-px bg-gray-700 my-2"></div>
                            <a href="/contact" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200">CONTACT</a>
                        </div>
                    </div>



                    {/* Desktop Navigation */}
                    <div className="hidden flex-row justify-between lg:gap-x-36 gap-x-12 sm:flex">
                        <li className="hoverable hover:bg-darkbg hover:text-white">
                            <div className='flex flex-row items-center group'>
                                <a href="#" className="relative block py-6 pr-2 uppercase hover:text-white">ABOUT</a>
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-caret-down w-6 h-auto rotate-180 group-hover:rotate-[-1deg] duration-500" viewBox="0 0 16 16">
                                    <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                                </svg>
                            </div>
                            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-darkbg">
                                <div className="container mx-auto w-full flex flex-wrap lg:flex-nowrap justify-center items-center ">
                                    {/* Text Section - 50% width */}
                                    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-4 ">
                                        <ul className="w-full  pb-6 pt-6 border border-white px-2 rounded-lg hover:bg-darkbg2">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-file-person-fill h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 16 16">
                                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-white uppercase mb-2">Meet the team</h3>
                                            </div>
                                            <p className="text-sm text-white">Check out the amazing volunteers, teachers, and leaders that help Mode to Code!</p>
                                            <Learnmorebtn />
                                        </ul>
                                        <ul className="w-full mt-2 pb-6 pt-6 border border-white px-2 rounded-lg hover:bg-darkbg2">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-file-person-fill h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 16 16">
                                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-white uppercase mb-2">Case Studies</h3>
                                            </div>
                                            <p className="text-sm text-white">Check out the amazing volunteers, teachers, and leaders that help Mode to Code!</p>
                                            <Learnmorebtn />
                                        </ul>
                                    </div>

                                    {/* Image Section - 50% width */}
                                    <div className="w-full lg:w-1/2 px-4">
                                        <img src="/teachingimg1.jpg" alt="MTC Logo" className="w-full h-auto object-contain rounded-lg" />
                                    </div>
                                </div>
                            </div>

                        </li>



                        <li className="hoverable hover:bg-darkbg hover:text-white">
                        <div className='flex flex-row items-center group '>
                                <a href="#" className="relative block py-6 pr-2 uppercase hover:text-white">LEARN</a>
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-caret-down w-6 h-auto rotate-180 group-hover:rotate-[-1deg] duration-500" viewBox="0 0 16 16">
                                    <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                                </svg>
                            </div>
                            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-darkbg ">
                                <div className="container mx-auto w-full flex flex-wrap lg:flex-nowrap justify-center items-center ">
                                    {/* Text Section - 50% width */}
                                    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-4 ">
                                        <ul className="w-full  pb-6 pt-6 border-2 hover:bg-darkbg2 border-white px-2 rounded-lg">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-book h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 16 16">
                                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-white uppercase mb-2">Learn AI</h3>
                                            </div>
                                            <p className="text-sm text-white">Check out the amazing volunteers, teachers, and leaders that help Mode to Code!</p>
                                            <Learnmorebtn />
                                        </ul>
                                        <ul className="w-full mt-2 pb-6 pt-6 border-2 hover:bg-darkbg2 border-white px-2 rounded-lg">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-book h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 16 16">
                                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-white uppercase mb-2">Build games</h3>
                                            </div>
                                            <p className="text-sm text-white">Check out the amazing volunteers, teachers, and leaders that help Mode to Code!</p>
                                            <Learnmorebtn />
                                        </ul>
                                        <ul className="w-full mt-2 pb-6 pt-6 border-2 border-white hover:bg-darkbg2 px-2 rounded-lg">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-book h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 16 16">
                                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-white uppercase mb-2">Make videogames</h3>
                                            </div>
                                            <p className="text-sm text-white">Check out the amazing volunteers, teachers, and leaders that help Mode to Code!</p>
                                            <Learnmorebtn />
                                        </ul>
                                    </div>

                                    {/* Image Section - 50% width */}
                                    <div className="w-full lg:w-1/2 px-4 flex flex-col items-center justify-center ">
                                        <img src="/aibg.jpeg" alt="MTC Logo" className="w-full h-auto object-contain rounded-lg" />
                                    </div>
                                </div>
                            </div>

                        </li>

                        <Link href="/contact" className="hover:underline mr-8 relative block py-6 px-4 lg:p-6 uppercase hover:text-white">
                            <li>CONTACT</li>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;