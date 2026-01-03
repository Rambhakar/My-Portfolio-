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

   const handleImageClick = () => {
      setZoom(true);
      gsap.to(imageRef.current, {
         scale: 1.3,
         duration: 0.4,
         ease: "power3.out",
      });
   };

   const closeZoom = () => {
      gsap.to(imageRef.current, {
         scale: 1,
         duration: 0.3,
         onComplete: () => setZoom(false),
      });
   };

   return (
      <section className="relative bg-black text-white overflow-hidden pt-20">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT */}
            <div ref={textRef} className="flex flex-col justify-center">
               <p className="text-gray-400 mb-2">Hi, I am</p>

               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
                  Ramniwas Bhakar
               </h1>

               <h2 className="text-xl text-gray-300 mb-4">
                  Full Stack Developer
               </h2>

               <p className="text-gray-400 max-w-md mb-6">
                  I build scalable web applications using modern frontend and backend
                  technologies.
               </p>

               {/* SOCIAL ICONS — FOOTER STYLE SAFE */}
               <div className="flex flex-wrap gap-4">

                  <a
                     href="https://github.com/Rambhakar/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="icon-btn text-gray-300"
                  >
                     <FaGithub />
                  </a>

                  <a
                     href="https://www.linkedin.com/in/ramniwas-bhakar-6956a7378/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="icon-btn text-[#0A66C2]"
                  >
                     <FaLinkedinIn />
                  </a>

                  <a
                     href="https://www.instagram.com/rambhakar_09/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="icon-btn text-pink-500"
                  >
                     <FaInstagram />
                  </a>

                  <a
                     href="https://www.facebook.com/profile.php?id=100066672422973"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="icon-btn text-[#1877F2]"
                  >
                     <FaFacebookF />
                  </a>

                  <a
                     href="https://t.me/rambhakar_09"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="icon-btn text-[#229ED9]"
                  >
                     <FaTelegramPlane />
                  </a>

                  <a
                     href="mailto:ramniwasbhakar2008@gmail.com"
                     className="icon-btn text-red-500"
                  >
                     <FaEnvelope />
                  </a>

               </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
               <img
                  ref={imageRef}
                  onClick={handleImageClick}
                  src="/images/ram.jpeg"
                  alt="Ramniwas"
                  className="w-[260px] sm:w-[320px] lg:w-[420px]
            rounded-t-3xl cursor-pointer
            shadow-[0_35px_80px_rgba(0,0,0,0.85)]"
               />
            </div>

            {zoom && (
               <div
                  onClick={closeZoom}
                  className="fixed inset-0 bg-black/80 z-50"
               />
            )}
         </div>

         {/* ICON STYLES */}
         <style>
            {`
          .icon-btn {
            padding: 1rem;
            border-radius: 9999px;
            border: 1px solid #374151;
            font-size: 18px;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }
          .icon-btn:hover {
            transform: scale(1.15);
            box-shadow: 0 0 20px currentColor;
          }
          .icon-btn:active {
            transform: scale(0.95);
          }
        `}
         </style>
      </section>
   );
};

export default Hero;
