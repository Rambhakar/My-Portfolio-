import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Header = () => {
   const [open, setOpen] = useState(false);
   const [active, setActive] = useState("about");

   const menuRef = useRef(null);
   const overlayRef = useRef(null);
   const line1 = useRef(null);
   const line2 = useRef(null);
   const line3 = useRef(null);
   const logoRef = useRef(null);
   const mobileLinksRef = useRef([]);

   /* MENU + BODY SCROLL LOCK */
   useEffect(() => {
      if (open) {
         gsap.to(menuRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
         });

         gsap.to(overlayRef.current, {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
         });

         document.body.style.overflow = "hidden";

         gsap.to(line1.current, { rotate: 45, y: 7, duration: 0.3 });
         gsap.to(line2.current, { opacity: 0, duration: 0.2 });
         gsap.to(line3.current, { rotate: -45, y: -7, duration: 0.3 });

         gsap.fromTo(
            mobileLinksRef.current,
            { opacity: 0, y: 20 },
            {
               opacity: 1,
               y: 0,
               stagger: 0.12,
               delay: 0.15,
               ease: "power3.out",
            }
         );
      } else {
         gsap.to(menuRef.current, {
            x: "100%",
            opacity: 0,
            duration: 0.4,
            ease: "power3.in",
         });

         gsap.to(overlayRef.current, {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.3,
         });

         document.body.style.overflow = "auto";

         gsap.to([line1.current, line2.current, line3.current], {
            rotate: 0,
            y: 0,
            opacity: 1,
            duration: 0.3,
         });
      }
   }, [open]);

   /* ACTIVE SECTION */
   useEffect(() => {
      const sections = document.querySelectorAll("section[id]");

      const onScroll = () => {
         let current = "about";
         sections.forEach((sec) => {
            if (window.scrollY >= sec.offsetTop - 140) {
               current = sec.getAttribute("id");
            }
         });
         setActive(current);
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   /* LOGO CLICK (bounce + scroll top) */
   const handleLogoClick = () => {
      gsap.fromTo(
         logoRef.current,
         { scale: 1 },
         { scale: 0.9, yoyo: true, repeat: 1, duration: 0.15 }
      );

      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   const NavLink = ({ id, children }) => (
      <a href={`#${id}`} className="relative group">
         <span
            className={`transition ${active === id ? "text-white" : "text-gray-400"
               } group-hover:text-white`}
         >
            {children}
         </span>

         <span
            className={`absolute left-0 -bottom-2 h-[3px] rounded-full
        bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
        transition-all duration-300
        ${active === id ? "w-full" : "w-0 group-hover:w-full"}`}
         />
      </a>
   );

   return (
      <>
         {/* OVERLAY */}
         <div
            ref={overlayRef}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 opacity-0 pointer-events-none md:hidden"
         />

         <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

               {/* LOGO IMAGE */}
               <div
                  ref={logoRef}
                  onClick={handleLogoClick}
                  className="cursor-pointer select-none"
               >
                  <img
                     src="images/Ramniwas-Bhakar-Logo.png"
                     alt="Ramniwas Bhakar Logo"
                     className="h-10 w-auto object-contain"
                  />
               </div>

               {/* DESKTOP NAV */}
               <nav className="hidden md:flex items-center gap-8 text-sm">
                  <NavLink id="about">About</NavLink>
                  <NavLink id="skills">Skills</NavLink>
                  <NavLink id="projects">Project</NavLink>

                  <a
                     href="#contact"
                     className="ml-4 px-5 py-2 bg-white text-black rounded-full
              font-semibold hover:bg-gray-200 transition"
                  >
                     Contact
                  </a>
               </nav>

               {/* HAMBURGER */}
               <button
                  onClick={() => setOpen(!open)}
                  className="md:hidden flex flex-col gap-1.5 z-50"
               >
                  <span ref={line1} className="w-6 h-[2px] bg-white"></span>
                  <span ref={line2} className="w-6 h-[2px] bg-white"></span>
                  <span ref={line3} className="w-6 h-[2px] bg-white"></span>
               </button>
            </div>

            {/* MOBILE MENU */}
            <div
               ref={menuRef}
               className="md:hidden fixed top-20 right-0
          h-[50vh] w-[75%]
          bg-black/95 text-white
          translate-x-full opacity-0
          rounded-l-3xl shadow-xl z-50"
            >
               <nav className="flex flex-col items-center justify-center gap-6 h-full text-lg">
                  {["about", "skills", "portfolio"].map((id, i) => (
                     <a
                        key={id}
                        ref={(el) => (mobileLinksRef.current[i] = el)}
                        onClick={() => setOpen(false)}
                        href={`#${id}`}
                     >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                     </a>
                  ))}

                  <a
                     ref={(el) => (mobileLinksRef.current[3] = el)}
                     onClick={() => setOpen(false)}
                     href="#contact"
                     className="mt-4 px-6 py-2 bg-white text-black rounded-full font-semibold"
                  >
                     Contact Me
                  </a>
               </nav>
            </div>
         </header>
      </>
   );
};

export default Header;
