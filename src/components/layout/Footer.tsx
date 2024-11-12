import React from 'react';
import { FaGithub, FaXTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { useTheme } from '../../contexts/theme/ThemeContext';
import { useLocation } from 'react-router-dom';


const Footer: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const isDark = theme === 'dark';
  const isHome = location.pathname === '/';

  const baseStyles = {
    bg: isHome 
      ? 'bg-gray-900' 
      : isDark ? 'bg-gray-800' : 'bg-gray-900',
    border: isHome
      ? 'border-gray-800'
      : isDark ? 'border-gray-700' : 'border-gray-800',
    text: isDark ? 'text-gray-300' : 'text-white',
    subtext: isDark ? 'text-gray-400' : 'text-gray-400',
    hover: isDark ? 'hover:text-white' : 'hover:text-white',
  };

  return (
    <footer className={`${baseStyles.bg} ${baseStyles.text} py-8 transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className={`text-xl font-semibold mb-4 ${baseStyles.text}`}>Sobre o Strukt</h2>
            <p className={baseStyles.subtext}>
              Strukt é uma plataforma de aprendizado interativo para programação, com foco em algoritmos e estruturas de dados.
            </p>
          </div>
          <div>
            <h2 className={`text-xl font-semibold mb-4 ${baseStyles.text}`}>Links</h2>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "Sobre" },
                { href: "/learn", label: "Aprender" },
                { href: "/practice", label: "Praticar" }
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className={`${baseStyles.subtext} ${baseStyles.hover} transition-colors`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={`text-xl font-semibold mb-4 ${baseStyles.text}`}>Contato</h2>
            <div className="flex space-x-4">
              {[
                { href: "mailto:gabrielfernandes0625@gmail.com", icon: <FaEnvelope size={24} />, label: "Email" },
                { href: "https://www.linkedin.com/in/gabrielfernandesj", icon: <FaLinkedin size={24} />, label: "LinkedIn" },
                { href: "https://github.com/gabrielfmck", icon: <FaGithub size={24} />, label: "GitHub" },
                { href: "https://x.com/strukt", icon: <FaXTwitter size={24} />, label: "Twitter" }
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`${baseStyles.subtext} ${baseStyles.hover} transition-colors transform hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={`mt-8 border-t ${baseStyles.border} pt-8 text-center ${baseStyles.subtext}`}>
          &copy; {new Date().getFullYear()} Strukt. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;