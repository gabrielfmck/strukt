// src/components/layout/Footer.tsx
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Sobre o Strukt</h2>
            <p className="text-gray-400">
              Strukt é uma plataforma de aprendizado interativo para programação, com foco em algoritmos e estruturas de dados.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/learn" className="text-gray-400 hover:text-white transition-colors">
                  Aprender
                </a>
              </li>
              <li>
                <a href="/practice" className="text-gray-400 hover:text-white transition-colors">
                  Praticar
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Siga-nos</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/gabrielfmck"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://twitter.com/gabrielfmck"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/gabrielfernandesj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Strukt. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
