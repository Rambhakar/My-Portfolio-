import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Lenis from "@studio-freight/lenis";

import {
  FaDownload,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaCode,
  FaServer,
  FaLayerGroup,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaRocket,
  FaMedal,
  FaStar,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const lineRef = useRef(null);

  /* SMOOTH SCROLL */
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  /* GSAP */
  useEffect(() => {
    gsap.fromTo(
      ".about-heading",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.05,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
        }
      );
    });

    gsap.fromTo(
      lineRef.current,
      {
        scaleY: 0,
      },
      {
        scaleY: 1,
        transformOrigin: "top",
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const skills = [
    "React",
    "Tailwind",
    "Node.js",
    "MongoDB",
    "GSAP",
    "JavaScript",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
         relative
         overflow-hidden
         bg-[#050505]
         text-white
         py-24"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* GRID */}
        <div
          className="
               absolute inset-0
               opacity-[0.04]
               [background-image:linear-gradient(to_right,#facc15_1px,transparent_1px),linear-gradient(to_bottom,#facc15_1px,transparent_1px)]
               [background-size:70px_70px]"
        />

        {/* GLOW */}
        <div
          className="
               absolute
               top-[-120px]
               left-[-120px]
               w-[350px]
               h-[350px]
               bg-yellow-500/10
               rounded-full
               blur-[140px]"
        />

        <div
          className="
               absolute
               bottom-[-120px]
               right-[-120px]
               w-[350px]
               h-[350px]
               bg-orange-500/10
               rounded-full
               blur-[140px]"
        />

        {/* STARS */}
        <FaStar
          className="
               absolute
               top-[18%]
               left-[8%]
               text-yellow-400/20
               text-xl"
        />

        <FaStar
          className="
               absolute
               bottom-[20%]
               right-[10%]
               text-yellow-400/20
               text-lg"
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
        <div
          className="
               about-heading
               text-center
               max-w-3xl
               mx-auto
               mb-20"
        >

          <div
            className="
                  inline-flex
                  items-center gap-2
                  px-5 py-2
                  rounded-full
                  bg-yellow-500/10
                  border border-yellow-500/20
                  text-yellow-400
                  text-xs
                  sm:text-sm
                  mb-6"
          >
            ✨ About Developer
          </div>

          <h2
            className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-black
                  leading-tight
                  mb-6"
          >
            Creating{" "}

            <span
              className="
                     bg-gradient-to-r
                     from-yellow-300
                     via-yellow-500
                     to-orange-500
                     bg-clip-text
                     text-transparent"
            >
              Modern Digital
            </span>{" "}

            Experiences
          </h2>

          <p
            className="
                  text-gray-400
                  text-base
                  sm:text-lg
                  leading-8"
          >
            I build premium full stack websites
            with futuristic UI, smooth animations
            and responsive experiences.
          </p>

        </div>

        {/* STATS */}
        <div
          className="
               grid
               grid-cols-2
               md:grid-cols-4
               gap-5
               mb-20"
        >

          {[
            {
              title: "2+",
              sub: "Years",
            },

            {
              title: "25+",
              sub: "Projects",
            },

            {
              title: "10+",
              sub: "Technologies",
            },

            {
              title: "100%",
              sub: "Responsive",
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) =>
                (cardsRef.current[index] = el)
              }
              className="
                     group
                     relative
                     overflow-hidden
                     rounded-[30px]
                     p-6
                     text-center
                     bg-white/5
                     border border-yellow-500/10
                     backdrop-blur-2xl
                     hover:border-yellow-500/30
                     hover:-translate-y-2
                     transition duration-500"
            >

              {/* CORNER LIGHT */}
              <div
                className="
                        absolute
                        top-0
                        right-0
                        w-24
                        h-24
                        bg-yellow-400/10
                        blur-3xl"
              />

              <h3
                className="
                        text-4xl
                        font-black
                        text-yellow-400
                        mb-2"
              >
                {item.title}
              </h3>

              <p
                className="
                        text-gray-400
                        text-sm"
              >
                {item.sub}
              </p>

            </div>
          ))}

        </div>

        {/* MAIN GRID */}
        <div
          className="
               grid
               grid-cols-1
               lg:grid-cols-2
               gap-6
               mb-20"
        >

          {/* MISSION */}
          <div
            ref={(el) =>
              (cardsRef.current[4] = el)
            }
            className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  p-8
                  bg-white/5
                  border border-yellow-500/10
                  backdrop-blur-2xl"
          >

            <div
              className="
                     absolute
                     top-0
                     right-0
                     w-32
                     h-32
                     bg-yellow-400/10
                     blur-3xl"
            />

            <div
              className="
                     relative z-10"
            >

              <div
                className="
                        w-16 h-16
                        rounded-2xl
                        bg-yellow-500/10
                        text-yellow-400
                        flex items-center justify-center
                        text-3xl
                        mb-6"
              >
                <FaRocket />
              </div>

              <h3
                className="
                        text-2xl
                        font-black
                        mb-5"
              >
                My Mission 🚀
              </h3>

              <p
                className="
                        text-gray-400
                        text-sm
                        leading-8"
              >
                My mission is to create premium,
                scalable and futuristic web
                applications using modern
                technologies and clean architecture.

                I focus on smooth user experience,
                responsive layouts, high performance
                and modern UI systems that solve
                real-world problems and create
                impactful digital experiences 🚀
              </p>

            </div>

          </div>

          {/* TECH STACK */}
          <div
            ref={(el) =>
              (cardsRef.current[5] = el)
            }
            className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  p-8
                  bg-white/5
                  border border-yellow-500/10
                  backdrop-blur-2xl"
          >

            <div
              className="
                     absolute
                     bottom-0
                     left-0
                     w-32
                     h-32
                     bg-orange-400/10
                     blur-3xl"
            />

            <div
              className="
                     relative z-10"
            >

              <h3
                className="
                        text-2xl
                        font-black
                        mb-6"
              >
                Tech Stack ⚡
              </h3>

              <div className="flex flex-wrap gap-3 mb-8">

                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="
                              px-4 py-2
                              rounded-xl
                              bg-yellow-500/10
                              border border-yellow-500/20
                              text-yellow-400
                              text-sm
                              hover:scale-105
                              transition"
                  >
                    {skill}
                  </div>
                ))}

              </div>

              <div
                className="
                        grid
                        grid-cols-2
                        gap-4"
              >

                {[
                  {
                    icon: <FaReact />,
                    title: "Frontend",
                  },

                  {
                    icon: <FaNodeJs />,
                    title: "Backend",
                  },

                  {
                    icon: <FaDatabase />,
                    title: "Database",
                  },

                  {
                    icon: <FaMedal />,
                    title: "Quality",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                              rounded-2xl
                              p-4
                              bg-black/30
                              border border-yellow-500/10"
                  >

                    <div
                      className="
                                 text-2xl
                                 text-yellow-400
                                 mb-3"
                    >
                      {item.icon}
                    </div>

                    <h4
                      className="
                                 text-sm
                                 font-bold"
                    >
                      {item.title}
                    </h4>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* SERVICES */}
        <div
          className="
               grid
               grid-cols-1
               md:grid-cols-2
               lg:grid-cols-4
               gap-5
               mb-20"
        >

          {[
            {
              icon: <FaLaptopCode />,
              title: "Frontend",
              desc: "Responsive modern UI systems.",
            },

            {
              icon: <FaServer />,
              title: "Backend",
              desc: "Powerful APIs & servers.",
            },

            {
              icon: <FaLayerGroup />,
              title: "UI/UX",
              desc: "Luxury user interface design.",
            },

            {
              icon: <FaCode />,
              title: "Deployment",
              desc: "Modern deployment workflow.",
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) =>
                (cardsRef.current[index + 6] = el)
              }
              className="
                     group
                     relative
                     overflow-hidden
                     rounded-[28px]
                     p-6
                     bg-white/5
                     border border-yellow-500/10
                     backdrop-blur-2xl
                     hover:border-yellow-500/30
                     hover:-translate-y-2
                     transition duration-500"
            >

              <div
                className="
                        absolute
                        top-0
                        right-0
                        w-20
                        h-20
                        bg-yellow-400/10
                        blur-3xl"
              />

              <div className="relative z-10">

                <div
                  className="
                           w-14 h-14
                           rounded-2xl
                           bg-yellow-500/10
                           text-yellow-400
                           flex items-center justify-center
                           text-xl
                           mb-5"
                >
                  {item.icon}
                </div>

                <h3
                  className="
                           text-xl
                           font-bold
                           mb-3"
                >
                  {item.title}
                </h3>

                <p
                  className="
                           text-gray-400
                           text-sm
                           leading-7"
                >
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* BUTTON */}
        <div className="text-center">

          <a
            href="/Ramniwas-Bhakar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
                  inline-flex
                  items-center gap-3
                  px-8 py-4
                  rounded-full
                  bg-gradient-to-r
                  from-yellow-400
                  to-orange-500
                  text-black
                  font-bold
                  text-sm
                  hover:scale-105
                  transition duration-300
                  shadow-[0_0_35px_rgba(255,200,0,0.4)]"
          >
            <FaDownload />
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
};

export default About;