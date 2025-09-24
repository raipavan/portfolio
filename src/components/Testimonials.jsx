const testimonials = [
  {
    name: "Dr. Smith",
    role: "Professor",
    feedback: "Pavan is a dedicated and innovative developer. His IoT and AI projects are impressive.",
    image: "/images/professor.png",
  },
  {
    name: "IBM Mentor",
    role: "Mentor",
    feedback: "Pavan's work in AI and cloud computing shows great potential and technical skill.",
    image: "/images/ibm.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Achievements</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">{t.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{t.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
