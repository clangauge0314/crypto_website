import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const hasScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const heroSection = document.getElementById("hero-section");
      const triggerHeight = heroSection?.offsetHeight
        ? heroSection.offsetHeight * 0.1
        : window.innerHeight * 0.1;

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      id="hero-section"
      className="hero-container text-white h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="hero-title text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg">
        {t("hero.title")}
      </h1>
      <p className="hero-subtitle text-lg sm:text-xl md:text-xl max-w-4xl drop-shadow-md text-center break-words hyphens-auto mx-auto">
        {t("hero.subtitle")}
      </p>
      <Link
        to="table-section"
        smooth={true}
        duration={500}
        className="mt-8 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 cursor-pointer"
      >
        {t("hero.button")}
      </Link>
    </motion.div>
  );
};

export default Hero;
