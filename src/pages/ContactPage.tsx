// src/pages/ContactPage.tsx
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/features/contact/ContactForm';
import { ContactMethod, BaseCard } from '@/components/ui';
import {SectionContainer} from '@/components/layout';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { siteConfig, faqs } from '@/content';
import BasePage from './BasePage';

const ContactPage: React.FC = () => {
  // Contact Information Section
  const ContactInfoSection = () => (
    <motion.div
      variants={staggerContainer}
      className="space-y-8"
    >
      <motion.h2 
        className="text-3xl font-bold text-text-primary"
        variants={fadeInUp}
      >
        Get in Touch
      </motion.h2>
      
      <div className="space-y-6">
        <ContactMethod
          icon="Mail"
          title="Email"
          content={siteConfig.contactInfo.email}
          link={`mailto:${siteConfig.contactInfo.email}`}
        />
        
        <ContactMethod
          icon="Phone"
          title="Phone"
          content={siteConfig.contactInfo.phone}
          link={`tel:${siteConfig.contactInfo.phone.replace(/\D/g,'')}`}
        />
        
        <ContactMethod
          icon="Linkedin"
          title="LinkedIn"
          content={siteConfig.contactInfo.linkedin}
          link={`https://${siteConfig.contactInfo.linkedin}`}
        />

        <ContactMethod
          icon="MapPin"
          title="Location"
          content={siteConfig.contactInfo.location}
        />
      </div>
    </motion.div>
  );

  // Contact Form Section
  const ContactFormSection = () => (
    <motion.div
      variants={fadeInUp}
      className="animate-slide-up"
    >
      <BaseCard>
        <h2 className="text-2xl font-bold text-text-primary mb-6">
          Send a Message
        </h2>
        <ContactForm />
      </BaseCard>
    </motion.div>
  );

  // FAQ Section
  const FAQSection = () => (
    <SectionContainer className="py-20" tinted>
      <motion.div
        className="max-w-4xl mx-auto"
        variants={staggerContainer}
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
            >
              <BaseCard>
                <h3 className="font-semibold text-text-primary mb-2 text-xl">
                  {faq.question}
                </h3>
                <p className="text-text-secondary">
                  {faq.answer}
                </p>
              </BaseCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );

  // App wraps every route in the one PageTransition that animates.
  return (
    <BasePage
      seo={{
        title: "Contact",
        description: `Get in touch with ${siteConfig.author} to discuss your instructional design needs`
      }}
      title="Let's Connect"
      subtitle="Interested in discussing how I can contribute to your instructional design team? I'd love to learn more about your projects and share my passion for evidence-based learning design."
      className="bg-background-light"
    >
      <div className="py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactInfoSection />
          <ContactFormSection />
        </div>
      </div>
      <FAQSection />
    </BasePage>
  );
};

export default ContactPage;