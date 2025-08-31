import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);
  setSubmitMessage('');

  try {
    const response = await fetch('http://localhost/messages.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }).toString(),
    });

    console.log("server response:", response);

    const result = await response.json();

    if (result.success) {
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    }
  } catch (error) {
    console.error(error);
    setSubmitMessage('Server error. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black relative">
      <div className="max-w-6xl mx-auto px-5">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/3 border border-white/10 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">Ready To Transform Your Business?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Have an idea for a project? Let's discuss your vision and turn it into reality.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <span className="block text-sm text-gray-400 uppercase tracking-wider">Email</span>
                  <span className="text-white font-medium">mario@example.com</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <span className="block text-sm text-gray-400 uppercase tracking-wider">Phone</span>
                  <span className="text-white font-medium">+1 (555) 123-4567</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <span className="block text-sm text-gray-400 uppercase tracking-wider">Location</span>
                  <span className="text-white font-medium">New York, USA</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:transform hover:-translate-y-1 transition-all duration-300">📘</a>
                <a href="#" className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:transform hover:-translate-y-1 transition-all duration-300">🐦</a>
                <a href="#" className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:transform hover:-translate-y-1 transition-all duration-300">💼</a>
                <a href="#" className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:transform hover:-translate-y-1 transition-all duration-300">📷</a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:shadow-lg transition-all duration-300 ${
                    errors.name ? 'border-red-500 focus:border-red-500 focus:shadow-red-500/10' : 'border-white/10 focus:border-blue-500 focus:shadow-blue-500/10'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && <span className="text-red-400 text-sm mt-2 block">{errors.name}</span>}
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:shadow-lg transition-all duration-300 ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:shadow-red-500/10' : 'border-white/10 focus:border-blue-500 focus:shadow-blue-500/10'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <span className="text-red-400 text-sm mt-2 block">{errors.email}</span>}
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:shadow-lg transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500 focus:border-red-500 focus:shadow-red-500/10' : 'border-white/10 focus:border-blue-500 focus:shadow-blue-500/10'
                  }`}
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && <span className="text-red-400 text-sm mt-2 block">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:transform hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className={`p-4 rounded-lg font-medium text-center ${
                  submitMessage.includes('error') 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
