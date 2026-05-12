import { useState } from "react";

import { motion } from "framer-motion";

import {
   FaEnvelope,
   FaPhoneAlt,
   FaMapMarkerAlt,
   FaWhatsapp,
   FaPaperPlane,
   FaGithub,
   FaLinkedinIn,
   FaInstagram,
} from "react-icons/fa";

const Contact = () => {
   const [loading, setLoading] = useState(false);

   const [success, setSuccess] = useState(false);

   const [error, setError] = useState("");

   /* SUBMIT */
   const handleSubmit = async (e) => {
      e.preventDefault();

      setLoading(true);
      setSuccess(false);
      setError("");

      const form = e.target;

      const data = new FormData(form);

      try {
         /* FORM SUBMIT */
         const response = await fetch(
            "https://formspree.io/f/xqabqvnj",
            {
               method: "POST",
               body: data,
               headers: {
                  Accept: "application/json",
               },
            }
         );

         if (response.ok) {
            setSuccess(true);

            form.reset();
         } else {
            setError("Message failed to send ❌");
         }
      } catch (err) {
         setError("Network error ❌");
      } finally {
         setLoading(false);
      }
   };

   return (
      <section
         id="contact"
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

         <motion.div
            initial={{
               opacity: 0,
               y: 80,
            }}

            whileInView={{
               opacity: 1,
               y: 0,
            }}

            transition={{
               duration: 1,
            }}

            viewport={{
               once: true,
            }}

            className="
            relative z-10
            max-w-7xl
            mx-auto
            px-6"
         >

            {/* HEADING */}
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
                  ✨ Contact Me
               </div>

               <h2
                  className="
                  text-5xl
                  sm:text-6xl
                  font-black
                  leading-tight
                  mb-8"
               >
                  Let’s Build{" "}

                  <span
                     className="
                     bg-gradient-to-r
                     from-yellow-300
                     via-yellow-500
                     to-orange-500
                     bg-clip-text
                     text-transparent"
                  >
                     Something Amazing
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
                  Have a project idea, collaboration or
                  business inquiry? Send me a message and
                  I’ll reply as soon as possible 🚀
               </p>

            </div>

            {/* MAIN GRID */}
            <div
               className="
               grid
               grid-cols-1
               lg:grid-cols-2
               gap-14"
            >

               {/* LEFT SIDE */}
               <motion.div
                  initial={{
                     opacity: 0,
                     x: -80,
                  }}

                  whileInView={{
                     opacity: 1,
                     x: 0,
                  }}

                  transition={{
                     duration: 1,
                  }}

                  className="
                  rounded-[35px]
                  p-10
                  bg-white/5
                  border border-yellow-500/10
                  backdrop-blur-2xl"
               >

                  <h3
                     className="
                     text-3xl
                     font-black
                     mb-10"
                  >
                     Contact Information 📞
                  </h3>

                  <div className="space-y-8">

                     {/* EMAIL */}
                     <a
                        href="mailto:ramniwasbhakar2008@gmail.com"
                        className="
                        group
                        flex items-center gap-5
                        p-5
                        rounded-2xl
                        bg-black/30
                        border border-yellow-500/10
                        hover:border-yellow-500/30
                        transition duration-300"
                     >

                        <div
                           className="
                           w-14 h-14
                           rounded-2xl
                           bg-yellow-500/10
                           text-yellow-400
                           flex items-center justify-center
                           text-xl"
                        >
                           <FaEnvelope />
                        </div>

                        <div>
                           <p className="text-gray-400 text-sm">
                              Email
                           </p>

                           <h4 className="font-bold">
                              ramniwasbhakar2008@gmail.com
                           </h4>
                        </div>

                     </a>

                     {/* PHONE */}
                     <a
                        href="tel:+918955419560"
                        className="
                        flex items-center gap-5
                        p-5
                        rounded-2xl
                        bg-black/30
                        border border-yellow-500/10
                        hover:border-yellow-500/30
                        transition duration-300"
                     >

                        <div
                           className="
                           w-14 h-14
                           rounded-2xl
                           bg-yellow-500/10
                           text-yellow-400
                           flex items-center justify-center
                           text-xl"
                        >
                           <FaPhoneAlt />
                        </div>

                        <div>
                           <p className="text-gray-400 text-sm">
                              Phone
                           </p>

                           <h4 className="font-bold">
                              +91 8955419560
                           </h4>
                        </div>

                     </a>

                     {/* WHATSAPP */}
                     <a
                        href="https://wa.me/918955419560"
                        target="_blank"
                        rel="noreferrer"
                        className="
                        flex items-center gap-5
                        p-5
                        rounded-2xl
                        bg-black/30
                        border border-yellow-500/10
                        hover:border-yellow-500/30
                        transition duration-300"
                     >

                        <div
                           className="
                           w-14 h-14
                           rounded-2xl
                           bg-green-500/10
                           text-green-400
                           flex items-center justify-center
                           text-xl"
                        >
                           <FaWhatsapp />
                        </div>

                        <div>
                           <p className="text-gray-400 text-sm">
                              WhatsApp
                           </p>

                           <h4 className="font-bold">
                              Chat Instantly
                           </h4>
                        </div>

                     </a>

                     {/* LOCATION */}
                     <div
                        className="
                        flex items-center gap-5
                        p-5
                        rounded-2xl
                        bg-black/30
                        border border-yellow-500/10"
                     >

                        <div
                           className="
                           w-14 h-14
                           rounded-2xl
                           bg-orange-500/10
                           text-orange-400
                           flex items-center justify-center
                           text-xl"
                        >
                           <FaMapMarkerAlt />
                        </div>

                        <div>
                           <p className="text-gray-400 text-sm">
                              Location
                           </p>

                           <h4 className="font-bold">
                              Jodhpur, Rajasthan, India
                           </h4>
                        </div>

                     </div>

                  </div>

                  {/* SOCIALS */}
                  <div className="flex gap-5 mt-12">

                     {[
                        {
                           icon: <FaGithub />,
                           link: "https://github.com/Rambhakar/",
                        },

                        {
                           icon: <FaLinkedinIn />,
                           link: "https://linkedin.com",
                        },

                        {
                           icon: <FaInstagram />,
                           link: "https://instagram.com",
                        },
                     ].map((item, index) => (
                        <a
                           key={index}
                           href={item.link}
                           target="_blank"
                           rel="noreferrer"
                           className="
                           w-14 h-14
                           rounded-2xl
                           bg-white/5
                           border border-yellow-500/10
                           flex items-center justify-center
                           text-yellow-400
                           text-xl
                           hover:scale-110
                           hover:border-yellow-500/30
                           transition duration-300"
                        >
                           {item.icon}
                        </a>
                     ))}

                  </div>

               </motion.div>

               {/* RIGHT FORM */}
               <motion.form
                  onSubmit={handleSubmit}

                  initial={{
                     opacity: 0,
                     x: 80,
                  }}

                  whileInView={{
                     opacity: 1,
                     x: 0,
                  }}

                  transition={{
                     duration: 1,
                  }}

                  className="
                  rounded-[35px]
                  p-10
                  bg-white/5
                  border border-yellow-500/10
                  backdrop-blur-2xl
                  space-y-8"
               >

                  <h3
                     className="
                     text-3xl
                     font-black
                     mb-8"
                  >
                     Send Message ✨
                  </h3>

                  {/* NAME */}
                  <div>

                     <label className="text-sm text-gray-400">
                        Your Name
                     </label>

                     <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="
                        mt-3
                        w-full
                        rounded-2xl
                        bg-black/30
                        border border-yellow-500/10
                        px-5 py-4
                        outline-none
                        focus:border-yellow-500/40
                        transition"
                     />

                  </div>

                  {/* EMAIL */}
                  <div>

                     <label className="text-sm text-gray-400">
                        Your Email
                     </label>

                     <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className="
                        mt-3
                        w-full
                        rounded-2xl
                        bg-black/30
                        border border-yellow-500/10
                        px-5 py-4
                        outline-none
                        focus:border-yellow-500/40
                        transition"
                     />

                  </div>

                  {/* MESSAGE */}
                  <div>

                     <label className="text-sm text-gray-400">
                        Your Message
                     </label>

                     <textarea
                        rows="6"
                        name="message"
                        required
                        placeholder="Write your message..."
                        className="
                        mt-3
                        w-full
                        rounded-2xl
                        bg-black/30
                        border border-yellow-500/10
                        px-5 py-4
                        outline-none
                        resize-none
                        focus:border-yellow-500/40
                        transition"
                     />

                  </div>

                  {/* BUTTON */}
                  <button
                     type="submit"
                     disabled={loading}
                     className="
                     w-full
                     flex items-center justify-center gap-4
                     py-5
                     rounded-2xl
                     bg-gradient-to-r
                     from-yellow-400
                     to-orange-500
                     text-black
                     font-black
                     text-lg
                     hover:scale-[1.02]
                     transition duration-300
                     shadow-[0_0_35px_rgba(255,200,0,0.4)]"
                  >

                     {loading ? (
                        "Sending..."
                     ) : (
                        <>
                           Send Message
                           <FaPaperPlane />
                        </>
                     )}

                  </button>

                  {/* SUCCESS */}
                  {success && (
                     <motion.p
                        initial={{
                           opacity: 0,
                        }}

                        animate={{
                           opacity: 1,
                        }}

                        className="
                        text-green-400
                        text-center
                        font-semibold"
                     >
                        ✅ Message sent successfully
                     </motion.p>
                  )}

                  {/* ERROR */}
                  {error && (
                     <motion.p
                        initial={{
                           opacity: 0,
                        }}

                        animate={{
                           opacity: 1,
                        }}

                        className="
                        text-red-400
                        text-center
                        font-semibold"
                     >
                        ❌ {error}
                     </motion.p>
                  )}

               </motion.form>

            </div>

         </motion.div>

      </section>
   );
};

export default Contact;