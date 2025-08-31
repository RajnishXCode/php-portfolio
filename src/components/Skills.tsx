import React from 'react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, 
  SiPython, SiMongodb, SiPostgresql, SiDocker, SiAmazon, 
  SiGit, SiFigma 
} from 'react-icons/si';
import skillsData from '../data/skills.json';

const iconMap = {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs,
  SiPython, SiMongodb, SiPostgresql, SiDocker, SiAmazonaws: SiAmazon,
  SiGit, SiFigma
};

const Skills: React.FC = () => {

  const duplicatedTechStack = [...skillsData.techStack, ...skillsData.techStack];

  return (
    <>
      <section id="skills" className="py-16 bg-gray-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-5 text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{skillsData.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{skillsData.subtitle}</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left gap-8 py-8">
            {duplicatedTechStack.map((tech, index) => {
              const IconComponent = iconMap[tech.icon as keyof typeof iconMap];
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex flex-col items-center justify-center min-w-[120px] bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 border border-gray-800"
                >
                  {IconComponent && (
                    <IconComponent 
                      size={40} 
                      style={{ color: tech.color }} 
                      className="mb-3"
                    />
                  )}
                  <span className="text-white text-sm font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </>
  );
};

export default Skills;
