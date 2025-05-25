// app/casestudies/[slug]/page.tsx
"use client";
import { notFound } from 'next/navigation';
import caseStudies from '@/app/data/caseStudies'; // Custom file where you store your data
import CryptoText from '@/components/CryptoText';
import Link from 'next/link';


export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const study = await params.then(p => caseStudies.find(cs => cs.slug === p.slug));
    if (!study) return notFound();



    return (
        <div className='w-full h-full py-36'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className=''>

                    <h1 className="lg:text-6xl text-4xl uppercase pb-1">{study.title}</h1>
                    <hr className='max-w-4xl mx-auto py-1' />
                    <h2 className="text-xl font-light text-gray-500">{study.place}</h2>
                    <div className='mt-4 flex items-center gap-x-6'>

                        {study.website && (
                            <a href={study.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-box-arrow-up-right w-5 h-auto" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                                </svg>
                            </a>
                        )}
                        {study.share && (
                            <a
                                href={`mailto:?subject=Check out this case study&body=Here's the link: ${study.share}`}
                                className="hover:text-blue-500 hover:underline"
                                title="Share via email"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-share w-5 h-auto" viewBox="0 0 16 16">
                                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                                </svg>
                            </a>
                        )}
                        {study.ig && (
                            <a href={study.ig} target="_blank" className="hover:text-blue-500 ">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" className="bi bi-instagram w-5 h-auto" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                            </a>
                        )}



                    </div>
                </div>
                <div className=' flex justify-center items-center py-6 w-full h-fit max-w-7xl mx-auto'>
                    <img src={study.image1} className="h-full rounded-lg " alt={study.title} />
                </div>



                <p className='max-w-4xl text-lg'>{study.description1}</p>
                <div className='flex lg:flex-row flex-col justify-center items-center my-8 gap-4'>
                    <img src={study.image2} className='w-full h-auto rounded-lg' alt={study.title} />
                    <img src={study.image3} className='w-full h-auto rounded-lg ' alt={study.title} />
                </div>
                <p className='max-w-4xl text-lg'>{study.description2}</p>
                {/* <hr className='max-w-4xl mx-auto my-8' /> */}
                <h2 className='pt-8 pb-1 uppercase text-3xl font-semibold'>By the numbers:</h2>
                <div className='flex lg:flex-row flex-col items-center lg:justify-between justify-center max-w-4xl mx-auto text-4xl text-center text-bold my-8'>
                    <CryptoText text={study.fact1 || "Default Fact"} />
                    <hr className='lg:hidden visible w-full my-8'/>
                    <svg width="44" height="100" viewBox="0 0 44 1669" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 0.5C22 1189.7 22 1608 22 1668.5" className='lg:visible hidden' stroke="black" stroke-width="20" />
                    </svg>






                    <CryptoText text={study.fact2 || "Default Fact"} />
                    <svg width="44" height="100" viewBox="0 0 44 1669" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 0.5C22 1189.7 22 1608 22 1668.5" stroke="black" className='lg:visible hidden' stroke-width="20" />
                    </svg>
                    <hr className='lg:hidden visible w-full'/>
                    <CryptoText text={study.fact3 || "Default Fact"} />

                </div>
                <Link href="/casestudies" className='border border-black px-6 py-2 rounded-lg mt-8 hover:bg-darkbg hover:text-white duration-300'>Read more case studies!</Link>



                {/* <hr className='max-w-4xl mx-auto my-8' /> */}


            </div>

        </div>
    );
}
