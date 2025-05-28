"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ReactLenis from "lenis/react";
import Footer from "@/components/Footer";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from "react";
import { gsap } from 'gsap';
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mode to Code",
  description: "Teaching students of all ages the essential technological tools they need to succeed, for free!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
          // Only run on client-side
          if (typeof window === 'undefined') return;
          
          // Register ScrollTrigger plugin
          gsap.registerPlugin(ScrollTrigger);
          
          // Get all elements with animateleft or animateright classes
          const elements = gsap.utils.toArray(".animateleft, .animateright") as HTMLElement[];
          
          // Create animations for each element
          const animations = elements.map(el => {
            const parent = (el as HTMLElement).closest(".parent-leftright") || el;
            
            return gsap.fromTo(el, 
              {
                x: el.classList.contains("animateleft") ? -200 : 200,
                opacity: 0
              }, 
              {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: "power1.out",
                scrollTrigger: {
                  trigger: parent, // Each element gets its own trigger
                  start: "top 80%",
                  end: "top 50%",
                  scrub: 1,
                  toggleActions: "play none none none",
                }
              }
            );
          });
          
          // Cleanup function
          return () => {
            animations.forEach(animation => {
              if (animation.scrollTrigger) {
                animation.scrollTrigger.kill();
              }
              animation.kill();
            });
          };
        }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactLenis root>
          <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
          </div>
          {children}
          <div>
            <Footer />
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}
