import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const hasScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const triggerHeight = window.innerHeight * 0.1;

      if (scrollHeight > triggerHeight && !hasScrolled.current) {
        hasScrolled.current = true;
        const nextSection = document.getElementById("table-section");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }

      if (scrollHeight < triggerHeight) {
        hasScrolled.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="hero-container text-white h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="hero-title text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg">
        Welcome to Our Website
      </h1>
      <p className="hero-subtitle text-lg sm:text-xl md:text-2xl max-w-3xl drop-shadow-md">
        We are glad to have you here. Explore and enjoy our content! Dive into a
        world of creativity and possibilities.
      </p>
      <Link
        to="table-section"
        smooth={true}
        duration={500}
        className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 cursor-pointer"
      >
        Get Started
      </Link>
    </motion.div>
  );
};

export default Hero;
