import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
   const sectionRef = useRef(null);
   const cardsRef = useRef([]);

   /* ======================
      LENIS SMOOTH SCROLL
   ====================== */
   useEffect(() => {
      const lenis = new Lenis({ lerp: 0.08 });

      const raf = (time) => {
         lenis.raf(time);
         requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      return () => lenis.destroy();
   }, []);

   /* ======================
      GSAP ANIMATIONS
   ====================== */
   useEffect(() => {
      const section = sectionRef.current;

      /* ABOUT TEXT */
      gsap.fromTo(
         ".about-text",
         { opacity: 0, y: 80 },
         {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
               trigger: section,
               start: "top 70%",
            },
         }
      );

      /* CARDS + MAGNETIC HOVER */
      cardsRef.current.forEach((card, i) => {
         if (!card) return;

         gsap.fromTo(
            card,
            { opacity: 0, y: 120, scale: 0.85 },
            {
               opacity: 1,
               y: 0,
               scale: 1,
               duration: 1,
               delay: i * 0.15,
               ease: "power3.out",
               scrollTrigger: {
                  trigger: card,
                  start: "top 80%",
               },
            }
         );

         const move = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(card, {
               x: x * 0.15,
               y: y * 0.15,
               duration: 0.3,
               ease: "power2.out",
            });
         };

         const reset = () => {
            gsap.to(card, {
               x: 0,
               y: 0,
               duration: 0.5,
               ease: "power3.out",
            });
         };

         card.addEventListener("mousemove", move);
         card.addEventListener("mouseleave", reset);
      });
   }, []);

   return (
      <section
         ref={sectionRef}
         id="about"
         className="min-h-screen bg-[#0b0b0b] text-white"
      >
         <div className="max-w-7xl mx-auto px-6 py-28">

            {/* ABOUT TEXT */}
            <div className="about-text max-w-xl mb-24">
               <h2 className="text-4xl font-bold mb-5 tracking-wide">
                  ABOUT ME
               </h2>
               <p className="text-gray-400 leading-relaxed">
                  I am a Full Stack Developer who focuses on clean UI,
                  scalable systems, and strong fundamentals.
               </p>
            </div>

            {/* ABOUT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
               {[
                  { title: "DESIGN", img: "/images/ram.jpeg" },
                  { title: "DEVELOPMENT", img: "/images/ramm.jpeg" },
                  { title: "MAINTENANCE", img: "/images/ramblack.jpeg" },
               ].map((item, i) => (
                  <div
                     key={i}
                     ref={(el) => (cardsRef.current[i] = el)}
                     className="bg-[#111] p-3 rounded-2xl border border-blue-500/30 cursor-pointer"
                  >
                     <div className="h-[300px] rounded-xl overflow-hidden">
                        <img
                           src={item.img}
                           alt={item.title}
                           className="w-full h-full object-cover"
                        />
                     </div>
                     <h3 className="text-center mt-4 tracking-wide">
                        {item.title}
                     </h3>
                  </div>
               ))}
            </div>

         </div>
      </section>
   );
};

export default About;
