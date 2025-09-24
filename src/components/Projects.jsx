import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projectData = [
  {
    title: "IoT Network Optimization",
    category: "IoT",
    description: "Optimized IoT network with device monitoring and bandwidth allocation.",
    image: "/images/iot.png",
    link: "#",
  },
  {
    title: "Malpractice Detection in Exams",
    category: "AI",
    description: "Used YOLOv5 model to detect cheating during offline exams.",
    image: "/images/exam.png",
    link: "#",
  },
  {
    title: "Health Challenge Tracker SPA",
    category: "Web App",
    description: "Angular SPA for tracking workouts and displaying charts.",
    image: "/images/health.png",
    link: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Projects</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
