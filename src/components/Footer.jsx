import { motion } from "framer-motion";

import {
   FaGithub,
   FaLinkedin,
   FaInstagram,
   FaWhatsapp,
   FaTelegramPlane,
   FaEnvelope,
   FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
   return (
      <footer
         className="
         relative
         overflow-hidden
         bg-[#030303]
         text-white
         pt-24
         pb-10"
      >

         {/* BACKGROUND */}
         <div className="absolute inset-0 overflow-hidden">

            {/* GOLDEN GLOW */}
            <div
               className="
               absolute
               top-[-150px]
               left-[-120px]
               w-[350px]
               h-[350px]
               rounded-full
               bg-yellow-500/10
               blur-[130px]"
            />

            {/* ORANGE GLOW */}
            <div
               className="
               absolute
               bottom-[-150px]
               right-[-120px]
               w-[350px]
               h-[350px]
               rounded-full
               bg-orange-500/10
               blur-[130px]"
            />

            {/* GRID */}
            <div
               className="
               absolute inset-0
               opacity-[0.03]
               [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
               [background-size:60px_60px]"
            />

         </div>

         <div
            className="
            relative z-10
            max-w-7xl
            mx-auto
            px-6"
         >

            {/* TOP SECTION */}
            <div
               className="
               flex
               flex-col
               lg:flex-row
               justify-between
               gap-16
               pb-16
               border-b border-yellow-500/10"
            >

               {/* LEFT */}
               <div className="max-w-xl">

                  <div
                     className="
                     inline-flex
                     items-center gap-3
                     px-5 py-2
                     rounded-full
                     bg-yellow-500/10
                     border border-yellow-500/20
                     text-yellow-400
                     text-sm
                     mb-8"
                  >
                     ✨ Premium Portfolio
                  </div>

                  <h2
                     className="
                     text-5xl
                     sm:text-6xl
                     font-black
                     leading-tight
                     mb-8"
                  >

                     <span
                        className="
                        bg-gradient-to-r
                        from-yellow-300
                        via-yellow-500
                        to-orange-500
                        bg-clip-text
                        text-transparent"
                     >
                        Ramniwas
                     </span>

                     <span className="text-white">
                        .dev
                     </span>

                  </h2>

                  <p
                     className="
                     text-gray-400
                     leading-9
                     text-lg"
                  >
                     Full Stack Developer crafting modern
                     responsive websites with smooth UI,
                     premium animations and scalable
                     backend systems 🚀
                  </p>

               </div>

               {/* RIGHT */}
               <div
                  className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-14"
               >

                  {/* QUICK LINKS */}
                  <div>

                     <h3
                        className="
                        text-white
                        font-bold
                        text-xl
                        mb-8"
                     >
                        Quick Links
                     </h3>

                     <div className="space-y-5">

                        {[
                           "Home",
                           "About",
                           "Skills",
                           "Projects",
                           "Contact",
                        ].map((item, index) => (
                           <motion.a
                              key={index}

                              href={`#${item.toLowerCase()}`}

                              whileHover={{
                                 x: 8,
                              }}

                              className="
                              block
                              text-gray-400
                              hover:text-yellow-400
                              transition duration-300"
                           >
                              {item}
                           </motion.a>
                        ))}

                     </div>

                  </div>

                  {/* CONTACT */}
                  <div>

                     <h3
                        className="
                        text-white
                        font-bold
                        text-xl
                        mb-8"
                     >
                        Contact
                     </h3>

                     <div className="space-y-6">

                        <a
                           href="mailto:ramniwasbhakar2008@gmail.com"
                           className="
                           block
                           text-gray-400
                           hover:text-yellow-400
                           transition duration-300"
                        >
                           ramniwasbhakar2008@gmail.com
                        </a>

                        <a
                           href="tel:+918955419560"
                           className="
                           block
                           text-gray-400
                           hover:text-yellow-400
                           transition duration-300"
                        >
                           +91 8955419560
                        </a>

                        <a
                           href="https://wa.me/918955419560"
                           target="_blank"
                           rel="noreferrer"
                           className="
                           block
                           text-gray-400
                           hover:text-green-400
                           transition duration-300"
                        >
                           WhatsApp Chat
                        </a>

                     </div>

                  </div>

               </div>

            </div>

            {/* SOCIAL SECTION */}
            <div
               className="
               py-14
               flex
               flex-col
               lg:flex-row
               items-center
               justify-between
               gap-10"
            >

               {/* SOCIAL ICONS */}
               <div className="flex flex-wrap gap-5">

                  {[
                     {
                        icon: <FaGithub />,
                        link: "https://github.com/Rambhakar/",
                        color: "hover:text-white",
                     },

                     {
                        icon: <FaLinkedin />,
                        link: "https://linkedin.com",
                        color: "hover:text-blue-400",
                     },

                     {
                        icon: <FaInstagram />,
                        link: "https://instagram.com",
                        color: "hover:text-pink-400",
                     },

                     {
                        icon: <FaTelegramPlane />,
                        link: "https://telegram.org",
                        color: "hover:text-cyan-400",
                     },

                     {
                        icon: <FaWhatsapp />,
                        link: "https://wa.me/918955419560",
                        color: "hover:text-green-400",
                     },

                     {
                        icon: <FaEnvelope />,
                        link: "mailto:ramniwasbhakar2008@gmail.com",
                        color: "hover:text-red-400",
                     },
                  ].map((item, index) => (
                     <motion.a
                        key={index}

                        href={item.link}

                        target="_blank"

                        rel="noreferrer"

                        whileHover={{
                           y: -5,
                           scale: 1.08,
                        }}

                        whileTap={{
                           scale: 0.95,
                        }}

                        className={`
                        w-14 h-14
                        rounded-2xl
                        bg-white/5
                        border border-yellow-500/10
                        backdrop-blur-xl
                        flex items-center justify-center
                        text-xl
                        text-gray-300
                        transition duration-300
                        ${item.color}
                        `}
                     >
                        {item.icon}
                     </motion.a>
                  ))}

               </div>

               {/* COPYRIGHT */}
               <div
                  className="
                  text-center
                  lg:text-right"
               >

                  <p
                     className="
                     text-gray-500
                     text-sm
                     mb-2"
                  >
                     © {new Date().getFullYear()} Ramniwas.dev
                  </p>

                  <p
                     className="
                     text-gray-600
                     text-sm"
                  >
                     Designed & Developed with React ⚡
                  </p>

               </div>

            </div>

         </div>

         {/* TOP BUTTON */}
         <motion.button

            whileHover={{
               scale: 1.08,
               y: -2,
            }}

            whileTap={{
               scale: 0.95,
            }}

            onClick={() =>
               window.scrollTo({
                  top: 0,
                  behavior: "smooth",
               })
            }

            className="
            fixed
            bottom-6
            right-6
            z-50
            w-14 h-14
            rounded-2xl
            bg-gradient-to-r
            from-yellow-400
            to-orange-500
            text-black
            flex items-center justify-center
            shadow-[0_0_30px_rgba(255,200,0,0.4)]"
         >
            <FaArrowUp />
         </motion.button>

      </footer>
   );
};

export default Footer;