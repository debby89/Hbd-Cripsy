"use client";

import React, { useEffect } from "react";
import Snowfall from "../snow/page";
import Image from 'next/image';

const Pages = () => {
  useEffect(() => {
    const audioElements = document.querySelectorAll('audio');

    const handlePlay = (event: Event) => {
      audioElements.forEach(otherAudio => {
        if (otherAudio !== event.target) {
          otherAudio.pause();
        }
      });
    };

    audioElements.forEach(audio => {
      audio.addEventListener('play', handlePlay);
    });

    return () => {
      audioElements.forEach(audio => {
        audio.removeEventListener('play', handlePlay);
      });
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Snowfall />

      <div className="flex items-center justify-center text-white p-10">
        <h1 className="text-2xl md:text-4xl font-bold">Happy Birthday Cripsy 🌹</h1>
      </div>

      <div className='flex justify-center'>
        <Image
          src="/assets/4.jpeg"
          alt="Birthday celebration"
          className='rounded-full p-10 w-full md:w-auto lg:max-w-md'
          width={500}
          height={500}
        />
      </div>

      <div className="flex items-center justify-center font-bold p-10 text-center">
        <p className="text-lg md:text-xl lg:text-2xl">Your voice sends shivers down my spine</p>
      </div>

      <div className="flex flex-col items-center space-y-4 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-4">
        <audio className='w-68 text-white p-15' controls>
          <source src="/audio/6.mp3" type="audio/mpeg" />
        </audio>
        <audio className='w-68 text-white p-15' controls>
          <source src="/audio/7.mp3" type="audio/mpeg" />
        </audio>
        <audio className='w-68 text-white p-15' controls>
          <source src="/audio/3.ogg" type="audio/ogg" />
        </audio>
      </div>

      <div className="flex justify-center items-center space-x-4 p-10">
        <a href="/error">
          <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-red-400">
            Credit Alert 😉
          </button>
        </a>
      </div>

      <div className='flex items-center justify-center p-5'>
        <p className="text-lg md:text-xl lg:text-2xl">Try another name</p>
      </div>

      <div className="flex justify-center items-center space-x-4 p-5">
        <a href="/">
          <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-red-400">Sucre🖤</button>
        </a>
        <a href="/Teddy">
          <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-blue-400">Teddy🖤</button>
        </a>
        <a href="/Wifey">
          <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-red-400">Wifey🖤</button>
        </a>
      </div>
    </div>
  );
};

export default Pages;
