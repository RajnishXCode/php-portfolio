import React from "react";
import heroData from "../data/hero.json";
import { FiLinkedin } from "react-icons/fi";
import { MdArrowOutward, MdOutlineArrowForward } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LuAward } from "react-icons/lu";
import { HiPaintBrush } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";
import { BsTrophy } from "react-icons/bs";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-blue-400 font-medium bg-white/10 rounded-full py-2 px-4 w-fit">
              ● Available for Project
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
              {heroData.subtitle}
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="flex justify-center items-center gap-5 bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300">
                {heroData.buttons.primary}
                <MdArrowOutward size={25} />
              </button>
              <button className="flex justify-center items-center gap-5 border border-blue-500 text-blue-500 px-8 py-4 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300">
                {heroData.buttons.secondary}
                <MdOutlineArrowForward size={25} />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="badge bg-blue-500/20 text-blue-500"><FiLinkedin /> LinkedIn</div>
              <div className="badge bg-blue-500/20 text-blue-500"><SlCalender /> Book a Free UX Audit</div>
              <div className="badge bg-yellow-500/20 text-yellow-500"><BsTrophy /> Awwwards</div>
              <div className="badge bg-blue-500/20 text-blue-500"><CiGlobe /> Google Business</div>
              <div className="badge bg-orange-500/20 text-orange-500"><HiPaintBrush /> Design Rush</div>
              <div className="badge bg-pink-500/20 text-pink-500"><LuAward /> Dribble</div>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <div className="relative">
              <div className="w-80 h-96 relative">
                <img
                  src={heroData.profileImage}
                  alt={heroData.profileImageAlt}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    if (target.nextSibling) {
                      (target.nextSibling as HTMLElement).style.display =
                        "flex";
                    }
                  }}
                />
                <div
                  className="w-full h-full rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-4xl font-bold text-blue-400"
                  style={{ display: "none" }}
                >
                  {heroData.name}
                </div>
              </div>

              <div className="absolute top-60 -right-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-white text-sm font-medium">
                  Trusted by 50+ clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
