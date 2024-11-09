
// src/pages/resumes/InstructionalDesignResume.tsx
const InstructionalDesignResume = () => {
  const resumeData = {
    title: "Instructional Design Resume",
    subtitle: "Learning Experience Designer & Educational Technology Specialist",
    summary: `Innovative instructional designer with a focus on creating engaging, 
    effective learning experiences. Skilled in educational technology and curriculum development.`,
    downloadUrl: "/documents/Instructional Design Resume.docx",
    experience: [
      // Add instructional design experience
    ],
    skills: [
      {
        category: "Design Tools",
        skills: ["Articulate Storyline", "Adobe Captivate", "Camtasia"]
      },
      {
        category: "LMS Platforms",
        skills: ["Canvas", "Moodle", "Blackboard"]
      },
      // Add more skills
    ]
  };

  return (
    <BasePage
      seo={{
        title: "Instructional Design Resume",
        description: "My experience in instructional design and e-learning"
      }}
    >
      <ResumeTemplate {...resumeData} />
    </BasePage>
  );
};
