import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Python", level: 85 },
  { name: "AI / Machine Learning", level: 80 },
  { name: "PHP(codegniter)", level: 75 },
  { name: "Javascript", level: 70 },
  { name: "SQL / Databases", level: 80 },
  { name: "Node js", level: 65 },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-lg font-medium text-gray-900 dark:text-white">
                {skill.name}
              </span>
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                {skill.level}%
              </span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <motion.div
                className="h-3 rounded-full bg-blue-600"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
