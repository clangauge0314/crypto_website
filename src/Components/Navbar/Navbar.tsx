import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalcMenuOpen, setIsCalcMenuOpen] = useState(false);

  const languages = [
    { code: "en", country: "US", label: "English" },
    { code: "ko", country: "KR", label: "한국어" },
    { code: "ja", country: "JP", label: "日本語" },
    { code: "zh", country: "CN", label: "中文" },
  ];

  const handleSelect = async (langCode: string) => {
    try {
      await i18n.changeLanguage(langCode);
      localStorage.setItem("i18nextLng", langCode);
    } catch (error) {
      console.error("Language change failed:", error);
    }
    setIsOpen(false);
  };

  return (
    <div className="w-full h-16 bg-[#150726]/90 backdrop-blur fixed top-0 left-0 flex items-center justify-between px-4 xl:px-[10%] py-10 shadow-lg border-b border-purple-500/20 z-50">
      <div className="flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-white animate-pulse"
        >
          <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
          <path
            fillRule="evenodd"
            d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-2xl font-bold text-white">{t("nav.logo")}</span>
      </div>

      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="xl:hidden text-white p-2 transition-transform duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div
        className={`xl:hidden absolute top-full left-0 right-0 bg-[#150726] flex-col items-center justify-center text-center gap-6 py-8 border-b border-purple-500/20 shadow-xl transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 flex"
            : "opacity-0 -translate-y-4 hidden"
        }`}
      >
        <a
          href="#"
          className="text-lg text-white hover:text-purple-200 transition-all duration-300 w-full hover:scale-105"
        >
          {t("nav.home")}
        </a>
        <a
          href="#"
          className="text-lg text-white hover:text-purple-200 transition-all duration-300 w-full hover:scale-105"
        >
          {t("nav.about")}
        </a>
        <div className="relative w-full px-8 mb-0">
          <button
            onClick={() => setIsCalcMenuOpen(!isCalcMenuOpen)}
            className="w-full flex items-center justify-center gap-1 text-lg text-white hover:text-purple-200 transition-all duration-300 hover:scale-105"
          >
            {t("nav.calculator")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 transition-transform duration-300 ${
                isCalcMenuOpen ? "rotate-180" : ""
              }`}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`flex flex-col items-center gap-3 w-full mt-0 transition-all duration-300 ease-in-out overflow-hidden ${
              isCalcMenuOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <a
              href="#"
              className="text-white/80 hover:text-purple-200 transition-all duration-300 w-full hover:scale-105 whitespace-nowrap"
            >
              {t("nav.mining_calculator")}
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-purple-200 transition-all duration-300 w-full hover:scale-105 whitespace-nowrap"
            >
              {t("nav.referral_calculator")}
            </a>
          </div>
        </div>
        <a
          href="#"
          className="text-lg text-white hover:text-purple-200 transition-all duration-300 w-full hover:scale-105 mt-0"
        >
          {t("nav.blog")}
        </a>
        <a
          href="#"
          className="text-lg text-white hover:text-purple-200 transition-all duration-300 w-full hover:scale-105"
        >
          {t("nav.contact")}
        </a>

        <div className="w-full px-8 pt-4 border-t border-purple-500/20">
          <div className="flex flex-wrap justify-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transform transition-all duration-300 hover:scale-105 ${
                  i18n.language === lang.code
                    ? "bg-purple-500/20 border-purple-400"
                    : "border-purple-500/30 hover:border-purple-400"
                }`}
              >
                <ReactCountryFlag
                  countryCode={lang.country}
                  svg
                  className="w-5 h-5"
                />
                <span className="text-white">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden xl:flex items-center gap-10 text-lg font-light text-white">
        <a
          href="#"
          className="hover:text-purple-200 transition-colors duration-2000 hover:scale-110 transform"
        >
          {t("nav.home")}
        </a>
        <a
          href="#"
          className="hover:text-purple-200 transition-colors duration-2000 hover:scale-110 transform"
        >
          {t("nav.about")}
        </a>
        <div className="relative group">
          <a
            href="#"
            className="hover:text-purple-200 transition-colors duration-2000 hover:scale-110 transform flex items-center gap-1"
          >
            {t("nav.calculator")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 transition-transform duration-2000 group-hover:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-2000 ease-in-out transform group-hover:translate-y-0 translate-y-[-10px] top-full left-0 mt-2 bg-[#150726]/90 backdrop-blur rounded-lg shadow-lg border border-purple-500/20 w-48">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-purple-500/10 hover:text-purple-200 transition-colors duration-2000"
            >
              {t("nav.mining_calculator")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-purple-500/10 hover:text-purple-200 transition-colors duration-2000"
            >
              {t("nav.referral_calculator")}
            </a>
          </div>
        </div>
        <a
          href="#"
          className="hover:text-purple-200 transition-colors duration-2000 hover:scale-110 transform"
        >
          {t("nav.blog")}
        </a>
        <a
          href="#"
          className="hover:text-purple-200 transition-colors duration-2000 hover:scale-110 transform"
        >
          {t("nav.contact")}
        </a>
      </div>

      <div className="hidden xl:flex items-center">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="appearance-none w-44 pl-10 pr-12 py-2.5 bg-[#150726] border border-white text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 hover:border-purple-300 transition-all cursor-pointer font-medium flex items-center gap-2 shadow-[0_0_10px_rgba(168,85,247,0.15)]"
          >
            <div className="flex items-center gap-2">
              <ReactCountryFlag
                countryCode={
                  languages.find((lang) => lang.code === i18n.language)
                    ?.country || "US"
                }
                svg
                className="w-5 h-5"
              />
              <span>
                {languages.find((lang) => lang.code === i18n.language)?.label ||
                  "English"}
              </span>
            </div>
          </button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-full bg-[#150726] border border-purple-300/40 rounded-lg shadow-lg">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`flex items-center gap-2 px-4 py-2 hover:bg-purple-500/10 cursor-pointer text-white ${
                    i18n.language === lang.code ? "bg-purple-500/20" : ""
                  } whitespace-nowrap`}
                >
                  <ReactCountryFlag
                    countryCode={lang.country}
                    svg
                    className="w-5 h-5"
                  />
                  <span>{lang.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
