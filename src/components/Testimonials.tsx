import React from 'react';
import {FaStar } from 'react-icons/fa';
import testimonialsData from '../data/testimonials.json';
import { IoIosArrowDown } from "react-icons/io";

const Testimonials: React.FC = () => {
  const testimonials = testimonialsData.testimonials;


  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{testimonialsData.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{testimonialsData.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonialsData.stats.map((stat, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>        

      

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={16} />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                "{testimonial.review}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-600 group-hover:border-blue-500 transition-colors duration-300"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face';
                  }}
                />
                <div>
                  <div className="text-white font-medium text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.position}</div>
                  <div className="text-blue-400 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center'>
          <div className='flex justify-center items-center gap-2 bg-gray-900/50 rounded-lg p-2 my-5 hover:scale-105 transition-transform duration-300'>
            Show more reviews
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
