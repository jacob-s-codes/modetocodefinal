"use client";
import React, { useEffect, useState } from 'react';
import Learnmorebtn from './Learnmorebtn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const navBgClass = pathname === '/uhshacks' ? 'bg-red-900' : 'bg-darkbg';
    const textColorClass = pathname === '/uhshacks' ? 'hover:text-red-300' : 'hover:text-blue-300';
    const responsiveBg = pathname === '/uhshacks' ? 'hover:bg-red-500' : 'hover:bg-blue-800';
    // 'bg-[#a6192e]

    const [activeMenu, setActiveMenu] = useState<string | undefined>(undefined);

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 640) {
                setIsMobileMenuOpen(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to handle clicks on mega menu links
    const handleMegaMenuLinkClick = () => {
        // Hide the menu by setting activeMenu to null
        setActiveMenu(undefined);
    };

    return (
        <div className="sticky top-0 z-30">
            <div className={`text-white w-full ${navBgClass} relative overflow-visible`}>
                <ul className="max-w-[1800px] mx-auto flex flex-row items-center justify-between lg:text-xl text-lg py-2">
                    <Link href="/" onClick={isMobileMenuOpen ? () => setIsMobileMenuOpen(false) : undefined}>
                        <li className="text-2xl ml-8">
                            {/* <img src="/horizontalmtclogo.jpg" alt="Logo" className="w-36" /> */}
                            <img src="/svglogo.svg" alt="Logo" className="w-36" />
                        </li>
                    </Link>

                    {/* Hamburger Icon */}
                    <button
                        className="flex flex-col justify-center items-center sm:hidden h-12 w-12 mr-8 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <span className={`block h-0.5 w-6 rounded-sm bg-white mb-1.5 transition-all duration-300 ease-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'}`}></span>
                        <span className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-0'}`}></span>
                    </button>

                    {/* Dropdown for Mobile Menu */}
                    <div
                        className={`absolute top-full right-0 w-3/4 sm:w-1/2 h-screen ${navBgClass} text-white shadow-2xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}`}
                    >
                        <div className="p-4 flex flex-col gap-2">
                            <Link href="/about" className={`block px-4 py-3 ${responsiveBg} hover:text-white rounded transition-colors duration-200`} onClick={toggleMobileMenu}>ABOUT</Link>
                            {/* <MobileLink name={"ABOUT"} link={'/about'}/> */}
                            <Link href="/meettheteam" className={`block px-4 py-3 ${responsiveBg} hover:text-white rounded transition-colors duration-200 pl-8`} onClick={toggleMobileMenu}>MEET THE TEAM</Link>
                            {/* <Link href="/casestudies" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200 pl-8" onClick={toggleMobileMenu}>CASE STUDIES - COMING SOON</Link> */}
                            <Link href="/casestudies" className={`block px-4 py-3 ${responsiveBg} hover:text-white rounded transition-colors duration-200 pl-8`} onClick={toggleMobileMenu}>CASE STUDIES</Link>
                            <Link href="/uhshacks" className={`block px-4 py-3 ${responsiveBg} hover:text-white rounded transition-colors duration-200 pl-8`} onClick={toggleMobileMenu}>UHS HACKS</Link>
                            <div className={`h-px  ${pathname === '/uhshacks' ? 'bg-white' : 'bg-gray-700'} my-2`}></div>
                            <Link href="/learn" className={`block px-4 py-3 ${responsiveBg} hover:text-white rounded transition-colors duration-200`} onClick={toggleMobileMenu}>LEARN</Link>
                            <Link href="/learnai" className={`block px-4 py-3 ${responsiveBg} hover:text-white rounded transition-colors duration-200 pl-8`} onClick={toggleMobileMenu}>AI</Link>
                            <Link href="/buildwebsites" className={`block px-4 py-3 ${responsiveBg} hover:text-white rounded transition-colors duration-200 pl-8`} onClick={toggleMobileMenu}>BUILD WEBSITES</Link>
                            <Link href="/makegames" className={`block px-4 py-3 ${responsiveBg} hover:text-white rounded transition-colors duration-200 pl-8`} onClick={toggleMobileMenu}>MAKE GAMES</Link>
                            <div className={`h-px  ${pathname === '/uhshacks' ? 'bg-white' : 'bg-gray-700'} my-2`}></div>
                            <Link href="/contact" className={`block px-4 py-3 ${responsiveBg} hover:text-white rounded transition-colors duration-200`} onClick={toggleMobileMenu}>CONTACT</Link>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden flex-row justify-between lg:gap-x-36 gap-x-12 sm:flex">
                        <li
                            className={`hoverable hover:${navBgClass} hover:text-white`}
                            onMouseEnter={() => setActiveMenu('about')}
                            onMouseLeave={() => setActiveMenu(undefined)}
                        >
                            <div className='flex flex-row items-center group'>
                                <Link href="/about" className={`relative block py-6 pr-2 uppercase ${textColorClass}`} onClick={handleMegaMenuLinkClick}>ABOUT</Link>
                            </div>
                            <div className={`p-6 mega-menu mb-16 sm:mb-0 shadow-xl ${navBgClass} ${activeMenu === 'about' ? 'active-mega-menu' : ''}`}>
                                <div className="container mx-auto w-full flex flex-wrap lg:flex-nowrap justify-center items-center ">
                                    {/* Text Section - 50% width */}
                                    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-4 ">
                                        <ul className="w-full  pb-6 pt-6 border border-white px-2 rounded-lg ">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-file-person-fill h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 16 16">
                                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-white uppercase mb-2">Meet the team</h3>
                                            </div>
                                            <p className="text-sm text-white">Check out the amazing volunteers, teachers and leaders who help Mode to Code</p>
                                            <div onClick={handleMegaMenuLinkClick} className='w-fit'>
                                                <Link href="/meettheteam" className='w-fit'><Learnmorebtn /></Link>
                                            </div>
                                        </ul>
                                        <ul className="w-full mt-2 pb-6 pt-6 border border-white px-2 rounded-lg ">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-file-person-fill h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 16 16">
                                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-white uppercase mb-2">Case Studies</h3>
                                            </div>
                                            <p className="text-sm text-white">Learn more about the impact of our various programs in the community</p>
                                            <div onClick={handleMegaMenuLinkClick} className='w-fit'>
                                                {/* <Link href="/casestudies">Coming soon!</Link> */}
                                                <Link href="/casestudies" className='w-fit'><Learnmorebtn /></Link>
                                            </div>
                                        </ul>
                                        <ul className="w-full mt-2 pb-6 pt-6 border border-white px-2 rounded-lg ">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-file-person-fill h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 16 16">
                                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-white uppercase mb-2">UHS Hacks</h3>
                                            </div>
                                            <p className="text-sm text-white">Learn more about the impact of our various programs in the community</p>
                                            <div onClick={handleMegaMenuLinkClick} className='w-fit'>
                                                {/* <Link href="/casestudies">Coming soon!</Link> */}
                                                <Link href="/uhshacks" className='w-fit'><Learnmorebtn /></Link>
                                            </div>
                                        </ul>
                                    </div>


                                    {/* Image Section - 50% width */}
                                    <div className="w-full lg:w-1/2 px-4">
                                        <img src="/teachingimg29.jpg" alt="MTC Logo" className="w-full h-auto object-contain rounded-lg lg:flex hidden" />
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li
                            className={`hoverable hover:${navBgClass} hover:text-white`}
                            onMouseEnter={() => setActiveMenu('learn')}
                            onMouseLeave={() => setActiveMenu(undefined)}

                        >
                            <div className='flex flex-row items-center group'>
                                <Link href="/learn" className={`relative block py-6 pr-2 uppercase ${textColorClass}`} onClick={handleMegaMenuLinkClick}>LEARN</Link>
                            </div>

                            <div className={`p-6 mega-menu mb-16 sm:mb-0 shadow-xl ${navBgClass} ${activeMenu === 'learn' ? 'active-mega-menu' : ''}`}>
                                <div className="container mx-auto w-full flex flex-wrap lg:flex-nowrap justify-center items-center ">
                                    {/* Text Section - 50% width */}
                                    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-4 ">
                                        <ul className="w-full  pb-6 pt-6 border  border-white px-2 rounded-lg">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-book h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 16 16">
                                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-white uppercase mb-2">Learn AI</h3>
                                            </div>
                                            <p className="text-sm text-white">Learn about neural networks, linear algebra and more</p>
                                            <div onClick={handleMegaMenuLinkClick} className='w-fit'>
                                                <Link href="/learnai"><Learnmorebtn /></Link>
                                            </div>
                                        </ul>
                                        <ul className="w-full mt-2 pb-6 pt-6 border  border-white px-2 rounded-lg">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-book h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 16 16">
                                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-white uppercase mb-2">Build websites</h3>
                                            </div>
                                            <p className="text-sm text-white">Learn how to start building your own websites</p>
                                            <div onClick={handleMegaMenuLinkClick} className='w-fit'>
                                                <Link href="/buildwebsites"><Learnmorebtn /></Link>
                                            </div>
                                        </ul>
                                        <ul className="w-full mt-2 pb-6 pt-6 border border-white px-2 rounded-lg">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-book h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 16 16">
                                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-white uppercase mb-2">Make videogames</h3>
                                            </div>
                                            <p className="text-sm text-white">Learn how to build your own video games from scratch</p>
                                            <div onClick={handleMegaMenuLinkClick} className='w-fit'>
                                                <Link href="/makegames"><Learnmorebtn /></Link>
                                            </div>
                                        </ul>
                                    </div>

                                    {/* Image Section - 50% width */}
                                    <div className="w-full lg:w-1/2 px-4 flex flex-col items-center justify-center ">
                                        <img src="/aibg.jpeg" alt="MTC Logo" className="w-full h-auto object-contain rounded-lg lg:flex hidden" />
                                    </div>
                                </div>
                            </div>
                        </li>

                        <Link href="/contact" className={`mr-8 relative block py-6 px-4 lg:p-6 uppercase ${textColorClass}`}>
                            <li>CONTACT</li>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;