import React from 'react';
import { motion } from 'framer-motion';
import { 
  SEO,
  PageHeader, 
  SectionContainer,
  ContactForm,
  ContactMethod
} from '../components/shared';
import { fadeInUp, staggerChildren } from '../components/shared/animations';
import { siteMetadata, faqs } from '../data/siteData';

const ContactPage = () => {
  const handleSubmit = async (formData) => {
    // In a real app, you would handle the form submission here
    console.log('Form submitted:', formData);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  };

  return (
    <>
      <SEO 
        title="Contact"
        description={`Get in touch with ${siteMetadata.author} to discuss your instructional design needs`}
        keywords={[
          'contact instructional designer',
          'hire learning designer',
          'instructional design services',
          'learning solutions consultation'
        ]}
      />
      <div className="min-h-screen">
        <PageHeader
          title="Contact Me"
          subtitle="Let's discuss how we can work together to create amazing learning experiences"
        />

        <SectionContainer className="py-20">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              variants={staggerChildren}
              className="space-y-8"
            >
              <motion.h2 
                className="text-2xl font-bold text-text-primary"
                variants={fadeInUp}
              >
                Get in Touch
              </motion.h2>
              
              <ContactMethod
                icon="Mail"
                title="Email"
                content={siteMetadata.contactInfo.email}
                link={`mailto:${siteMetadata.contactInfo.email}`}
              />
              
              <ContactMethod
                icon="Phone"
                title="Phone"
                content={siteMetadata.contactInfo.phone}
                link={`tel:${siteMetadata.contactInfo.phone.replace(/\D/g,'')}`}
              />
              
              <ContactMethod
                icon="Linkedin"
                title="LinkedIn"
                content={siteMetadata.contactInfo.linkedin}
                link={`https://${siteMetadata.contactInfo.linkedin}`}
              />

              <ContactMethod
                icon="MapPin"
                title="Location"
                content={siteMetadata.contactInfo.location}
              />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Send a Message
              </h2>
              <ContactForm onSubmit={handleSubmit} />
            </motion.div>
          </div>
        </SectionContainer>

        {/* FAQ Section */}
        <SectionContainer className="py-20 bg-background">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-3xl font-bold text-text-primary mb-12 text-center"
              variants={fadeInUp}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="grid gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="font-semibold text-text-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionContainer>
      </div>
    </>
  );
};

export default ContactPage;