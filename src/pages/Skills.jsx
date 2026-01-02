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
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiVercel } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const cardsRef = useRef([]);
  const marqueeRef = useRef(null);
  const marqueeTween = useRef(null);

  /* ======================
     CARD ENTRY ANIMATION
  ====================== */
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: i * 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        }
      );
    });
  }, []);

  /* ======================
     CONTINUOUS LEARNING MARQUEE
  ====================== */
  useEffect(() => {
    if (marqueeTween.current) return;

    const width = marqueeRef.current.scrollWidth / 2;

    marqueeTween.current = gsap.to(marqueeRef.current, {
      x: -width,
      duration: 28,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % width}px`,
      },
    });
  }, []);

  /* ======================
     SMOOTH SCROLL → PROJECTS
  ====================== */
  const scrollToProjects = () => {
    const target = document.getElementById("projects");
    if (!target) return;

    gsap.to(window, {
      scrollTo: target,
      duration: 1.4,
      ease: "power3.inOut",
    });
  };

  /* ======================
     DATA
  ====================== */
  const sections = [
    {
      title: "FRONTEND DEVELOPER",
      skills: [
        { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
        { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
        { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
        { icon: <FaReact />, name: "React", color: "text-cyan-400" },
        { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-500" },
      ],
    },
    {
      title: "BACKEND DEVELOPER",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
        { icon: <SiExpress />, name: "Express.js", color: "text-gray-300" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
      ],
    },
    {
      title: "TOOLS",
      skills: [
        { icon: <FaGitAlt />, name: "Git", color: "text-red-500" },
        { icon: <FaGithub />, name: "GitHub", color: "text-white" },
        { icon: <SiVercel />, name: "Vercel", color: "text-white" },
      ],
    },
  ];

  const learningSkills = [
    { icon: <FaChartLine />, name: "Stock Trading", color: "text-emerald-400" },
    { icon: <FaCoins />, name: "Forex Trading", color: "text-yellow-500" },
    { icon: <FaVideo />, name: "Video Editing", color: "text-pink-400" },
    { icon: <FaReact />, name: "App Development", color: "text-cyan-300" },
  ];

  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-widest">
            SKILLS
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Full Stack Development & Trading Journey
          </p>
        </div>

        {/* SKILL SECTIONS */}
        <div className="space-y-20">
          {sections.map((section, sIndex) => (
            <div key={sIndex}>
              <h3 className="text-gray-400 tracking-widest mb-8 text-center sm:text-left">
                {section.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
                {section.skills.map((skill, i) => (
                  <div
                    key={i}
                    ref={(el) => cardsRef.current.push(el)}
                    className="
                      bg-[#111]
                      rounded-xl
                      p-6 sm:p-8
                      flex flex-col items-center gap-3
                      hover:-translate-y-2 hover:scale-105
                      transition
                      shadow-md
                      active:scale-95
                    "
                  >
                    <div className={`text-4xl sm:text-5xl ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <p className="tracking-wide text-sm sm:text-base text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LEARNING MARQUEE */}
        <div className="mt-28">
          <h3 className="text-gray-400 mb-8 tracking-widest text-center">
            LEARNING & GROWING
          </h3>

          <div className="overflow-hidden">
            <div ref={marqueeRef} className="flex gap-10 w-max">
              {[...learningSkills, ...learningSkills].map((skill, i) => (
                <div
                  key={i}
                  className="
                    bg-[#111]
                    rounded-xl
                    p-8
                    min-w-[200px]
                    flex flex-col items-center gap-4
                    shadow-lg
                  "
                >
                  <div className={`text-5xl ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <p className="tracking-wide">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Skills;
