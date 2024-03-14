'use client';
import React from 'react';
import Image from 'next/image';
import miniIcons from '/public/images/mainIcons.svg';

export function Skills() {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row justify-items-center align-middle md:px-40">
      <div className="w-full md:w-1/2 lg:h-full flex md:items-center md:justify-center mb-8 md:mb-0">
        <h2 className="text-4xl md:text-8xl text-white font-bold text-center lg:text-start">
          Elevating{' '}
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-transparent bg-clip-text">
            project excellence
          </span>{' '}
          <br className="hidden md:block" />
          to stellar heights
        </h2>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
        <Image
          width={600}
          height={600}
          src={miniIcons.src}
          alt="mini icons"
        />
      </div>
    </div>
  );
}
