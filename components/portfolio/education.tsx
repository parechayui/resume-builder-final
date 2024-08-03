import { FaGraduationCap } from 'react-icons/fa6';
import { Education as EducationType } from 'types/portfolio';

interface EducationProps {
  educations: EducationType[];
}

export const Education = ({ educations }: EducationProps) => {
  return (
    <div className="px-5 py-8 xl:py-10 container" id="education">
      <h2 className="text-3xl font-extrabold mb-6">— {'Education'}</h2>

      <div className="flex flex-col sm:flex-row lg:items-center justify-center gap-x-4 gap-y-6 lg:gap-x-12 lg:h-72">
        {educations.map((edu, index) => (
          <div
            key={index}
            className={`bg-white p-8 rounded lg:w-[42%] shadow ${index % 2 !== 0 ? 'lg:self-end' : ''}`}
          >
            <FaGraduationCap color="#1C64F2" size={50} />
            <div className="space-x-1 mt-2">
              <h2 className="font-bold text-lg 2xl:text-xl">{edu.degree}</h2>
              <h3 className="text-sm 2xl:text-base font-semibold">
                {edu.institution}, {edu.location}
              </h3>
              <span>{edu.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
