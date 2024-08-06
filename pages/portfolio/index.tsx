import { globalData } from 'Utils/data';
import { ContactForm } from '@/components/portfolio/contactForm';
import { Education } from '@/components/portfolio/education';
import { Skills } from '@/components/portfolio/skills';
import { Testimonials } from '@/components/portfolio/testimonials';
import { WorkExperience } from '@/components/portfolio/experience';
import { ProfileSection } from '@/components/portfolio/profileSection';
import { SideBar } from '@/components/portfolio/layout/sidebar';
import { NavBar } from '@/components/portfolio/layout/navbar';

export default function Home() {
  return (
    <div className="bg-[#f3f4f6]">
      <NavBar />
      <section className="flex justify-between">
        <SideBar />
        <div className="xl:ml-64 2xl:ml-72 xl:flex-1 xl:p-8 overflow-y-auto">
          <ProfileSection {...globalData.profile} />
          <WorkExperience experiences={globalData.workExperiences} />
          <Education educations={globalData.education} />
          <Skills skills={globalData.skills} />
          <Testimonials testimonials={globalData.testimonials} />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
