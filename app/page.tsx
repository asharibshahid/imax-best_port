import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import Hero from "./hero";
import WorkSection from "./projects/page";
import SkillSection from "./services/page";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon from react-icons

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPage />
      <SkillSection />
      <WorkSection />
      <ContactPage />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/250788689522"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
}
