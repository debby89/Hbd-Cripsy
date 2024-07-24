"use client";

import Snowfall from "./snow/page";
import Image from 'next/image';

const Home = () => {
  return (
    <div className="relative h-screen bg-black">

      <Snowfall />
      
      <div className="flex items-center justify-center text-white p-10">
        <h1 className="text-3xl font-bold">Welcome Teddy 😊</h1>
      </div>

      <audio className='mx-auto block w-48 text-white p-15' autoPlay loop controls>
        <source src="audio/1.mpeg" type="audio/mpeg" />
      </audio>

      <div className='flex items-center justify-center text-white p-5'>
        <p>Play or Halt music</p>
      </div>

      <div className='flex justify-center'>
        <Image
          src="/assets/2.jpeg"
          alt="Welcome Image"
          className='rounded-full p-10'
          width={500}
          height={500}
        />
      </div>

      <div className='flex items-center justify-center text-white p-5'>
        <p className='font-bold'>How would you prefer to be addressed? 🙃</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center space-x-4 p-5">
        <a href="/Cripsy">
          <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-red-400">Cripsy🖤</button>
        </a>
        <a href="/Teddy">
          <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-blue-400">Teddy🖤</button>
        </a>
        <a href="/Wifey">
          <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-pink-400">Wifey🖤</button>
        </a>
      </div>
    </div>
  );
};

export default Home;

