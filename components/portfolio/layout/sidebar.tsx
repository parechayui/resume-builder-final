'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidContact } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa6';
import { FaQuoteLeft, FaUser } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';

export const SideBar = () => {
  const [activeSection, setActiveSection] = useState('#about');

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
    <div className="fixed left-0 top-0 h-full w-64 2xl:w-72 z-50 bg-gray-100  overflow-hidden hidden xl:block border-r-4">
      <div className="flex items-center space-x-3 py-5 border-b-4 pl-4">
        <Image
          src="/profile.png"
          alt="profile"
          width={50}
          height={50}
          className="rounded-full h-10 w-10 object-cover"
        />
        <p className="font-bold text-xl">{'Alex Johnson'}</p>
      </div>

      <div className="flex h-full flex-col space-y-6 mt-8">
        {sideBarLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`flex items-center gap-3 py-2.5 pl-8 mr-8 rounded-r-full transition-all duration-500 ${activeSection === link.href ? 'bg-[#1C64F2] text-white' : 'hover:bg-blue-100'}`}
            onClick={() => setActiveSection(link.href)}
          >
            {React.cloneElement(link.icon, {
              color: activeSection === link.href ? 'white' : 'gray',
            })}
            <span className={`font-bold text-lg`}>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
