import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import footerData from '../data/footer.json';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Footer: React.FC = () => {
  const socialIcons = {
    LinkedIn: FaLinkedin,
    GitHub: FaGithub,
    Twitter: FaTwitter,
    Email: FaEnvelope
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{footerData.quickLinks.title}</h3>
            <p className='text-gray-400 text-sm'>Let's create your next big idea.</p>
            <div className="bg-blue-500/20 py-2 px-4 rounded-md w-fit my-4 flex items-center gap-2">
              Get in Touch <IoIosArrowRoundForward size={30} />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{footerData.services.title}</h3>
            <ul className="space-y-3">
              {footerData.services.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{footerData.tools.title}</h3>
            <ul className="space-y-3">
              {footerData.tools.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{footerData.connect.title}</h3>
            <ul className="space-y-3">
              {footerData.connect.links.map((link, index) => {
                const IconComponent = socialIcons[link.name as keyof typeof socialIcons];
                return (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {IconComponent && <IconComponent size={18} />}
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">{footerData.copyright}</p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Contact:</span>
              <a 
                href={`mailto:${footerData.contactEmail}`}
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
              >
                {footerData.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
