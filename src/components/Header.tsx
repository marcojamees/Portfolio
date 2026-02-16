import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </motion.div>

        <ul className="hidden md:flex space-x-8">
          {["sobre", "habilidades", "projetos", "experiencia", "contato"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
              className="cursor-pointer capitalize smooth-transition text-foreground/80 hover:text-foreground"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("contato")}
          className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-full smooth-transition hover:glow-effect"
        >
          Contato
        </motion.button>
      </nav>
    </motion.header>
  );
};

export default Header;
