import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        () => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-semibold"
        >
          Send Message
        </button>
        {status && <p className="text-center mt-2 text-green-500">{status}</p>}
      </form>
    </section>
  );
}
