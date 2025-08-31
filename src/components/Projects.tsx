import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projectsData from '../data/projects.json';

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const projects = projectsData.projects;

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{projectsData.title}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-2">{projectsData.subtitle}</p>
          <p className="text-gray-400">{projectsData.description}</p>
        </div>

        <div className="relative mb-12">
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full mb-4">
                    Featured Project
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].tags.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={projects[currentProject].demoUrl}
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </a>
                  <a
                    href={projects[currentProject].codeUrl}
                    className="flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goToProject(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentProject
                  ? 'border-blue-500 scale-110'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=80&h=80&fit=crop';
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
