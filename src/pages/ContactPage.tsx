// src/pages/ContactPage.tsx
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/features';
import { ContactMethod, Button, BaseCard } from '@/components/ui';
import {SectionContainer} from '@/components/layout';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { siteConfig } from '@/content';
import BasePage from './BasePage';



interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = async (formData: ContactFormData): Promise<boolean> => {
    try {
      // Implement form submission logic
      console.log('Form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    } catch (error) {
      console.error('Form submission error:', error);
      return false;
    }
  };

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
        <ContactForm onSubmit={handleSubmit} />
      </BaseCard>
    </motion.div>
  );

  

  return (
 
    <BasePage
      seo={{
        title: "Contact",
        description: `Get in touch with ${siteConfig.author} to discuss your instructional design needs`
      }}
      title="Contact Me"
      subtitle="Let's discuss how we can work together to create amazing learning experiences"
      className="bg-background-light"
    >
      <div className="py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactInfoSection />
          <ContactFormSection />
        </div>
      </div>
    </BasePage>
  
  );
};

export default ContactPage;