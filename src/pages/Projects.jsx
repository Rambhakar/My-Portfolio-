import { useState, useEffect, useRef } from "react";

import gsap from "gsap";

import {
   FaGithub,
   FaExternalLinkAlt,
   FaArrowRight,
   FaReact,
   FaNodeJs,
   FaCode,
   FaEye,
} from "react-icons/fa";

const Projects = () => {
   const [activeProject, setActiveProject] = useState(null);

   const cardsRef = useRef([]);
   const modalRef = useRef(null);

   /* PROJECTS */
   const projects = [
      {
         id: 1,
         title: "PackShifts",
         category: "Full Stack",
         img: "/images/packshift.jpg",
         live: "https://packshifts-orpin.vercel.app/",
         github: "https://github.com/Rambhakar/packshifts.git",
         tech: ["React", "Node", "MongoDB"],
      },

      {
         id: 2,
         title: "Traffic Signal System",
         category: "Frontend",
         img: "/images/Traffic.jpeg",
         live: "https://traffic-indol.vercel.app/",
         github: "https://github.com/Rambhakar/Traffic-.git",
         tech: ["JavaScript", "Animation"],
      },

      {
         id: 3,
         title: "Meta Website",
         category: "UI Design",
         img: "/images/Meta.jpeg",
         live: "https://meta-website-delta.vercel.app/",
         github: "https://github.com/Rambhakar/meta-website-.git",
         tech: ["React", "Tailwind"],
      },

      {
         id: 4,
         title: "Solachey Website",
         category: "Modern UI",
         img: "/images/Solachey.jpeg",
         live: "https://solachey.vercel.app/",
         github: "https://github.com/Rambhakar/Solachey.git",
         tech: ["Frontend", "Responsive"],
      },

      {
         id: 5,
         title: "Shadi Landing Page",
         category: "Landing Page",
         img: "/images/Shadi.jpeg",
         live: "https://shadi-seven.vercel.app/",
         github: "https://github.com/Rambhakar/Shadi.git",
         tech: ["HTML", "CSS"],
      },
   ];

   /* CARD ANIMATION */
   useEffect(() => {
      cardsRef.current.forEach((card, index) => {
         if (!card) return;

         gsap.fromTo(
            card,
            {
               opacity: 0,
               y: 100,
               scale: 0.85,
            },
            {
               opacity: 1,
               y: 0,
               scale: 1,
               duration: 1,
               delay: index * 0.08,
               ease: "power4.out",
               scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
               },
            }
         );
      });
   }, []);

   /* MODAL */
   useEffect(() => {
      if (activeProject) {
         gsap.fromTo(
            modalRef.current,
            {
               opacity: 0,
               scale: 0.8,
            },
            {
               opacity: 1,
               scale: 1,
               duration: 0.5,
               ease: "power4.out",
            }
         );
      }
   }, [activeProject]);

   return (
      <section
         id="projects"
         className="
         relative
         overflow-hidden
         bg-[#050505]
         text-white
         py-28"
      >

         {/* BACKGROUND GLOW */}
         <div className="absolute inset-0 overflow-hidden">

            <div
               className="
               absolute
               top-[-150px]
               left-[-150px]
               w-[400px]
               h-[400px]
               rounded-full
               bg-yellow-500/10
               blur-[140px]"
            />

            <div
               className="
               absolute
               bottom-[-150px]
               right-[-150px]
               w-[400px]
               h-[400px]
               rounded-full
               bg-orange-500/10
               blur-[140px]"
            />

         </div>

         <div
            className="
            relative z-10
            max-w-7xl
            mx-auto
            px-6"
         >

            {/* HEADER */}
            <div className="text-center mb-24">

               <div
                  className="
                  inline-flex
                  items-center gap-3
                  px-6 py-3
                  rounded-full
                  border border-yellow-500/20
                  bg-yellow-500/10
                  text-yellow-400
                  text-sm
                  mb-8"
               >
                  ✨ Featured Projects
               </div>

               <h2
                  className="
                  text-5xl
                  sm:text-6xl
                  font-black
                  leading-tight
                  mb-8"
               >
                  Creative{" "}

                  <span
                     className="
                     bg-gradient-to-r
                     from-yellow-300
                     via-yellow-500
                     to-orange-500
                     bg-clip-text
                     text-transparent"
                  >
                     Web Projects
                  </span>
               </h2>

               <p
                  className="
                  text-gray-400
                  text-lg
                  leading-9
                  max-w-3xl
                  mx-auto"
               >
                  Premium full stack projects with
                  responsive layouts, luxury UI design,
                  smooth animations and modern development
                  systems.
               </p>

            </div>

            {/* TOP STATS */}
            <div
               className="
               grid
               grid-cols-2
               md:grid-cols-4
               gap-6
               mb-24"
            >

               {[
                  {
                     title: "20+",
                     sub: "Projects",
                  },

                  {
                     title: "100%",
                     sub: "Responsive",
                  },

                  {
                     title: "Modern",
                     sub: "UI Design",
                  },

                  {
                     title: "Fast",
                     sub: "Performance",
                  },
               ].map((item, index) => (
                  <div
                     key={index}
                     className="
                     rounded-[30px]
                     p-8
                     text-center
                     bg-white/5
                     border border-yellow-500/10
                     backdrop-blur-2xl
                     hover:-translate-y-3
                     hover:border-yellow-500/30
                     transition duration-500"
                  >

                     <h3
                        className="
                        text-4xl
                        font-black
                        text-yellow-400
                        mb-3"
                     >
                        {item.title}
                     </h3>

                     <p className="text-gray-400">
                        {item.sub}
                     </p>

                  </div>
               ))}

            </div>

            {/* PROJECT GRID */}
            <div
               className="
               grid
               grid-cols-1
               md:grid-cols-2
               lg:grid-cols-3
               gap-8"
            >

               {projects.map((project, index) => (
                  <div
                     key={project.id}
                     ref={(el) =>
                        (cardsRef.current[index] = el)
                     }
                     className="
                     group
                     relative
                     overflow-hidden
                     rounded-[35px]
                     bg-white/5
                     border border-yellow-500/10
                     backdrop-blur-2xl
                     hover:border-yellow-500/30
                     hover:-translate-y-3
                     transition duration-500"
                  >

                     {/* IMAGE */}
                     <div className="relative overflow-hidden">

                        <img
                           src={project.img}
                           alt={project.title}
                           className="
                           w-full
                           h-[280px]
                           object-cover
                           group-hover:scale-110
                           transition duration-700"
                        />

                        {/* OVERLAY */}
                        <div
                           className="
                           absolute inset-0
                           bg-black/70
                           opacity-0
                           group-hover:opacity-100
                           transition duration-500
                           flex items-center justify-center gap-4"
                        >

                           <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                              w-14 h-14
                              rounded-2xl
                              bg-yellow-400
                              text-black
                              flex items-center justify-center
                              hover:scale-110
                              transition"
                           >
                              <FaExternalLinkAlt />
                           </a>

                           <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                              w-14 h-14
                              rounded-2xl
                              border border-white/20
                              bg-white/10
                              backdrop-blur-xl
                              flex items-center justify-center
                              hover:scale-110
                              transition"
                           >
                              <FaGithub />
                           </a>

                           <button
                              onClick={() =>
                                 setActiveProject(project)
                              }
                              className="
                              w-14 h-14
                              rounded-2xl
                              border border-white/20
                              bg-white/10
                              backdrop-blur-xl
                              flex items-center justify-center
                              hover:scale-110
                              transition"
                           >
                              <FaEye />
                           </button>

                        </div>

                     </div>

                     {/* CONTENT */}
                     <div className="p-8">

                        <div
                           className="
                           flex items-center
                           justify-between
                           mb-5"
                        >

                           <span
                              className="
                              px-4 py-2
                              rounded-full
                              text-xs
                              bg-yellow-500/10
                              border border-yellow-500/20
                              text-yellow-400"
                           >
                              {project.category}
                           </span>

                           <div className="flex gap-3 text-yellow-400">

                              <FaReact />

                              <FaNodeJs />

                           </div>

                        </div>

                        <h3
                           className="
                           text-2xl
                           font-black
                           mb-5"
                        >
                           {project.title}
                        </h3>

                        {/* TECH STACK */}
                        <div
                           className="
                           flex flex-wrap
                           gap-3
                           mb-7"
                        >

                           {project.tech.map((tech, i) => (
                              <span
                                 key={i}
                                 className="
                                 px-3 py-2
                                 rounded-xl
                                 text-xs
                                 bg-black/40
                                 border border-yellow-500/10
                                 text-gray-300"
                              >
                                 {tech}
                              </span>
                           ))}

                        </div>

                        {/* BUTTONS */}
                        <div className="flex gap-4">

                           <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                              flex-1
                              flex items-center justify-center gap-3
                              py-4
                              rounded-2xl
                              bg-gradient-to-r
                              from-yellow-400
                              to-orange-500
                              text-black
                              font-bold
                              hover:scale-105
                              transition duration-300"
                           >
                              Live Demo
                              <FaArrowRight />
                           </a>

                           <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                              w-16
                              rounded-2xl
                              border border-yellow-500/20
                              bg-white/5
                              flex items-center justify-center
                              hover:bg-yellow-500/10
                              transition duration-300"
                           >
                              <FaGithub />
                           </a>

                        </div>

                     </div>

                  </div>
               ))}

            </div>

            {/* BOTTOM TEXT */}
            <div className="text-center mt-24">

               <h3
                  className="
                  text-3xl
                  font-black
                  mb-5"
               >
                  Building Modern Web Experiences 🚀
               </h3>

               <p
                  className="
                  text-gray-400
                  max-w-2xl
                  mx-auto
                  leading-8"
               >
                  Every project is designed with clean
                  architecture, premium user experience,
                  responsive layouts and modern animation
                  systems.
               </p>

            </div>

         </div>

         {/* MODAL */}
         {activeProject && (
            <div
               ref={modalRef}
               onClick={() =>
                  setActiveProject(null)
               }
               className="
               fixed inset-0
               bg-black/90
               backdrop-blur-xl
               z-50
               flex items-center justify-center
               px-6"
            >

               <div
                  className="
                  relative
                  max-w-5xl
                  w-full"
               >

                  <img
                     src={activeProject.img}
                     alt={activeProject.title}
                     className="
                     w-full
                     max-h-[85vh]
                     object-cover
                     rounded-[30px]"
                  />

                  <button
                     onClick={() =>
                        setActiveProject(null)
                     }
                     className="
                     absolute
                     top-5 right-5
                     w-12 h-12
                     rounded-full
                     bg-black/70
                     text-white
                     hover:bg-red-500
                     transition"
                  >
                     ✕
                  </button>

               </div>

            </div>
         )}

      </section>
   );
};

export default Projects;