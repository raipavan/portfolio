import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg rounded-full px-6 py-2">
      <div className="flex items-center justify-between max-w-6xl mx-auto gap-6">
        {/* <h1 className="text-lg font-bold text-gray-900 dark:text-white">
        
        </h1> */}
        <ul className="hidden md:flex gap-4 text-gray-700 dark:text-gray-200 font-medium">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600">Achievements</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
