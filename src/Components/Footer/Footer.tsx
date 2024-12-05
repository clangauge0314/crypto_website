import { FaGithub, FaDiscord, FaTelegram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gradient-to-r from-[#0a0011] via-[#150726] to-[#1f0942] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mining Calculator</h3>
            <p className="text-gray-300">
              {t('footer.description', 'Cryptocurrency mining calculator and information platform')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks', 'Quick Links')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  {t('footer.terms', 'Terms of Service')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  {t('footer.privacy', 'Privacy Policy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  {t('footer.contact', 'Contact Us')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.followUs', 'Follow Us')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <FaDiscord size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <FaTelegram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mining Calculator. {t('footer.rights', 'All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
