import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import SkillsSection from "@/components/skills-section"
import PortfolioSection from "@/components/portfolio-section"
import SocialCausesSection from "@/components/social-causes-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import {
  getHeroSection,
  getAboutSection,
  getExperiences,
  getEducation,
  getSkills,
  getProjects,
  getSocialCauses,
  getContactInfo,
} from "@/lib/sanity"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const [heroData, aboutData, experiencesData, educationData, skillsData, projectsData, socialCausesData, contactData] =
    await Promise.all([
      getHeroSection(),
      getAboutSection(),
      getExperiences(),
      getEducation(),
      getSkills(),
      getProjects(),
      getSocialCauses(),
      getContactInfo(),
    ])

  return (
    <div className="min-h-screen bg-[#faf8f5] overflow-x-hidden">
      <Header />
      <main>
        <HeroSection data={heroData} />
        <AboutSection data={aboutData} />
        <ExperienceSection data={experiencesData} />
        <EducationSection data={educationData} />
        <SkillsSection data={skillsData} />
        <PortfolioSection data={projectsData} />
        <SocialCausesSection data={socialCausesData} />
        <ContactSection data={contactData} />
      </main>
      <Footer />
    </div>
  )
}
