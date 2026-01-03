import { useEffect, useRef, useState } from "react";
import {
   FaGithub,
   FaLinkedinIn,
   FaInstagram,
   FaFacebookF,
   FaTelegramPlane,
   FaEnvelope,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
   const textRef = useRef(null);
   const iconsRef = useRef([]);
   const imageRef = useRef(null);
   const [zoom, setZoom] = useState(false);

   useEffect(() => {
      gsap.fromTo(
         textRef.current,
         { x: -120, opacity: 0 },
         {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
               trigger: textRef.current,
               start: "top 85%",
               scrub: true,
            },
         }
      );
   }, []);

   const rotateIcon = (el) => {
      gsap.fromTo(
         el,
         { rotate: 0 },
         { rotate: 360, duration: 0.6, ease: "power2.out" }
      );
   };

   const handleImageClick = () => {
      setZoom(true);
      gsap.fromTo(
         imageRef.current,
         { scale: 1 },
         { scale: 1.3, duration: 0.5, ease: "power3.out" }
      );
   };

   const closeZoom = () => {
      gsap.to(imageRef.current, {
         scale: 1,
         duration: 0.4,
         ease: "power3.out",
         onComplete: () => setZoom(false),
      });
   };

   const socials = [
      {
         icon: FaGithub,
         link: "https://github.com/Rambhakar/",
      },
      {
         icon: FaLinkedinIn,
         link: "https://www.linkedin.com/in/ramniwas-bhakar-6956a7378/",
      },
      {
         icon: FaInstagram,
         link: "https://www.instagram.com/rambhakar_09/",
      },
      {
         icon: FaFacebookF,
         link: "https://www.facebook.com/profile.php?id=100066672422973",
      },
      {
         icon: FaTelegramPlane,
         link: "https://t.me/rambhakar_09",
      },
      {
         icon: FaEnvelope,
         link: "mailto:rambhakar09@gmail.com",
      },
   ];

   return (
      <section className="relative bg-black text-white overflow-hidden pt-16 sm:pt-20 lg:pt-24">
         <div
            className="
          relative max-w-7xl mx-auto px-6
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-0
          min-h-auto lg:min-h-[calc(100vh-6rem)]
        "
         >
            {/* LEFT CONTENT */}
            <div
               ref={textRef}
               className="flex flex-col justify-center py-6 sm:py-10 lg:py-0"
            >
               <p className="text-gray-400 mb-2">Hi, I am</p>

               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
                  Ramniwas Bhakar
               </h1>

               <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 mb-4">
                  Full Stack Developer
               </h2>

               <p className="text-gray-400 max-w-md leading-relaxed mb-6">
                  I build scalable web applications using modern frontend and backend
                  technologies.
               </p>

               {/* SOCIAL ICONS */}
               <div className="flex flex-wrap gap-4">
                  {socials.map((item, i) => {
                     const Icon = item.icon;
                     return (
                        <a
                           key={i}
                           ref={(el) => (iconsRef.current[i] = el)}
                           href={item.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           onMouseEnter={() => rotateIcon(iconsRef.current[i])}
                           className="p-3 border border-gray-700 rounded-full
                    hover:bg-white hover:text-black transition"
                        >
                           <Icon />
                        </a>
                     );
                  })}
               </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
               className="
            relative w-full flex justify-center
            mt-4 sm:mt-6
            lg:absolute lg:right-0 lg:bottom-0
            lg:w-1/2 lg:mt-0
          "
            >
               <img
                  ref={imageRef}
                  onClick={handleImageClick}
                  src="/images/ram.jpeg"
                  alt="Ramniwas"
                  className="
              w-[220px] sm:w-[260px] md:w-[340px] lg:w-[420px]
              rounded-t-3xl object-cover cursor-pointer
              shadow-[0_35px_80px_rgba(0,0,0,0.85)]
              transition
            "
               />
            </div>

            {/* IMAGE OVERLAY */}
            {zoom && (
               <div
                  onClick={closeZoom}
                  className="fixed inset-0 bg-black/80 z-50"
               />
            )}
         </div>
      </section>
   );
};

export default Hero;
