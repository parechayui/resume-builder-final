import Image from 'next/image';
import { ProfileProps } from 'types/portfolio';

export const ProfileSection = ({
  name,
  tag,
  desc,
  image,
  stat,
}: ProfileProps) => {
  return (
    <div className="px-5 py-8 sm:py-12 container" id="about">
      <div className="flex justify-evenly max-md:flex-col gap-x-4 gap-y-10">
        <div className="flex flex-col gap-8 xl:gap-12 xl:max-w-2xl">
          <div>
            <h1 className="text-7xl sm:text-7xl 3xl:text-8xl">{name}</h1>
            <button className="mt-3 font-bold text-[22px] text-white bg-[#1C64F2] max-w-fit px-4 py-2.5 rounded-lg skew-x-1 xl:skew-x-2 transition duration-300 ease-in-out -rotate-3 xl:-rotate-[4deg] hover:rotate-0 cursor-pointer">
              {tag}
            </button>
          </div>
          <p className="text-[#4B5563] font-semibold sm:text-lg ">{desc}</p>
        </div>
        <div className="shrink-0">
          <Image
            src={image}
            alt="profile image"
            width={360}
            height={450}
            className="h-[362px] rounded-tr-[48px] rounded-bl-[48px] object-cover "
          />
        </div>
      </div>

      <div className="flex max-sm:flex-col max-sm:gap-y-8 justify-evenly items-center flex-wrap shadow rounded bg-white py-5 mt-5 text-center">
        {stat.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <span className="text-[#1C64F2] text-[40px] 2xl:text-5xl">
              {item.value}
            </span>
            <span className="font-semibold text-lg text-[#4B5563]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
