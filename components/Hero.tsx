'use client';
import React from 'react';
import { WavyBackground } from './wavy-background';

function Hero() {
  return (
    <WavyBackground
      speed="fast"
      waveOpacity={0.5}
      waveWidth={100}
      className="max-w-4xl mx-auto pb-40">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-4xl md:text-4xl lg:text-7xl text-white font-extrabold inter-var">
          Fernando Arturo Valerio
        </p>
        <p className="text-2xl md:text-4xl mt-4 text-white font-semibold inter-var">
          Software Engineer
        </p>
      </div>
    </WavyBackground>
  );
}

export default Hero;
