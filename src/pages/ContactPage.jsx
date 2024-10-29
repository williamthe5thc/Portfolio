// src/pages/ContactPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  SEO,
  PageHeader, 
  SectionContainer,
  ContactForm,
  ContactMethod
} from '../components/shared';
import { 
  ResponsiveContainer,
  ResponsiveGrid,
  ResponsiveText,
  BaseCard 
} from '../components/ui/components';
import { fadeInUp, staggerContainer, staggerChildren } from '../components/shared/animations';
import { siteMetadata, faqs } from '../data/siteData';

const ContactPage = () => {
  const handleSubmit = async (formData) => {
    console.log('Form submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  };

  return (
    <>
      <SEO 
        title="Contact"
        description={`Get in touch with ${siteMetadata.author} to discuss your instructional design needs`}
      />
      <div className="min-h-screen">
        <PageHeader
          title="Contact Me"
          subtitle="Let's discuss how we can work together to create amazing learning experiences"
        />

        <SectionContainer className="py-20">
          <ResponsiveContainer>
            <ResponsiveGrid
              cols={{ default: 1, md: 2 }}
              gap="gap-12"
              className="max-w-6xl mx-auto"
            >
              {/* Contact Info */}
              <motion.div
                variants={staggerChildren}
                className="space-y-8"
              >
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold text-text-primary animate-fade-in"
                  variants={fadeInUp}
                >
                  Get in Touch
                </motion.h2>
                
                <div className="space-y-6">
                  <ContactMethod
                    icon="Mail"
                    title="Email"
                    content={siteMetadata.contactInfo.email}
                    link={`mailto:${siteMetadata.contactInfo.email}`}
                    className="min-h-touch"
                  />
                  
                  <ContactMethod
                    icon="Phone"
                    title="Phone"
                    content={siteMetadata.contactInfo.phone}
                    link={`tel:${siteMetadata.contactInfo.phone.replace(/\D/g,'')}`}
                    className="min-h-touch"
                  />
                  
                  <ContactMethod
                    icon="Linkedin"
                    title="LinkedIn"
                    content={siteMetadata.contactInfo.linkedin}
                    link={`https://${siteMetadata.contactInfo.linkedin}`}
                    className="min-h-touch"
                  />

                  <ContactMethod
                    icon="MapPin"
                    title="Location"
                    content={siteMetadata.contactInfo.location}
                    className="min-h-touch"
                  />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                variants={fadeInUp}
                className="animate-slide-up"
              >
                <BaseCard className="shadow-lg">
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Send a Message
                  </h2>
                  <ContactForm 
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    inputClassName="min-h-touch"
                  />
                </BaseCard>
              </motion.div>
            </ResponsiveGrid>
          </ResponsiveContainer>
        </SectionContainer>

        {/* FAQ Section */}
        <SectionContainer className="py-20 bg-background">
          <ResponsiveContainer>
            <motion.div
              className="max-w-4xl mx-auto"
              variants={staggerChildren}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-text-primary mb-12 text-center animate-fade-in"
                variants={fadeInUp}
              >
                Frequently Asked Questions
              </motion.h2>
              <div className="grid gap-8">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="animate-slide-up"
                  >
                    <BaseCard className="transition-shadow duration-300 hover:shadow-lg">
                      <h3 className="font-semibold text-text-primary mb-2 text-lg md:text-xl">
                        {faq.question}
                      </h3>
                      <p className="text-text-secondary prose">
                        {faq.answer}
                      </p>
                    </BaseCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ResponsiveContainer>
        </SectionContainer>
      </div>
    </>
  );
};

export default ContactPage;