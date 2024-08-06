import Image from 'next/image';
import React from 'react';
import { WorkExperienceItemProps } from 'types/portfolio';

interface WorkExperienceProps {
  experiences: WorkExperienceItemProps[];
}

const MetricItem = ({
  value,
  label,
  button,
}: {
  value: string;
  label: string;
  button: string;
}) => (
  <div className="text-center py-6">
    <p className="text-3xl font-bold text-[#1C64F2]">{value}</p>
    <p className="text-sm font-semibold text-[#4B5563] mb-2">{label}</p>
    <button className="px-3 py-1 bg-[#1C64F2] text-white text-xs rounded-full max-sm:hidden">
      {button}
    </button>
  </div>
);

const WorkExperienceItem = ({
  title,
  company,
  location,
  date,
  metrics,
}: WorkExperienceItemProps) => (
  <div className="bg-white rounded-lg shadow-md max-sm:p-10 p-8 mb-6">
    <div className="flex max-sm:flex-col max-sm:text-center  items-center mb-2">
      <div className="w-12 h-12 mr-3">
        <Image
          src="/work-experience.png"
          alt=""
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="space-y-px max-sm:mt-3">
        <h3 className="font-bold text-[#000F2D] text-xl">{title}</h3>
        <p className="font-semibold text-sm text-[#4B5563] max-sm:mt-1">
          {company}, {location} | {date}
        </p>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 sm:gap-4 mb-4 xl:px-8 2xl:px-16 xl:mt-7">
      {metrics.slice(0, 2).map((metric, index) => (
        <MetricItem key={index} {...metric} />
      ))}
    </div>
    <div className="grid sm:grid-cols-3 sm:gap-4 xl:px-8 xl:mt-4">
      {metrics.slice(2, 5).map((metric, index) => (
        <MetricItem key={index + 3} {...metric} />
      ))}
    </div>
  </div>
);

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <div className="px-5 py-8 xl:py-12 container" id="work">
      <h2 className="text-3xl font-extrabold mb-6">— {'Work Experience'}</h2>
      {experiences.map((exp, index) => (
        <WorkExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
};
