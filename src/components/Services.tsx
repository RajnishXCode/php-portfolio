import React from 'react';
import servicesData from '../data/services.json';
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuAward } from "react-icons/lu";
import { HiPaintBrush } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{servicesData.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{servicesData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-gray-600/30 rounded-lg flex items-center justify-center mb-6">
              <CiGlobe size={20}/>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
            
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              <span className="text-blue-400 font-semibold">SEO-ready websites</span> that load in under 2 seconds and drive <span className="text-blue-400 font-semibold">40% more leads</span>
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3">
                <IoIosArrowRoundForward className="text-blue-400 text-lg" />
                <span className="text-gray-300 text-sm">98/100 PageSpeed score</span>
              </div>
              <div className="flex items-center gap-3">
                <IoIosArrowRoundForward className="text-blue-400 text-lg" />
                <span className="text-gray-300 text-sm">Mobile-first responsive design</span>
              </div>
              <div className="flex items-center gap-3">
                <IoIosArrowRoundForward className="text-blue-400 text-lg" />
                <span className="text-gray-300 text-sm">Conversion-optimized layouts</span>
              </div>
            </div>

            <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition-colors duration-300">
              Learn More <IoIosArrowRoundForward className="text-lg" />
            </button>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-gray-600/30 rounded-lg flex items-center justify-center mb-6">
              <HiPaintBrush size={20} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">UI/UX Design</h3>
            
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              <span className="text-blue-400 font-semibold">User-centered designs</span> that increase engagement by <span className="text-blue-400 font-semibold">35%</span> and reduce bounce rates by <span className="text-blue-400 font-semibold">40%</span>
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3">
                <IoIosArrowRoundForward className="text-blue-400 text-lg" />
                <span className="text-gray-300 text-sm">Data-driven design decisions</span>
              </div>
              <div className="flex items-center gap-3">
                <IoIosArrowRoundForward className="text-blue-400 text-lg" />
                <span className="text-gray-300 text-sm">Intuitive user journeys</span>
              </div>
              <div className="flex items-center gap-3">
                <IoIosArrowRoundForward className="text-blue-400 text-lg" />
                <span className="text-gray-300 text-sm">A/B tested interfaces</span>
              </div>
            </div>

            <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition-colors duration-300">
              Learn More <IoIosArrowRoundForward className="text-lg" />
            </button>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-gray-600/30 rounded-lg flex items-center justify-center mb-6">
              <LuAward size={20} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">SaaS Development</h3>
            
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              <span className="text-blue-400 font-semibold">End-to-end SaaS solutions</span> that reduce operational costs by <span className="text-blue-400 font-semibold">25%</span> and scale with your business
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3">
                <IoIosArrowRoundForward className="text-blue-400 text-lg" />
                <span className="text-gray-300 text-sm">Scalable architecture</span>
              </div>
              <div className="flex items-center gap-3">
                <IoIosArrowRoundForward className="text-blue-400 text-lg" />
                <span className="text-gray-300 text-sm">99.9% uptime guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <IoIosArrowRoundForward className="text-blue-400 text-lg" />
                <span className="text-gray-300 text-sm">Secure data handling</span>
              </div>
            </div>

            <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition-colors duration-300">
              Learn More <IoIosArrowRoundForward className="text-lg" />
            </button>
          </div>
        </div>

        <div className="p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">{servicesData.cta.title}</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{servicesData.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2">
              {servicesData.cta.buttonText} <IoIosArrowRoundForward size={30}  />
            </button>
          </div>
          <p className="text-gray-400 mt-6">{servicesData.cta.bottomline}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
