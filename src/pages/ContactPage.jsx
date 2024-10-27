import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Section } from '../components/ui';
import {
  SEO,
  PageHeader,
  PageLayout,
  SectionContainer,
  fadeInUp,
  staggerChildren
} from '../components/shared';
import { ContactMethod, ContactForm } from '../components/contact';
import { contact, siteMetadata } from '../data/siteData';

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

  return (
    <PageLayout>
      <SEO 
        title="Contact Me"
        description="Get in touch with W. Jordan Charles for instructional design opportunities and collaborations"
      />

      <PageHeader
        title="Get in Touch"
        subtitle="I'm always interested in discussing new opportunities and collaborations 
        in instructional design and educational technology."
      />

      <Section dark={true}>
        <SectionContainer className="max-w-4xl">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {/* Contact Methods */}
            <motion.div variants={fadeInUp}>
              <Card className="p-8 h-full">
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {Object.values(contact).map((method, index) => (
                    <ContactMethod
                      key={method.title}
                      icon={method.icon}
                      title={method.title}
                      content={method.content}
                      link={method.link}
                      color={
                        method.icon === "Linkedin" ? "text-[#0077b5]" :
                        method.icon === "Mail" ? "text-primary-600" :
                        method.icon === "MapPin" ? "text-accent-red" :
                        "text-accent-green"
                      }
                    />
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card className="p-8 h-full">
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Send a Message
                </h2>
                
                <ContactForm
                  onSubmit={handleSubmit}
                  status={status}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  formData={formData}
                />
              </Card>
            </motion.div>
          </motion.div>
        </SectionContainer>
      </Section>
    </PageLayout>
  );
};

export default ContactPage;