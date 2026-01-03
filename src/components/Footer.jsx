import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
   FaGithub,
   FaLinkedin,
   FaInstagram,
   FaWhatsapp,
   FaTelegramPlane,
   FaEnvelope,
   FaArrowUp,
} from "react-icons/fa";

/* ---------------- Cursor Follower ---------------- */
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
   const { scrollYProgress } = useScroll();

   const progress = useSpring(scrollYProgress, {
      stiffness: 80,
      damping: 25,
   });

   const glowOpacity = useTransform(scrollYProgress, [0.6, 1], [0.1, 0.35]);
   const footerY = useTransform(scrollYProgress, [0.7, 1], [60, 0]);

   return (
      <>
         <CursorFollower />

         {/* Scroll Progress */}
         <motion.div
            style={{ scaleX: progress }}
            className="fixed top-0 left-0 right-0 h-[3px]
        origin-left bg-blue-500 z-[999]"
         />

         <footer className="relative bg-black text-gray-400 pt-32 pb-14 overflow-hidden">

            {/* Glow */}
            <motion.div
               style={{ opacity: glowOpacity }}
               className="absolute inset-0 bg-blue-500/10 blur-3xl"
            />

            <motion.div
               style={{ y: footerY }}
               className="relative z-10 px-6 md:px-16"
            >
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                  {/* Brand */}
                  <div>
                     <h2 className="text-3xl font-bold text-blue-400 neon">
                        Ramniwas<span className="text-white">.dev</span>
                     </h2>
                     <p className="mt-4 text-sm max-w-md">
                        Full Stack Developer building smooth, scalable and
                        user-focused web experiences.
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

                     <div className="flex flex-wrap gap-6 text-2xl">

                        <motion.a
                           href="https://github.com/Rambhakar/"
                           target="_blank"
                           rel="noopener noreferrer"
                           whileHover={{ scale: 1.25 }}
                           className="hover:text-white"
                        >
                           <FaGithub />
                        </motion.a>

                        <motion.a
                           href="https://www.linkedin.com/in/ramniwas-bhakar-6956a7378/"
                           target="_blank"
                           rel="noopener noreferrer"
                           whileHover={{ scale: 1.25 }}
                           className="hover:text-[#0A66C2]"
                        >
                           <FaLinkedin />
                        </motion.a>

                        <motion.a
                           href="https://www.instagram.com/rambhakar_09/"
                           target="_blank"
                           rel="noopener noreferrer"
                           whileHover={{ scale: 1.25 }}
                           className="hover:text-pink-500"
                        >
                           <FaInstagram />
                        </motion.a>

                        <motion.a
                           href="https://t.me/rambhakar_09"
                           target="_blank"
                           rel="noopener noreferrer"
                           whileHover={{ scale: 1.25 }}
                           className="hover:text-[#229ED9]"
                        >
                           <FaTelegramPlane />
                        </motion.a>

                        <motion.a
                           href="https://wa.me/918955419560"
                           target="_blank"
                           rel="noopener noreferrer"
                           whileHover={{ scale: 1.25 }}
                           className="hover:text-green-500"
                        >
                           <FaWhatsapp />
                        </motion.a>

                        <motion.a
                           href="mailto:ramniwasbhakar2008@gmail.com"
                           whileHover={{ scale: 1.25 }}
                           className="hover:text-red-500"
                        >
                           <FaEnvelope />
                        </motion.a>

                     </div>
                  </div>

               </div>

               <div className="mt-12 text-sm opacity-70">
                  © {new Date().getFullYear()} Ramniwas • Portfolio
               </div>
            </motion.div>

            {/* Scroll Top */}
            <motion.button
               whileHover={{ scale: 1.2 }}
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
               className="fixed right-6 bottom-6 z-50
          bg-blue-500/20 border border-blue-400/40
          text-blue-400 p-3 rounded-full backdrop-blur-lg"
            >
               <FaArrowUp />
            </motion.button>

         </footer>
      </>
   );
};

export default Footer;
