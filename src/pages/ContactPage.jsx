import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SectionHeader } from '../components/EnhancedComponents';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const errors = validateForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setStatus('sending');

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTouched({});
        
        setTimeout(() => setStatus(''), 3000);
      } catch (error) {
        console.error('Failed to send message:', error);
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } else {
      setTouched({
        name: true,
        email: true,
        message: true
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "williamthe5thc@gmail.com",
      link: "mailto:williamthe5thc@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "linkedin.com/in/jordan-charles",
      link: "https://linkedin.com/in/jordan-charles",
      color: "text-[#0077b5]"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Provo, Utah (Open to remote, or relocation)",
      color: "text-red-600"
    },
    {
      icon: Clock,
      title: "Availability",
      content: "Open to internship, part-time, or contract opportunities",
      color: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section */}
      <motion.section 
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Get in Touch"
            subtitle="I'm always interested in discussing new opportunities and collaborations 
            in instructional design and educational technology."
          />
        </div>
      </motion.section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={info.title}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <info.icon className={`w-6 h-6 ${info.color} mt-1`} />
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      {info.link ? (
                        <motion.a 
                          href={info.link} 
                          className={`${info.color} hover:opacity-80`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {info.content}
                        </motion.a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    className={`w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500 
                      ${touched.name && errors.name ? 'border-red-500' : ''}`}
                  />
                  {touched.name && errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    className={`w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500
                      ${touched.email && errors.email ? 'border-red-500' : ''}`}
                  />
                  {touched.email && errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    className={`w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500
                      ${touched.message && errors.message ? 'border-red-500' : ''}`}
                  />
                  {touched.message && errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>
                
                <AnimatePresence>
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-3 rounded-lg ${
                        status === 'success' ? 'bg-green-100 text-green-700' :
                        status === 'error' ? 'bg-red-100 text-red-700' :
                        'bg-blue-100 text-blue-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {status === 'success' ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : status === 'error' ? (
                          <AlertCircle className="w-5 h-5" />
                        ) : (
                          <div className="animate-spin">
                            <Send className="w-5 h-5" />
                          </div>
                        )}
                        <span>
                          {status === 'sending' ? 'Sending...' :
                           status === 'success' ? 'Message sent successfully!' :
                           'Failed to send message. Please try again.'}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors
                    ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;