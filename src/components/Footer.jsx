import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
   FaGithub,
   FaLinkedin,
   FaInstagram,
   FaArrowUp,
} from "react-icons/fa";

/* ---------------- Cursor Follower (Smooth) ---------------- */
const CursorFollower = () => {
   const cursorRef = useRef(null);

   useEffect(() => {
      let x = 0;
      let y = 0;

      const move = (e) => {
         x += (e.clientX - x) * 0.15;
         y += (e.clientY - y) * 0.15;
         if (cursorRef.current) {
            cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
         }
      };

      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
   }, []);

   return (
      <div
         ref={cursorRef}
         className="pointer-events-none fixed top-0 left-0 z-[999]
      w-5 h-5 rounded-full bg-blue-500/25 blur-md"
      />
   );
};

const Footer = () => {
   /* Scroll Progress */
   const { scrollYProgress } = useScroll();
   const progress = useSpring(scrollYProgress, {
      stiffness: 80,
      damping: 25,
   });

   /* Scroll-based glow + lift */
   const glowOpacity = useTransform(
      scrollYProgress,
      [0.6, 1],
      [0.1, 0.35]
   );

   const footerY = useTransform(
      scrollYProgress,
      [0.7, 1],
      [60, 0]
   );

   return (
      <>
         <CursorFollower />

         {/* Scroll Progress Bar */}
         <motion.div
            style={{ scaleX: progress }}
            className="fixed top-0 left-0 right-0 h-[3px]
        origin-left bg-blue-500 z-[999]"
         />

         <footer className="relative w-full overflow-hidden bg-black text-gray-400 pt-32 pb-14">

            {/* Scroll Reactive Glow */}
            <motion.div
               style={{ opacity: glowOpacity }}
               className="absolute inset-0 bg-blue-500/10 blur-3xl"
            />

            {/* Wave Top */}
            <div className="absolute top-0 left-0 w-full">
               <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                  <path
                     fill="#000"
                     d="M0,40 C120,80 240,0 360,20 480,40 600,120 720,100 840,80 960,0 1080,10 1200,20 1320,60 1440,40 L1440,0 L0,0 Z"
                  />
               </svg>
            </div>

            {/* Content */}
            <motion.div
               style={{ y: footerY }}
               className="relative z-10 w-full px-6 md:px-16"
            >
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

                  {/* Brand */}
                  <div>
                     <h2 className="text-3xl font-bold text-blue-400 neon">
                        Ramniwas<span className="text-white">.dev</span>
                     </h2>

                     <p className="mt-4 text-sm max-w-md">
                        Full Stack Developer building smooth, scalable
                        and user-focused web experiences.
                     </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col gap-3">
                     <h3 className="text-white font-semibold tracking-widest">
                        QUICK LINKS
                     </h3>

                     {["Home", "About", "Projects", "Contact"].map((item) => (
                        <motion.a
                           key={item}
                           whileHover={{ x: 10 }}
                           transition={{ type: "spring", stiffness: 200 }}
                           href={`#${item.toLowerCase()}`}
                           className="hover:text-blue-400"
                        >
                           {item}
                        </motion.a>
                     ))}
                  </div>

                  {/* Social */}
                  <div>
                     <h3 className="text-white font-semibold tracking-widest mb-4">
                        CONNECT
                     </h3>

                     <div className="flex gap-6 text-2xl">
                        {[FaGithub, FaLinkedin, FaInstagram].map((Icon, i) => (
                           <motion.a
                              key={i}
                              whileHover={{ scale: 1.25 }}
                              whileTap={{ scale: 0.95 }}
                              href="#"
                              className="hover:text-blue-400 neon-hover"
                           >
                              <Icon />
                           </motion.a>
                        ))}
                     </div>
                  </div>

               </div>

               <div className="mt-12 text-left text-sm opacity-70">
                  © {new Date().getFullYear()} Ramniwas • Smooth Scroll Portfolio
               </div>
            </motion.div>

            {/* Scroll Top */}
            <motion.button
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.9 }}
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
               className="fixed right-6 bottom-6 z-50
          bg-blue-500/20 border border-blue-400/40
          text-blue-400 p-3 rounded-full
          backdrop-blur-lg hover:bg-blue-500 hover:text-black"
            >
               <FaArrowUp />
            </motion.button>

            {/* Neon Style */}
            <style jsx>{`
          .neon {
            text-shadow: 0 0 12px rgba(59,130,246,0.9);
          }
          .neon-hover:hover {
            text-shadow: 0 0 14px rgba(59,130,246,1);
          }
        `}</style>
         </footer>
      </>
   );
};

export default Footer;
