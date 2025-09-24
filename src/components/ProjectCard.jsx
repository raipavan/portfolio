import { motion } from "framer-motion";

export default function ProjectCard({ title, description, category, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-2 transition transform"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
        {category}
      </span>
      <h3 className="text-xl font-semibold mt-3 mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{description}</p>
    </motion.div>
  );
}
