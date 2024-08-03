import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { Testimonial } from 'types/portfolio';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <div className="container px-5 py-8 xl:py-12" id="testimonials">
      <h2 className="text-3xl font-extrabold mb-6">— {'Testimonials'}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center place-content-center gap-4">
        {testimonials.map((testimonial) => (
          <div
            className="bg-white max-w-[300px] p-7 space-y-5 rounded-lg shadow"
            key={testimonial.id}
          >
            <FaQuoteLeft color="#1C64F2" size={44} />

            <div className="flex gap-3 items-center">
              <Image
                src={testimonial.image}
                alt="testimonial profile image"
                width={50}
                height={50}
                className="h-12 w-12 rounded-full object-cover "
              />
              <div>
                <h2 className="font-bold text-lg 2xl:text-xl">
                  {testimonial.name}
                </h2>
                <span className="text-sm text-[#4B5563] font-medium">
                  {testimonial.country}{' '}
                </span>
              </div>
            </div>
            <p className=" text-sm font-medium text-pretty opacity-80 text-[#000F2D]">
              {testimonial.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
