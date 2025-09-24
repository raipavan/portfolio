export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center">
        I'm a passionate developer skilled in React, Python, and AI projects.
        I love building scalable apps, working with data, and designing seamless user experiences.
      </p>
      <div className="text-center mt-6">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}
