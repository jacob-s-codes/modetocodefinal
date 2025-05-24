// app/casestudies/[slug]/page.tsx
import { notFound } from 'next/navigation';
import caseStudies from '@/app/data/caseStudies'; // Custom file where you store your data

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(c => c.slug === params.slug);

  if (!study) return notFound();

  return (
    <div className="p-12 max-w-4xl mx-auto h-screen">
      <h1 className="text-4xl font-bold">{study.title}</h1>
      <p className="text-sm text-gray-500">{study.place}</p>
      <img src={study.image} className="w-full h-auto object-cover my-6" alt={study.title} />
      <p>{study.description}</p>
    </div>
  );
}
