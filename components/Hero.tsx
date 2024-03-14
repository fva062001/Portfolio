'use client';
import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <div className="max-w-4xl">
      <div className="w-screen h-screen relative">
        <Spline scene="https://prod.spline.design/24Z8TLkywvVn68oY/scene.splinecode" />
        <div
          className="flex flex-col justify-center items-center w-full absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-10"
          id="header">
          <p className="text-4xl md:text-4xl lg:text-7xl text-white font-extrabold inter-var text-center">
            Fernando Arturo Valerio
          </p>
          <p className="text-2xl md:text-4xl mt-4 text-white font-semibold inter-var text-center">
            Software Engineer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;