export interface ProfileProps {
  name: string;
  tag: string;
  desc: string;
  image: string;
  stat: {
    value: string;
    label: string;
  }[];
}

export interface WorkExperienceItemProps {
  title: string;
  company: string;
  location: string;
  date: string;
  metrics: {
    value: string;
    label: string;
    button: string;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
}

export interface Skill {
  id: number;
  logo: string;
  experience: string;
  keyFeatures: string[];
  result: string;
}

export interface Testimonial {
  id: number;
  image: string;
  name: string;
  country: string;
  desc: string;
}

export interface PortfolioData {
  profile: ProfileProps;
  workExperiences: WorkExperienceItemProps[];
  education: Education[];
  skills: Skill[];
  testimonials: Testimonial[];
}
