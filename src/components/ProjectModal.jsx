import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg max-w-2xl w-full p-6 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 text-2xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {project.title}
        </h2>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg mb-4 w-full"
          />
        )}

        {project.video && (
          <div className="mb-4 aspect-video">
            <iframe
              src={project.video}
              title={project.title}
              className="w-full h-full rounded-lg"
              allowFullScreen
            />
          </div>
        )}

        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            View Project
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}
