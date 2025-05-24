// app/casestudies/[slug]/page.tsx
import { notFound } from 'next/navigation';
import caseStudies from '@/app/data/caseStudies'; // Custom file where you store your data

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const study = await params.then(p => caseStudies.find(cs => cs.slug === p.slug));

    if (!study) return notFound();

    return (
        <div className='w-full h-full py-36'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>

                    <h1 className="text-6xl px-8 text-center uppercase pb-1">{study.title}</h1>
                    <hr className='max-w-4xl mx-auto py-1' />
                    <h2 className="text-xl font-light text-gray-500">{study.place}</h2>
                </div>
                <div className=' flex justify-center items-center py-6'>
                    <img src={study.image} className="h-[80vh] rounded-lg " alt={study.title} />
                </div>



                <p className=''>{study.description}</p>

            </div>

        </div>
    );
}
