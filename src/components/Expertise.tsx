import type React from "react";
import expertiseData from "../data/expertise.json";

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-2 mb-4 text-blue-400 text-sm bg-white/10 rounded-full py-2 px-4 w-fit">
            Our Expertise
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {expertiseData.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {expertiseData.subtitle}
          </p>
        </div>

        <div className="mb-16 flex justify-center">
          <div className="w-1/2 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">💻</span>
                Coding In Progress...
              </h3>
              <span className="text-blue-400 font-semibold">100%</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full w-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-4">Design Phase</h4>
                <div className="space-y-3">
                  {[
                    "User Research",
                    "Wireframing",
                    "UI Design",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-white text-xs">✓</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-500/10 p-4 rounded-lg border border-2 border-blue-500/20">
                <h4 className="text-white font-semibold mb-4">
                  Development Phase
                </h4>
                <div className="space-y-3">
                  {["Frontend", "Backend", "Testing"].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-white text-xs">✓</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <span className="text-blue-500 text-md font-bold flex items-center justify-center gap-2">
                Project Successfully Completed! 🎉
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Strategy & Planning
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Increase ROI by 35% with strategic planning and custom
                development that aligns with your business goals.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Market Research",
                "User Analysis",
                "Competitive Analysis",
                "ROI Planning",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                UI/UX Design
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Boost conversions by 40% with user-centered design that
                transforms visitors into customers.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "User Research",
                "Wireframing",
                "Prototyping",
                "Design Systems",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚗️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Development</h3>
              <p className="text-gray-300 text-sm mb-4">
                Achieve 98/100 PageSpeed scores with modern technologies and
                performance optimization.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "React/Next.js",
                "Node.js",
                "TypeScript",
                "API Development",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🗄️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Database Architecture
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Reduce query times by 60% with robust database design and
                implementation for scalable applications.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Schema Design",
                "Data Modeling",
                "Query Optimization",
                "Migration Strategy",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Security & Performance
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Protect user data with enterprise-grade security measures and
                99.9% uptime guarantee.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Security Audit",
                "Performance Testing",
                "Load Balancing",
                "Caching Strategy",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                AI Integration
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Automate 60% of manual tasks with AI solutions that enhance user
                experiences and business operations.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "AI/ML Integration",
                "Natural Language",
                "Computer Vision",
                "Predictive Analytics",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Our Development Process</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Discovery & Strategy</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    <span className="text-green-400 font-semibold">35% more effective</span> project outcomes through comprehensive research and planning
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Design & Prototyping</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    <span className="text-green-400 font-semibold">40% higher engagement</span> with user-tested interfaces and interactive prototypes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Development & Testing</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    <span className="text-green-400 font-semibold">98/100 PageSpeed scores</span> through optimized code and rigorous testing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Launch & Support</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    <span className="text-green-400 font-semibold">99.9% uptime</span> with continuous monitoring and proactive maintenance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Technologies We Use</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-4">Frontend</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">React & Next.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">Framer Motion</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-4">Backend</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">Node.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">GraphQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">Redis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
