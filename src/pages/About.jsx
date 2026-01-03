import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { FaDownload, FaMapMarkerAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const lineRef = useRef(null);

  /* LENIS */
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });
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
      ".about-text",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    /* Timeline vertical line animation */
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#0b0b0b] text-white"
    >
      <div className="max-w-6xl mx-auto px-5 py-20 space-y-16">

        {/* ABOUT TEXT */}
        <div className="about-text max-w-xl space-y-4">
          <h2 className="text-3xl font-bold tracking-wide">ABOUT ME</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a motivated{" "}
            <span className="text-white">Full Stack Web Developer</span>{" "}
            focused on building clean, scalable and real-world web applications.
            I believe in strong fundamentals, simple UI and practical problem solving.
          </p>
        </div>

        {/* INFO BOXES (GLASS EFFECT) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Education */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-xl
            border border-white/10 space-y-3"
          >
            <h3 className="text-lg font-semibold text-blue-400">EDUCATION</h3>
            <p className="text-gray-300">
              <span className="text-white">Class 10</span> — 2023 (75%)
            </p>
            <p className="text-gray-300">
              <span className="text-white">Class 12 (Science)</span> — 2025 (75%)
            </p>
          </div>

          {/* Web Development */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-xl
            border border-white/10 space-y-3"
          >
            <h3 className="text-lg font-semibold text-blue-400">
              WEB DEVELOPMENT
            </h3>
            <p className="text-gray-300">
              Completed a{" "}
              <span className="text-white">6-month Web Development course</span>{" "}
              from <span className="text-white">WsCube Tech</span>.
            </p>
            <p className="text-gray-300">
              Built frontend & backend projects using modern frameworks.
            </p>
          </div>

          {/* System / Workflow */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-xl
            border border-white/10 space-y-3"
          >
            <h3 className="text-lg font-semibold text-blue-400">
              SYSTEM & WORKFLOW
            </h3>
            <ul className="text-gray-300 list-disc pl-5 space-y-1">
              <li>Requirement analysis & planning</li>
              <li>Clean UI & responsive design</li>
              <li>Reusable components</li>
              <li>Testing & deployment</li>
            </ul>
          </div>

        </div>

        {/* LOCATION SECTION */}
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl
        border border-white/10 space-y-3 max-w-xl">
          <h3 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
            <FaMapMarkerAlt /> LOCATION
          </h3>
          <p className="text-gray-300">
            I am from <span className="text-white">India</span>,
            originally from <span className="text-white">Rajasthan</span>,
            <span className="text-white"> Churu</span>.
          </p>
          <p className="text-gray-300">
            Currently living in <span className="text-white">Jodhpur</span>.
          </p>
        </div>

        {/* LEARNING TIMELINE */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">LEARNING JOURNEY</h3>

          <div className="relative pl-6 space-y-4 text-sm">
            {/* Vertical Line */}
            <span
              ref={lineRef}
              className="absolute left-0 top-0 w-[2px] h-full
      bg-gradient-to-b from-blue-400 to-purple-500"
            />

            <p className="text-gray-300">
              <span className="text-white">2023</span> — Completed Class 10 and explored interest in technology
            </p>

            <p className="text-gray-300">
              <span className="text-white">2025</span> — Completed Class 12 (Science)
            </p>

            <p className="text-gray-300">
              <span className="text-white">After 2025</span> — Started learning and building websites,
              focusing on frontend and full-stack development
            </p>
          </div>
        </div>


        {/* RESUME */}
        <div>
          <a
            href="/Black and Orange Dark Simple and Straightforward Gym Business Meeting Visual Charts Presentation.pdf"
            download
            className="inline-flex items-center gap-3
    border border-blue-400/40 px-6 py-3 rounded-full text-sm
    hover:bg-blue-400 hover:text-black transition"
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
