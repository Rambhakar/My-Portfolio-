import { useEffect, useRef } from "react";

import {
   FaGithub,
   FaLinkedinIn,
   FaInstagram,
   FaFacebookF,
   FaTelegramPlane,
   FaEnvelope,
   FaArrowRight,
   FaStar,
} from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
   const textRef = useRef(null);
   const imageRef = useRef(null);

   useEffect(() => {
      gsap.fromTo(
         textRef.current,
         {
            y: 80,
            opacity: 0,
         },
         {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
         }
      );

      gsap.fromTo(
         imageRef.current,
         {
            scale: 0.8,
            opacity: 0,
            rotate: 5,
         },
         {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
         }
      );
   }, []);

   const socials = [
      {
         icon: <FaGithub />,
         link: "https://github.com/Rambhakar/",
      },

      {
         icon: <FaLinkedinIn />,
         link: "https://linkedin.com",
      },

      {
         icon: <FaInstagram />,
         link: "https://instagram.com",
      },

      {
         icon: <FaFacebookF />,
         link: "https://facebook.com",
      },

      {
         icon: <FaTelegramPlane />,
         link: "https://telegram.org",
      },

      {
         icon: <FaEnvelope />,
         link: "mailto:ramniwasbhakar2008@gmail.com",
      },
   ];

   return (
      <section
         className="
         relative
         min-h-screen
         overflow-hidden
         bg-[#050505]
         text-white
         pt-32
         sm:pt-36
         lg:pt-28
         pb-20
         flex items-center"
      >

         {/* BACKGROUND */}
         <div className="absolute inset-0 overflow-hidden">

            {/* GRID BOXES */}
            <div
               className="
               absolute inset-0
               opacity-[0.04]
               [background-image:linear-gradient(to_right,#facc15_1px,transparent_1px),linear-gradient(to_bottom,#facc15_1px,transparent_1px)]
               [background-size:70px_70px]"
            />

            {/* STAR EFFECT */}
            <div
               className="
               absolute
               top-[15%]
               left-[10%]
               text-yellow-400/30
               text-xl"
            >
               <FaStar />
            </div>

            <div
               className="
               absolute
               bottom-[20%]
               right-[12%]
               text-yellow-400/20
               text-2xl"
            >
               <FaStar />
            </div>

            {/* GLOW */}
            <div
               className="
               absolute
               top-[-120px]
               left-[-120px]
               w-[320px]
               h-[320px]
               bg-yellow-500/20
               rounded-full
               blur-[120px]"
            />

            <div
               className="
               absolute
               bottom-[-120px]
               right-[-120px]
               w-[320px]
               h-[320px]
               bg-orange-500/20
               rounded-full
               blur-[120px]"
            />

         </div>

         {/* MAIN */}
         <div
            className="
            relative z-10
            max-w-7xl
            mx-auto
            px-6
            w-full
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-14
            items-center"
         >

            {/* LEFT */}
            <div
               ref={textRef}
               className="text-center lg:text-left"
            >

               {/* BADGE */}
               <div
                  className="
                  inline-flex
                  items-center gap-2
                  px-4 py-2
                  rounded-full
                  border border-yellow-500/20
                  bg-yellow-500/10
                  text-yellow-400
                  text-xs
                  sm:text-sm
                  mb-5"
               >
                  ✨ Premium Full Stack Developer
               </div>

               {/* TITLE */}
               <h1
                  className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-black
                  leading-tight
                  mb-5"
               >
                  Hi, I’m{" "}

                  <span
                     className="
                     bg-gradient-to-r
                     from-yellow-300
                     via-yellow-500
                     to-orange-500
                     bg-clip-text
                     text-transparent"
                  >
                     Ramniwas
                  </span>
               </h1>

               {/* SUB TITLE */}
               <h2
                  className="
                  text-xl
                  sm:text-2xl
                  text-gray-300
                  mb-5"
               >
                  Building Modern Web Experiences 🚀
               </h2>

               {/* DESCRIPTION */}
               <p
                  className="
                  text-gray-400
                  text-base
                  sm:text-lg
                  leading-7
                  max-w-lg
                  mx-auto
                  lg:mx-0
                  mb-8"
               >
                  I create premium modern websites with
                  smooth animations, responsive layouts,
                  futuristic UI and scalable backend systems.
               </p>

               {/* BUTTONS */}
               <div
                  className="
                  flex
                  flex-wrap
                  justify-center
                  lg:justify-start
                  gap-4
                  mb-10"
               >

                  <a
                     href="#projects"
                     className="
                     px-7 py-3
                     rounded-full
                     bg-gradient-to-r
                     from-yellow-400
                     to-orange-500
                     text-black
                     text-sm
                     font-bold
                     flex items-center gap-3
                     hover:scale-105
                     transition duration-300
                     shadow-[0_0_25px_rgba(255,200,0,0.4)]"
                  >
                     View Projects
                     <FaArrowRight />
                  </a>

                  <a
                     href="#contact"
                     className="
                     px-7 py-3
                     rounded-full
                     border border-yellow-500/20
                     bg-white/5
                     text-sm
                     backdrop-blur-xl
                     hover:bg-yellow-500/10
                     transition duration-300"
                  >
                     Hire Me
                  </a>

               </div>

               {/* SOCIALS */}
               <div
                  className="
                  flex
                  flex-wrap
                  justify-center
                  lg:justify-start
                  gap-4"
               >

                  {socials.map((item, index) => (
                     <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        w-12 h-12
                        rounded-2xl
                        border border-yellow-500/20
                        bg-white/5
                        backdrop-blur-xl
                        flex items-center justify-center
                        text-lg text-yellow-400
                        hover:scale-110
                        hover:bg-yellow-500/10
                        hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]
                        transition duration-300"
                     >
                        {item.icon}
                     </a>
                  ))}

               </div>

            </div>

            {/* RIGHT IMAGE */}
            <div
               className="
               flex
               justify-center
               lg:justify-end"
            >

               <div
                  ref={imageRef}
                  className="relative"
               >

                  {/* BORDER GLOW */}
                  <div
                     className="
                     absolute inset-0
                     rounded-[35px]
                     bg-gradient-to-br
                     from-yellow-400
                     via-orange-500
                     to-yellow-300
                     blur-2xl
                     opacity-40"
                  />

                  {/* IMAGE BOX */}
                  <div
                     className="
                     relative
                     p-2
                     rounded-[35px]
                     border border-yellow-500/20
                     bg-white/5
                     backdrop-blur-2xl"
                  >

                     <img
                        src="/images/ram.jpeg"
                        alt="Ramniwas"
                        className="
                        w-[260px]
                        sm:w-[340px]
                        lg:w-[400px]
                        rounded-[28px]
                        object-cover"
                     />

                  </div>

                  {/* FLOAT CARD */}
                  <div
                     className="
                     absolute
                     -bottom-5
                     left-[-10px]
                     px-5 py-3
                     rounded-2xl
                     bg-black/70
                     border border-yellow-500/20
                     backdrop-blur-xl"
                  >

                     <h3
                        className="
                        text-yellow-400
                        font-bold
                        text-base"
                     >
                        2+ Years
                     </h3>

                     <p
                        className="
                        text-gray-400
                        text-xs"
                     >
                        Web Development
                     </p>

                  </div>

               </div>

            </div>

         </div>

      </section>
   );
};

export default Hero;