// src/content/professional-philosophy.ts

export interface ProfessionalPhilosophy {
  title: string;
  subtitle: string;
  introduction: string;
  principles: {
    title: string;
    description: string;
    application: string;
  }[];
  methodology: {
    phase: string;
    description: string;
    tools: string[];
  }[];
  uniqueValue: string;
}

export const professionalPhilosophy: ProfessionalPhilosophy = {
  title: "Evidence-Based Learning Technology Design",
  subtitle: "Bridging Behavioral Science and Instructional Innovation",
  introduction: "My approach to instructional design uniquely combines rigorous psychological research foundations with innovative learning technology solutions. Drawing from extensive research experience and hands-on technical development, I create data-driven learning experiences that not only engage learners but drive measurable behavior change and business results.",
  
  principles: [
    {
      title: "Evidence-Based Decision Making",
      description: "Every design decision is grounded in learning science research and validated through systematic analysis.",
      application: "Applied comprehensive needs analysis and learner research to inform FiCEP curriculum redesign, ensuring solutions address real-world financial wellness challenges faced by credit union members."
    },
    {
      title: "Technology-Enhanced Learning",
      description: "Strategic integration of learning technology to scale effective instructional design while maintaining human-centered experiences.",
      application: "Developed automated content processing systems at NACVA that reduced deployment time by 85% while preserving quality and enabling SME focus on instructional excellence."
    },
    {
      title: "Behavior Change Focus",
      description: "Learning experiences designed with clear pathways from knowledge acquisition to sustainable behavior change.",
      application: "Created spaced learning mobile application applying behavioral psychology principles to support habit formation and long-term retention in professional development contexts."
    },
    {
      title: "Inclusive Design Principles",
      description: "Universal design for learning ensuring accessible, engaging experiences for diverse learner populations.",
      application: "Implemented WCAG 2.1 AA compliance standards in financial literacy curriculum, creating inclusive learning experiences for credit union members with varying abilities and backgrounds."
    }
  ],

  methodology: [
    {
      phase: "Research & Analysis",
      description: "Systematic investigation of learner needs, organizational context, and performance gaps using research methodology",
      tools: ["Learner Interviews", "Needs Analysis Surveys", "Performance Gap Analysis", "Stakeholder Consultation", "Literature Review"]
    },
    {
      phase: "Evidence-Based Design", 
      description: "Application of learning theory and behavioral science to create targeted instructional solutions",
      tools: ["ADDIE Framework", "Adult Learning Theory", "Cognitive Load Principles", "Motivation Theory", "Assessment Design"]
    },
    {
      phase: "Technology Integration",
      description: "Strategic implementation of learning technology to enhance effectiveness and scalability",
      tools: ["Learning Management Systems", "Automation Development", "Interactive Media", "Mobile Learning", "Learning Analytics"]
    },
    {
      phase: "Iterative Development",
      description: "Agile approach enabling rapid prototyping, testing, and refinement based on learner feedback",
      tools: ["Agile Methodology", "Rapid Prototyping", "User Testing", "Feedback Integration", "Continuous Improvement"]
    },
    {
      phase: "Evaluation & Optimization",
      description: "Systematic measurement of learning outcomes and business impact with data-driven optimization",
      tools: ["Learning Analytics", "Behavior Change Metrics", "Performance Assessment", "ROI Analysis", "Longitudinal Studies"]
    }
  ],

  uniqueValue: "The intersection of rigorous research methodology, innovative technology development, and human-centered design principles enables me to create learning solutions that are both scientifically sound and practically effective. This unique combination allows me to bridge the gap between learning theory and real-world application, delivering measurable results that drive both individual growth and organizational success."
};

export default professionalPhilosophy;