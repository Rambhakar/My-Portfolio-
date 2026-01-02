import { useState } from "react";
import { motion } from "framer-motion";
import {
   FaEnvelope,
   FaPhoneAlt,
   FaMapMarkerAlt,
   FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      const form = e.target;
      const data = new FormData(form);

      try {
         const res = await fetch("https://formspree.io/f/xbjnzjpn", {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
         });

         if (res.ok) {
            setSuccess(true);
            form.reset();
         }
      } catch (err) {
         console.error(err);
      } finally {
         setLoading(false);
      }
   };

   return (
      <section
         id="contact"
         className="relative w-full py-32 overflow-hidden
      bg-gradient-to-br from-[#0a0a0a] via-[#0f172a] to-[#020617] text-gray-300"
      >
         {/* Subtle Ambient Glow */}
         <div className="absolute inset-0 bg-black blur-[140px]" />

         {/* Inner Container (WIDTH FIXED HERE) */}
         <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
          relative z-10
          max-w-7xl mx-auto
          px-6 md:px-10
        "
         >
            {/* Heading */}
            <div className="mb-16 max-w-xl">
               <h2 className="text-4xl font-bold text-white">
                  Get in <span className="text-indigo-400">Touch</span>
               </h2>
               <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  Have a project, idea or collaboration in mind?
                  Let’s talk and build something meaningful.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

               {/* Contact Info */}
               <div className="space-y-6 text-sm">

                  <a
                     href="mailto:ramniwasbhakar2008@gmail.com"
                     className="flex items-center gap-4 hover:text-indigo-400 transition"
                  >
                     <FaEnvelope className="text-indigo-400" />
                     <span>ramniwasbhakar2008@gmail.com</span>
                  </a>

                  <a
                     href="tel:+918955419560"
                     className="flex items-center gap-4 hover:text-indigo-400 transition"
                  >
                     <FaPhoneAlt className="text-indigo-400" />
                     <span>+91 8955419560</span>
                  </a>

                  <a
                     href="https://wa.me/918955419560"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-4 hover:text-green-400 transition"
                  >
                     <FaWhatsapp className="text-green-400" />
                     <span>Chat on WhatsApp</span>
                  </a>

                  <div className="flex items-center gap-4 opacity-80">
                     <FaMapMarkerAlt className="text-indigo-400" />
                     <span>India</span>
                  </div>

                  <p className="opacity-70 max-w-md pt-4">
                     Available for freelance, internships & full-time roles.
                  </p>
               </div>

               {/* Form */}
               <form onSubmit={handleSubmit} className="space-y-8">

                  {/* Name */}
                  <div className="relative">
                     <input
                        required
                        name="name"
                        type="text"
                        className="
                  peer w-full bg-transparent
                  border-b border-white/20 py-3
                  focus:outline-none focus:border-indigo-400
                "
                     />
                     <label
                        className="
                  absolute left-0 top-3 text-sm text-gray-400
                  peer-focus:-top-3 peer-focus:text-xs peer-focus:text-indigo-400
                  peer-valid:-top-3 peer-valid:text-xs transition-all
                "
                     >
                        Your Name
                     </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                     <input
                        required
                        name="email"
                        type="email"
                        className="
                  peer w-full bg-transparent
                  border-b border-white/20 py-3
                  focus:outline-none focus:border-indigo-400
                "
                     />
                     <label
                        className="
                  absolute left-0 top-3 text-sm text-gray-400
                  peer-focus:-top-3 peer-focus:text-xs peer-focus:text-indigo-400
                  peer-valid:-top-3 peer-valid:text-xs transition-all
                "
                     >
                        Your Email
                     </label>
                  </div>

                  {/* Message */}
                  <div className="relative">
                     <textarea
                        required
                        name="message"
                        rows="4"
                        className="
                  peer w-full bg-transparent
                  border-b border-white/20 py-3
                  focus:outline-none focus:border-indigo-400
                  resize-none
                "
                     />
                     <label
                        className="
                  absolute left-0 top-3 text-sm text-gray-400
                  peer-focus:-top-3 peer-focus:text-xs peer-focus:text-indigo-400
                  peer-valid:-top-3 peer-valid:text-xs transition-all
                "
                     >
                        Your Message
                     </label>
                  </div>

                  {/* Button */}
                  <button
                     disabled={loading}
                     className="
                inline-flex items-center gap-2
                border border-indigo-400/40
                px-8 py-3 rounded-full
                hover:bg-indigo-400 hover:text-black
                transition disabled:opacity-50
              "
                  >
                     {loading ? "Sending..." : "Send Message"}
                  </button>

                  {/* Success */}
                  {success && (
                     <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-green-400 text-sm"
                     >
                        Message sent successfully ✔
                     </motion.p>
                  )}
               </form>
            </div>
         </motion.div>
      </section>
   );
};

export default Contact;
