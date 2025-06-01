// "use client";


// import TeachingMap from '@/components/TeachingMap';
// import Testimonials from '@/components/Testimonials';
// import Link from 'next/link';
// import { icon } from 'leaflet';
import HomeClient from './HomeClient';

export const metadata = { 
  title: "Mode to Code | Home",
  description: "Building a community of students and teachers who are passionate about technology.",
}

export default function Home() {

  return ( 
    <HomeClient/>
  );
}
