// "use client";

// import React, { useState, useEffect } from "react";
// import Snowfall from "../snow/page";
// import Image from 'next/image';

// const Pages = () => {
//   const images = [
//     "/assets/11.jpeg", "/assets/18.jpeg", "/assets/13.jpeg", "/assets/17.jpeg",
//     "/assets/15.jpeg", "/assets/14.jpeg", "/assets/16.jpeg", "/assets/18.jpeg",
//     "/assets/19.jpeg", "/assets/20.jpeg", "/assets/21.jpeg", "/assets/22.jpeg",
//     "/assets/23.jpeg", "/assets/24.jpeg", "/assets/25.jpeg", "/assets/26.jpeg",
//     "/assets/27.jpeg", "/assets/28.jpeg", "/assets/29.jpeg", "/assets/30.jpeg",
//     "/assets/31.jpeg", "/assets/32.jpeg", "/assets/33.jpeg", "/assets/34.jpeg",
//     "/assets/35.jpeg", "/assets/36.jpeg", "/assets/37.jpeg", "/assets/38.jpeg",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextImage, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-gray-900 min-h-screen">
//       <Snowfall />

//       <div className="flex items-center justify-center text-white p-10">
//         <h1 className="text-2xl font-bold">Happy Birthday Wifey 🌹</h1>
//       </div>

//       <audio className='mx-auto block w-48 text-white p-15' autoPlay loop controls>
//         <source src="/audio/xo.mp3" type="audio/mpeg" />
//         Your browser does not support the audio element.
//       </audio>

//       <div className='flex items-center justify-center text-white p-5'>
//         <p>Halt music</p>
//       </div>

//       <div className='flex justify-center'>
//         <Image
//           src="/assets/2.jpeg"
//           alt="Slide 1"
//           className='rounded-full p-10 w-full md:w-auto lg:max-w-md'
//           width={500}
//           height={500}
//         />
//       </div>

//       <div className="flex items-center justify-center text-white p-5">
//         <h2>Hey pretty 🌹</h2>
//       </div>

//       <div className="flex items-center justify-center text-white p-4">
//         <p>
//           It took me 30 days to find the right words, writing and deleting countless times. It's your birthday, and you should feel incredibly special. Not to sugarcoat things, you've made my life beautiful, transforming seconds into minutes, minutes into hours, hours into days, and days into months, which have finally turned into years.
//           <br /> <br />
//           At one point, I couldn't wait for the days to fast forward to your birthday so I could send you this, while I imagine you blushing as you're reading this... still blushing, right? Lol. I know you are.
//           <br /> <br />
//           You’re incredible, and your smile is pretty. You're smiling right, lol? I could give you a kiss on your forehead and give you a hug just to inhale your fragrance. Lol. I’m turning this into a love message already, lol.
//           <br /> <br />
//           Sorry, I drifted. I’m back. You’re amazing; everything you say makes me interested. Do you have sugar on your tongue? I’m drifting again lol you’re definitely in my head.
//           <br /> <br />
//           On this day, the Lord has made, giving you triple love as a name, I pray He gives you everything you want.
//           <br /> <br />
//           🌹Happy Birthday Barrister🖤
//         </p>
//       </div>

//       <div className="flex items-center justify-center text-white p-5">
//         <h3 className='text-3xl'>SnapStreaks 😉</h3>
//       </div>

//       {/* Slideshow */}
//       <div className="flex justify-center mt-1">
//         <Image
//           src={images[currentImageIndex]}
//           alt={`Slide ${currentImageIndex + 1}`}
//           className='rounded-full p-10 w-full md:w-auto lg:max-w-md'
//           width={500}
//           height={500}
//           style={{ borderRadius: "80px" }}
//         />
//       </div>

//       <div className='flex items-center justify-center p-5'>
//         <p>Try another name</p>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-center items-center space-x-4 p-5">
//         <a href="/Cripsy">
//           <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-red-400">Cripsy🖤</button>
//         </a>
//         <a href="/Teddy">
//           <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-blue-400">Teddy🖤</button>
//         </a>
//         <a href="/">
//           <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-blue-400">Sucre🖤</button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Pages;

"use client";

import React, { useState, useEffect } from "react";
import Snowfall from "../snow/page";
import Image from 'next/image';

const Pages: React.FC = () => {
  const images: string[] = [
    "/assets/11.jpeg", "/assets/18.jpeg", "/assets/13.jpeg", "/assets/17.jpeg",
    "/assets/15.jpeg", "/assets/14.jpeg", "/assets/16.jpeg", "/assets/18.jpeg",
    "/assets/19.jpeg", "/assets/20.jpeg", "/assets/21.jpeg", "/assets/22.jpeg",
    "/assets/23.jpeg", "/assets/24.jpeg", "/assets/25.jpeg", "/assets/26.jpeg",
    "/assets/27.jpeg", "/assets/28.jpeg", "/assets/29.jpeg", "/assets/30.jpeg",
    "/assets/31.jpeg", "/assets/32.jpeg", "/assets/33.jpeg", "/assets/34.jpeg",
    "/assets/35.jpeg", "/assets/36.jpeg", "/assets/37.jpeg", "/assets/38.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 1000);
    return () => clearInterval(interval);
  }, [nextImage]); // Added nextImage to dependency array

  return (
    <div className="bg-gray-900 min-h-screen">
      <Snowfall />

      <div className="flex items-center justify-center text-white p-10">
        <h1 className="text-2xl font-bold">Happy Birthday Wifey 🌹</h1>
      </div>

      <audio className='mx-auto block w-48 text-white p-15' autoPlay loop controls>
        <source src="/audio/xo.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className='flex items-center justify-center text-white p-5'>
        <p>Halt music</p>
      </div>

      <div className='flex justify-center'>
        <Image
          src="/assets/2.jpeg"
          alt="Slide 1"
          className='rounded-full p-10 w-full md:w-auto lg:max-w-md'
          width={500}
          height={500}
        />
      </div>

      <div className="flex items-center justify-center text-white p-5">
        <h2>Hey pretty 🌹</h2>
      </div>

      <div className="flex items-center justify-center text-white p-4">
        <p>
          It took me 30 days to find the right words, writing and deleting countless times. It&apos;s your birthday, and you should feel incredibly special. Not to sugarcoat things, you&apos;ve made my life beautiful, transforming seconds into minutes, minutes into hours, hours into days, and days into months, which have finally turned into years.
          <br /> <br />
          At one point, I couldn&apos;t wait for the days to fast forward to your birthday so I could send you this, while I imagine you blushing as you&apos;re reading this... still blushing, right? Lol. I know you are.
          <br /> <br />
          You’re incredible, and your smile is pretty. You&apos;re smiling right, lol? I could give you a kiss on your forehead and give you a hug just to inhale your fragrance. Lol. I&apos;m turning this into a love message already, lol.
          <br /> <br />
          Sorry, I drifted. I&apos;m back. You&apos;re amazing; everything you say makes me interested. Do you have sugar on your tongue? I&apos;m drifting again lol you&apos;re definitely in my head.
          <br /> <br />
          On this day, the Lord has made, giving you triple love as a name, I pray He gives you everything you want.
          <br /> <br />
          🌹Happy Birthday Barrister🖤
        </p>
      </div>

      <div className="flex items-center justify-center text-white p-5">
        <h3 className='text-3xl'>SnapStreaks 😉</h3>
      </div>

      {/* Slideshow */}
      <div className="flex justify-center mt-1">
        <Image
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className='rounded-full p-10 w-full md:w-auto lg:max-w-md'
          width={500}
          height={500}
          style={{ borderRadius: "80px" }}
        />
      </div>

      <div className='flex items-center justify-center p-5'>
        <p>Try another name</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center space-x-4 p-5">
        <a href="/Cripsy">
          <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-red-400">Cripsy🖤</button>
        </a>
        <a href="/Teddy">
          <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-blue-400">Teddy🖤</button>
        </a>
        <a href="/">
          <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-blue-400">Sucre🖤</button>
        </a>
      </div>
    </div>
  );
};

export default Pages;
