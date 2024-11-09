
// src/pages/resumes/AcademicResume.tsx
const AcademicResume = () => {
  const resumeData = {
    title: "Academic Resume",
    subtitle: "Researcher & Academic Professional",
    summary: `Academic professional with research experience in psychology and educational technology. 
    Focus on empirical research and evidence-based learning methodologies.`,
    downloadUrl: "/documents/Academic Resume.docx",
    experience: [
      // Add academic & research experience
    ],
    education: [
      // Add detailed education history
    ],
    publications: [
      // Add any publications or research papers
    ],
    skills: [
      {
        category: "Research Methods",
        skills: ["Qualitative Analysis", "Statistical Analysis", "Research Design"]
      },
      {
        category: "Academic Tools",
        skills: ["SPSS", "R", "Research Paper Writing"]
      }
    ]
  };

  return (
    <BasePage
      seo={{
        title: "Academic Resume",
        description: "My academic background and research experience"
      }}
    >
      <ResumeTemplate {...resumeData} />
    </BasePage>
  );
};