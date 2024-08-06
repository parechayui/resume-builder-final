import Image from 'next/image';
import { Skill } from 'types/portfolio';

interface SkillsProps {
  skills: Skill[];
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="container px-5 py-8 xl:py-12" id="skills">
      <h2 className="text-3xl font-extrabold mb-6">— {'Skills'}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {skills.map((skill) => (
          <div
            className="space-y-6 max-w-xs bg-white p-10 rounded-md shadow"
            key={skill.id}
          >
            <Image
              src={skill.logo}
              alt="skills image"
              width={140}
              height={40}
              className="object-cover"
            />

            <div className="space-y-0.5">
              <p className="text-gray-500 font-bold text-sm sm:text-base">
                {' EXPERIENCE'}
              </p>
              <h3 className="2xl:text-lg font-bold ">{skill.experience}</h3>
            </div>

            <div className="space-y-0.5">
              <h3 className="text-sm sm:text-base font-bold text-gray-500">
                {'KEY FEATURES'}
              </h3>
              <div className="flex flex-wrap gap-2 py-1">
                {skill.keyFeatures.map((feature, idx) => (
                  <p
                    key={idx}
                    className="text-xs font-semibold bg-[#C3DDFD] w-fit rounded-full p-2 "
                  >
                    {feature}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-0.5">
              <h3 className="text-sm sm:text-base font-bold text-gray-500">
                RESULT
              </h3>
              <p className="font-bold">{skill.result}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
