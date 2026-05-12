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

   /* MENU ANIMATION */
   useEffect(() => {
      if (open) {
         gsap.to(menuRef.current, {
            x: 0,
            duration: 0.5,
            ease: "power3.out",
         });

         gsap.to(overlayRef.current, {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
         });

         document.body.style.overflow = "hidden";

         gsap.to(line1.current, {
            rotate: 45,
            y: 8,
            background: "#FFD700",
            duration: 0.3,
         });

         gsap.to(line2.current, {
            opacity: 0,
            duration: 0.2,
         });

         gsap.to(line3.current, {
            rotate: -45,
            y: -8,
            background: "#FFD700",
            duration: 0.3,
         });

         gsap.fromTo(
            mobileLinksRef.current,
            {
               opacity: 0,
               x: 50,
            },
            {
               opacity: 1,
               x: 0,
               stagger: 0.12,
               delay: 0.2,
               ease: "power3.out",
            }
         );
      } else {
         gsap.to(menuRef.current, {
            x: "100%",
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
            background: "#ffffff",
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

   /* LOGO CLICK */
   const handleLogoClick = () => {
      gsap.fromTo(
         logoRef.current,
         { scale: 1 },
         {
            scale: 0.9,
            yoyo: true,
            repeat: 1,
            duration: 0.15,
         }
      );

      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   const NavLink = ({ id, children }) => (
      <a
         href={`#${id}`}
         className="relative group"
      >
         <span
            className={`transition duration-300 font-medium
            ${active === id
                  ? "text-yellow-400"
                  : "text-gray-300"
               }
            group-hover:text-yellow-400`}
         >
            {children}
         </span>

         <span
            className={`absolute left-0 -bottom-2 h-[2px]
            bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700
            rounded-full transition-all duration-300
            ${active === id
                  ? "w-full"
                  : "w-0 group-hover:w-full"
               }`}
         />
      </a>
   );

   return (
      <>
         {/* OVERLAY */}
         <div
            ref={overlayRef}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm
            z-40 opacity-0 pointer-events-none md:hidden"
         />

         {/* HEADER */}
         <header
            className="fixed top-0 left-0 w-full z-50
            bg-black/60 backdrop-blur-xl
            border-b border-yellow-500/20"
         >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

               {/* LOGO */}
               <div
                  ref={logoRef}
                  onClick={handleLogoClick}
                  className="cursor-pointer"
               >
                  <img
                     src="images/Ramniwas-Bhakar-Logo.png"
                     alt="logo"
                     className="h-11 w-auto object-contain"
                  />
               </div>

               {/* DESKTOP NAV */}
               <nav className="hidden md:flex items-center gap-10">

                  <NavLink id="about">About</NavLink>
                  <NavLink id="skills">Skills</NavLink>
                  <NavLink id="projects">Projects</NavLink>

                  <a
                     href="#contact"
                     className="px-6 py-2.5 rounded-full
                     bg-gradient-to-r from-yellow-400 to-yellow-600
                     text-black font-semibold
                     hover:scale-105 transition duration-300
                     shadow-[0_0_20px_rgba(255,215,0,0.5)]"
                  >
                     Contact
                  </a>
               </nav>

               {/* MOBILE BUTTON */}
               <button
                  onClick={() => setOpen(!open)}
                  className="md:hidden flex flex-col gap-1.5 z-50"
               >
                  <span
                     ref={line1}
                     className="w-7 h-[2px] bg-white rounded-full"
                  />

                  <span
                     ref={line2}
                     className="w-7 h-[2px] bg-white rounded-full"
                  />

                  <span
                     ref={line3}
                     className="w-7 h-[2px] bg-white rounded-full"
                  />
               </button>
            </div>

            {/* MOBILE MENU */}
            <div
               ref={menuRef}
               className="fixed top-0 right-0
               h-screen w-[80%]
               bg-[#0b0b0b]
               border-l border-yellow-500/20
               backdrop-blur-2xl
               translate-x-full
               z-50 md:hidden
               shadow-[-10px_0_40px_rgba(255,215,0,0.1)]"
            >
               <div className="flex flex-col justify-center h-full px-10 gap-8">

                  {["about", "skills", "projects", "contact"].map(
                     (id, i) => (
                        <a
                           key={id}
                           ref={(el) =>
                              (mobileLinksRef.current[i] = el)
                           }
                           href={`#${id}`}
                           onClick={() => setOpen(false)}
                           className="text-2xl font-semibold
                           text-gray-200
                           hover:text-yellow-400
                           transition duration-300"
                        >
                           {id.charAt(0).toUpperCase() +
                              id.slice(1)}
                        </a>
                     )
                  )}

                  <div className="mt-10">
                     <div
                        className="h-[1px] w-full
                        bg-gradient-to-r
                        from-transparent
                        via-yellow-500
                        to-transparent"
                     />

                     <p className="text-gray-500 text-sm mt-6">
                        Luxury Portfolio ✨
                     </p>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;