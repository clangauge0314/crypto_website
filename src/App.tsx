import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Loading from './Components/Loading/Loading';
import Hero from './Components/Hero/Hero';
import MiningPerformanceTable from './Components/MiningPerformanceTable/MiningPerformanceTable';

function App() {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const savedLang = localStorage.getItem('i18nextLng');
        if (savedLang) {
          await i18n.changeLanguage(savedLang);
        }
      } catch (error) {
        console.error('Language initialization failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, [i18n]);

  useEffect(() => {
    const handleLanguageChanged = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 250);
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  const Home = () => (
    <div
      className={`min-h-screen flex flex-col bg-gradient-to-r from-[#0a0011] via-[#150726] to-[#1f0942] text-white transition-opacity duration-300 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MiningPerformanceTable />
      </main>
    </div>
  );

  return (
    <BrowserRouter>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
