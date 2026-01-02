import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Header = () => {
   const [open, setOpen] = useState(false);
   const menuRef = useRef(null);
   const line1 = useRef(null);
   const line2 = useRef(null);
   const line3 = useRef(null);

   useEffect(() => {
      if (open) {
         gsap.to(menuRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
         });

         gsap.to(line1.current, { rotate: 45, y: 8, duration: 0.3 });
         gsap.to(line2.current, { opacity: 0, duration: 0.3 });
         gsap.to(line3.current, { rotate: -45, y: -8, duration: 0.3 });
      } else {
         gsap.to(menuRef.current, {
            y: -30,
            opacity: 0,
            duration: 0.4,
            ease: "power3.in",
         });

         gsap.to([line1.current, line2.current, line3.current], {
            rotate: 0,
            y: 0,
            opacity: 1,
            duration: 0.3,
         });
      }
   }, [open]);

   return (
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* Logo */}
            <div className="w-10">
               <img
                  src="/images/ramred.jpeg"
                  alt="ram"
                  className="rounded-full"
               />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-gray-300">
               <a href="#about" className="hover:text-white transition">About me</a>
               <a href="#skills" className="hover:text-white transition">Skills</a>
               <a href="#portfolio" className="hover:text-white transition">Portfolio</a>

               <button className="ml-4 px-5 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
                  CONTACT ME
               </button>
            </nav>

            {/* Hamburger */}
            <button
               onClick={() => setOpen(!open)}
               className="md:hidden flex flex-col gap-1.5 z-50"
            >
               <span ref={line1} className="w-6 h-[2px] bg-white"></span>
               <span ref={line2} className="w-6 h-[2px] bg-white"></span>
               <span ref={line3} className="w-6 h-[2px] bg-white"></span>
            </button>
         </div>

         {/* Mobile Menu */}
         <div
            ref={menuRef}
            className="md:hidden absolute top-full left-0 w-full
                   bg-black/95 text-white
                   opacity-0 -translate-y-8"
         >
            <nav className="flex flex-col items-center gap-6 py-10 text-lg">
               <a onClick={() => setOpen(false)} href="#about">About me</a>
               <a onClick={() => setOpen(false)} href="#skills">Skills</a>
               <a onClick={() => setOpen(false)} href="#portfolio">Portfolio</a>

               <button className="mt-4 px-6 py-2 bg-white text-black rounded-full font-semibold">
                  CONTACT ME
               </button>
            </nav>
         </div>
      </header>
   );
};

export default Header;
