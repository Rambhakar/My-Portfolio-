import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Projects = () => {
   const [filter, setFilter] = useState("all");
   const [activeProject, setActiveProject] = useState(null);
   const gridRef = useRef(null);
   const modalRef = useRef(null);

   const projects = [
      {
         id: 1,
         title: "PackShifts",
         img: "/images/packshift.jpg",
         live: "https://packshifts-orpin.vercel.app/",
         github: "https://github.com/Rambhakar/packshifts.git",
      },
      {
         id: 2,
         title: "Traffic Signal System",
         img: "/images/Traffic.jpeg",
         live: "https://traffic-indol.vercel.app/",
         github: "https://github.com/Rambhakar/Traffic-.git",
      },
      {
         id: 3,
         title: "Meta Website",
         img: "/images/Meta.jpeg",
         live: "https://meta-website-delta.vercel.app/",
         github: "https://github.com/Rambhakar/meta-website-.git",
      },
      {
         id: 4,
         title: "Solachey Website",
         img: "/images/Solachey.jpeg",
         live: "https://solachey.vercel.app/",
         github: "https://github.com/Rambhakar/Solachey.git",
      },
      {
         id: 5,
         title: "Shadi Landing Page",
         img: "/images/Shadi.jpeg",
         live: "https://shadi-seven.vercel.app/",
         github: "https://github.com/Rambhakar/Shadi.git",
      },
   ];

   /* FILTER ANIMATION */
   useEffect(() => {
      gsap.fromTo(
         gridRef.current.children,
         {
            x: filter === "coded" ? -80 : 0,
            opacity: 0,
            scale: 0.95,
         },
         {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power4.out",
            stagger: 0.08,
         }
      );
   }, [filter]);

   /* CARD HOVER */
   const hoverIn = (e) => {
      gsap.to(e.currentTarget.querySelector(".overlay"), {
         opacity: 1,
         scale: 1,
         duration: 0.35,
         ease: "power3.out",
      });
   };

   const hoverOut = (e) => {
      gsap.to(e.currentTarget.querySelector(".overlay"), {
         opacity: 0,
         scale: 0.9,
         duration: 0.35,
         ease: "power3.out",
      });
   };

   /* MAGNETIC BUTTON */
   const magnetic = (e) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
         x: x * 0.3,
         y: y * 0.3,
         duration: 0.3,
         ease: "power3.out",
      });
   };

   const magneticOut = (e) => {
      gsap.to(e.currentTarget, {
         x: 0,
         y: 0,
         duration: 0.4,
         ease: "power3.out",
      });
   };

   /* MODAL OPEN */
   useEffect(() => {
      if (activeProject) {
         gsap.fromTo(
            modalRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
         );
      }
   }, [activeProject]);

   return (
      <section id="projects" className="min-h-screen bg-[#0b0b0b] text-white py-24">
         <div className="max-w-7xl mx-auto px-6">

            {/* HEADING */}
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold tracking-widest">PROJECTS</h2>
               <p className="text-gray-500 mt-4 text-sm">Live demos & source code</p>
            </div>

            {/* FILTER */}
            <div className="flex justify-center gap-16 mb-16 text-sm tracking-widest">
               {["all", "coded"].map((item) => (
                  <button
                     key={item}
                     onClick={() => setFilter(item)}
                     className={`uppercase pb-1 transition-all duration-300 ${filter === item
                           ? "text-white border-b-2 border-white scale-110"
                           : "text-gray-500 hover:text-white"
                        }`}
                  >
                     {item}
                  </button>
               ))}
            </div>

            {/* GRID */}
            <div
               ref={gridRef}
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
               {projects.map((project) => (
                  <div
                     key={project.id}
                     onMouseEnter={hoverIn}
                     onMouseLeave={hoverOut}
                     onClick={() => setActiveProject(project)}
                     className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-xl active:scale-95 transition"
                  >
                     <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
                     />

                     <div className="overlay absolute inset-0 bg-black/75 flex flex-col items-center justify-center gap-6 opacity-0 scale-90">
                        <h3 className="tracking-widest text-center">{project.title}</h3>

                        {filter === "all" && (
                           <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onMouseMove={magnetic}
                              onMouseLeave={magneticOut}
                              className="px-10 py-3 border border-white text-xs hover:bg-orange-200 hover:text-red-900 font-bold transition"
                           >
                              LIVE
                           </a>
                        )}

                        {filter === "coded" && (
                           <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onMouseMove={magnetic}
                              onMouseLeave={magneticOut}
                              className="px-10 py-3 border border-gray-300 text-xs hover:bg-orange-200 hover:text-red-900 font-bold transition"
                           >
                              CODE
                           </a>
                        )}
                     </div>
                  </div>
               ))}
            </div>

            {/* MODAL */}
            {activeProject && (
               <div
                  ref={modalRef}
                  onClick={() => setActiveProject(null)}
                  className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-6"
               >
                  <img
                     src={activeProject.img}
                     alt=""
                     className="max-h-[85vh] rounded-xl object-cover"
                  />
               </div>
            )}

            <p className="text-center text-gray-500 mt-20 text-sm">
               Built with focus & finesse 🚀
            </p>
         </div>
      </section>
   );
};

export default Projects;
