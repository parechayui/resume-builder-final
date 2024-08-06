'use client';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { BiSolidContact } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa6';
import { FaQuoteLeft, FaUser } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import Link from 'next/link';

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const sideBarLinks = [
    {
      id: 1,
      icon: <FaUser color="gray" size={25} />,
      label: 'About',
      href: '#about',
    },
    {
      id: 2,
      icon: <MdWork color="gray" size={26} />,
      label: 'Work',
      href: '#work',
    },
    {
      id: 3,
      icon: <FaGraduationCap color="gray" size={26} />,
      label: 'Education',
      href: '#education',
    },
    {
      id: 4,
      icon: <GiSkills color="gray" size={25} />,
      label: 'Skills',
      href: '#skills',
    },
    {
      id: 5,
      icon: <FaQuoteLeft color="gray" size={24} />,
      label: 'Testimonials',
      href: '#testimonials',
    },
    {
      id: 6,
      icon: <BiSolidContact color="gray" size={25} />,
      label: 'Contact',
      href: '#contact',
    },
  ];

  return (
    <div className="container  p-5 sm:py-6 border-b shadow block xl:hidden relative">
      <div className="flex items-center space-x-7 ">
        {open ? (
          <button onClick={() => setOpen(false)} className="text-2xl">
            <AiOutlineClose />
          </button>
        ) : (
          <button onClick={() => setOpen(true)} className="text-2xl">
            <AiOutlineMenu />
          </button>
        )}

        <div className="flex items-center gap-3">
          <Image
            src="/profile.png"
            alt="profile"
            width={50}
            height={50}
            className="rounded-full h-[3.2rem] w-[3.2rem]"
          />
          <p className="font-bold text-xl">{'Alex Johnson'}</p>
        </div>
      </div>
      <div
        className={`fixed top-20 left-0 h-full w-full z-50 bg-[#f3f4f6] shadow-lg transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-5">
          <div className="flex h-full flex-col space-y-6  mt-5">
            {sideBarLinks.map((link) => (
              <Link
                onClick={() => setOpen(false)}
                key={link.id}
                href={link.href}
                className="flex items-center gap-4  py-2.5 pl-8 mr-8 rounded-r-full text-whit"
              >
                {link.icon}
                <span className={`font-bold text-lg`}>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
