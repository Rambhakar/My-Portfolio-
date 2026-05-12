import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaChartLine,
  FaCoins,
  FaVideo,
  FaLaptopCode,
  FaRocket,
  FaMobileAlt,
  FaDatabase,
  FaServer,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiVercel,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const cardsRef = useRef([]);
  const marqueeRef = useRef(null);

  /* CARD ANIMATION */
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: i * 0.06,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  /* MARQUEE */
  useEffect(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const sections = [
    {
      title: "FRONTEND DEVELOPMENT",
      icon: <FaLaptopCode />,
      skills: [
        {
          icon: <FaHtml5 />,
          name: "HTML5",
          color: "text-orange-500",
        },

        {
          icon: <FaCss3Alt />,
          name: "CSS3",
          color: "text-blue-500",
        },

        {
          icon: <FaJs />,
          name: "JavaScript",
          color: "text-yellow-400",
        },

        {
          icon: <FaReact />,
          name: "React JS",
          color: "text-cyan-400",
        },

        {
          icon: <SiTailwindcss />,
          name: "Tailwind CSS",
          color: "text-cyan-300",
        },

        {
          icon: <FaBootstrap />,
          name: "Bootstrap",
          color: "text-purple-500",
        },

        {
          icon: <SiRedux />,
          name: "Redux",
          color: "text-violet-400",
        },
      ],
    },

    {
      title: "BACKEND DEVELOPMENT",
      icon: <FaServer />,
      skills: [
        {
          icon: <FaNodeJs />,
          name: "Node.js",
          color: "text-green-500",
        },

        {
          icon: <SiExpress />,
          name: "Express.js",
          color: "text-gray-300",
        },

        {
          icon: <SiMongodb />,
          name: "MongoDB",
          color: "text-green-400",
        },

        {
          icon: <SiFirebase />,
          name: "Firebase",
          color: "text-yellow-400",
        },

        {
          icon: <FaDatabase />,
          name: "REST API",
          color: "text-orange-400",
        },
      ],
    },

    {
      title: "TOOLS & DEPLOYMENT",
      icon: <FaRocket />,
      skills: [
        {
          icon: <FaGitAlt />,
          name: "Git",
          color: "text-red-500",
        },

        {
          icon: <FaGithub />,
          name: "GitHub",
          color: "text-white",
        },

        {
          icon: <SiVercel />,
          name: "Vercel",
          color: "text-white",
        },

        {
          icon: <FaCode />,
          name: "VS Code",
          color: "text-blue-400",
        },

        {
          icon: <FaMobileAlt />,
          name: "Responsive UI",
          color: "text-pink-400",
        },
      ],
    },
  ];

  const learningSkills = [
    {
      icon: <FaChartLine />,
      name: "Stock Trading",
      color: "text-emerald-400",
    },

    {
      icon: <FaCoins />,
      name: "Forex Trading",
      color: "text-yellow-500",
    },

    {
      icon: <FaVideo />,
      name: "Video Editing",
      color: "text-pink-400",
    },

    {
      icon: <FaReact />,
      name: "App Development",
      color: "text-cyan-300",
    },

    {
      icon: <FaRocket />,
      name: "UI Animation",
      color: "text-orange-400",
    },
  ];

  return (
    <section
      id="skills"
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
            ✨ Professional Skills
          </div>

          <h2
            className="
                  text-5xl
                  sm:text-6xl
                  font-black
                  leading-tight
                  mb-8"
          >
            My{" "}

            <span
              className="
                     bg-gradient-to-r
                     from-yellow-300
                     via-yellow-500
                     to-orange-500
                     bg-clip-text
                     text-transparent"
            >
              Technical Skills
            </span>
          </h2>

          <p
            className="
                  text-gray-400
                  text-lg
                  max-w-3xl
                  mx-auto
                  leading-9"
          >
            I create premium responsive websites,
            modern backend systems, luxury UI
            experiences and smooth animated web apps
            using powerful technologies.
          </p>

        </div>

        {/* SKILL SECTIONS */}
        <div className="space-y-24">

          {sections.map((section, sIndex) => (
            <div key={sIndex}>

              {/* TITLE */}
              <div
                className="
                        flex items-center gap-4
                        mb-10"
              >

                <div
                  className="
                           w-14 h-14
                           rounded-2xl
                           bg-yellow-500/10
                           border border-yellow-500/20
                           text-yellow-400
                           flex items-center justify-center
                           text-2xl"
                >
                  {section.icon}
                </div>

                <h3
                  className="
                           text-2xl
                           sm:text-3xl
                           font-black"
                >
                  {section.title}
                </h3>

              </div>

              {/* SKILLS */}
              <div
                className="
                        grid
                        grid-cols-2
                        sm:grid-cols-3
                        lg:grid-cols-4
                        gap-6"
              >

                {section.skills.map((skill, i) => (
                  <div
                    key={i}
                    ref={(el) =>
                      cardsRef.current.push(el)
                    }
                    className="
                              group
                              relative
                              overflow-hidden
                              rounded-[30px]
                              p-8
                              bg-white/5
                              border border-yellow-500/10
                              backdrop-blur-2xl
                              hover:border-yellow-500/30
                              hover:-translate-y-3
                              transition duration-500"
                  >

                    {/* GLOW */}
                    <div
                      className="
                                 absolute
                                 inset-0
                                 opacity-0
                                 group-hover:opacity-100
                                 transition duration-500
                                 bg-gradient-to-br
                                 from-yellow-500/10
                                 to-orange-500/10"
                    />

                    <div className="relative z-10">

                      <div
                        className={`
                                    text-5xl
                                    mb-6
                                    ${skill.color}
                                    group-hover:scale-110
                                    transition duration-300`}
                      >
                        {skill.icon}
                      </div>

                      <h4
                        className="
                                    text-lg
                                    font-bold
                                    mb-3"
                      >
                        {skill.name}
                      </h4>

                      <div
                        className="
                                    flex items-center gap-2
                                    text-yellow-400
                                    text-sm"
                      >
                        Explore
                        <FaArrowRight />
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* EXPERIENCE BAR */}
        <div
          className="
               mt-28
               grid
               grid-cols-1
               md:grid-cols-3
               gap-6"
        >

          {[
            {
              title: "Frontend UI",
              value: "95%",
            },

            {
              title: "Backend",
              value: "88%",
            },

            {
              title: "Responsive Design",
              value: "100%",
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) =>
                (cardsRef.current[index + 20] = el)
              }
              className="
                     rounded-[30px]
                     p-8
                     bg-white/5
                     border border-yellow-500/10"
            >

              <div
                className="
                        flex items-center
                        justify-between
                        mb-4"
              >

                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

                <span className="text-yellow-400 font-bold">
                  {item.value}
                </span>

              </div>

              <div
                className="
                        h-3
                        rounded-full
                        bg-black/40
                        overflow-hidden"
              >

                <div
                  className="
                           h-full
                           rounded-full
                           bg-gradient-to-r
                           from-yellow-400
                           to-orange-500"
                  style={{
                    width: item.value,
                  }}
                />

              </div>

            </div>
          ))}

        </div>

        {/* MARQUEE */}
        <div className="mt-28">

          <div className="text-center mb-10">

            <h3
              className="
                     text-4xl
                     font-black
                     mb-4"
            >
              Learning & Growing 🚀
            </h3>

            <p className="text-gray-400">
              Constantly improving modern skills
              and technologies.
            </p>

          </div>

          <div className="overflow-hidden">

            <div
              ref={marqueeRef}
              className="
                     flex
                     gap-8
                     w-max"
            >

              {[...learningSkills, ...learningSkills].map(
                (skill, i) => (
                  <div
                    key={i}
                    className="
                              min-w-[240px]
                              rounded-[30px]
                              p-8
                              bg-white/5
                              border border-yellow-500/10
                              backdrop-blur-2xl
                              text-center"
                  >

                    <div
                      className={`
                                 text-5xl
                                 mb-5
                                 ${skill.color}`}
                    >
                      {skill.icon}
                    </div>

                    <h4
                      className="
                                 text-xl
                                 font-bold"
                    >
                      {skill.name}
                    </h4>

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;