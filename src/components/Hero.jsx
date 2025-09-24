import { motion } from "framer-motion";
import Bubbles3D from "./Bubbles3D";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen w-full animated-gradient text-white overflow-hidden">
      
      {/* 3D bubbles background */}
      <Bubbles3D />

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Pavan 👋
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A Full-Stack Developer & AI Enthusiast
        </motion.p>

        <motion.a
          href="#projects"
          className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-md hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>

        {/* Social icons at bottom */}
        <div className="flex gap-6 mt-10 text-2xl">
          <a
            href="https://www.linkedin.com/in/pavankumar-rai/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your.raipavan503@gmail.com"
            className="hover:text-red-500 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/raipavan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
