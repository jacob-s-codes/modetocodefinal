import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Testimonials = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;
    
    const leftReviews = document.querySelectorAll('.rl');
    const rightReviews = document.querySelectorAll('.rr');
    
    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
      }
    });
    
    // Add animations
    tl.fromTo(leftReviews, { y: '350%' }, { y: '-150%' }, 0);
    tl.fromTo(rightReviews, { y: '300%' }, { y: '-50%' }, 0);
    
    // Cleanup
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);
  
  return (
    <div className="pt-32 pb-96 px-24 bg-blue-950 text-white">
      <section ref={sectionRef} className="reviews w-full h-[80vh] flex items-center justify-center relative">
        <h2 className="text-center lg:text-9xl md:text-6xl text-5xl font-bold pb-64 absolute mx-auto z-10 rtitle">
          TESTIMONIALS
        </h2>
        
        <div className="review-wrp z-20 text-black grid grid-cols-2 min-h-0 gap-8 gap-y-60 md:gap-y-60">
          <div className="review rl relative">
            <img 
              src="/paulettetestimonial.png" 
              alt="Testimonial" 
              className="rounded-xl sm:w-96 sm:h-96 w-96 h-auto object-cover shadow-2xl shadow-black"
            />
          </div>
          
          <div className="review rr relative">
            <img 
              src="/anttwantestimonial.png" 
              alt="Testimonial" 
              className="rounded-xl sm:w-96 sm:h-96 w-96 h-auto object-cover shadow-2xl shadow-black"
            />
          </div>
          
          <div className="review rl relative">
            <img 
              src="/jessicatestimonial.png" 
              alt="Testimonial" 
              className="rounded-xl sm:w-96 sm:h-96 w-96 h-auto object-cover shadow-2xl shadow-black"
            />
          </div>
          
          <div className="review rr relative">
            <img 
              src="/parenttestimonial.png" 
              alt="Testimonial" 
              className="rounded-xl sm:w-96 sm:h-96 w-96 h-auto object-cover shadow-2xl shadow-black"
            />
          </div>
          
          <div className="review rl relative">
            <img 
              src="/naomitestimonial.png" 
              alt="Testimonial" 
              className="rounded-xl sm:w-96 sm:h-96 w-96 h-auto object-cover shadow-2xl shadow-black"
            />
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @media (max-width: 994px) {
          .review-wrp {
            grid-template-columns: 2fr;
            column-gap: 4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;