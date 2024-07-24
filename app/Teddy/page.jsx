// "use client";

// import React, { useEffect } from "react";
// import Snowfall from "../snow/page";
// import Image from 'next/image';

// const Pages = () => {
//   useEffect(() => {
//     const videos = document.querySelectorAll("video");
//     videos.forEach((video) => {
//       video.addEventListener("play", () => {
//         videos.forEach((v) => {
//           if (v !== video) {
//             v.pause();
//           }
//         });
//       });
//     });
//   }, []);

//   return (
//     <div className="bg-gray-900 min-h-screen">
//       <Snowfall />

//       <div className="flex items-center justify-center text-white p-10">
//         <h1 className="text-2xl md:text-4xl font-bold">
//           Happy Birthday Teddy 🌹
//         </h1>
//       </div>

//       <div className="flex justify-center">
//         <Image
//           src="/assets/1.jpeg"
//           alt="Birthday celebration"
//           className="rounded-full p-10 w-full md:w-auto lg:max-w-md"
//           width={500}
//           height={500}
//         />
//       </div>

//       <div className="flex items-center justify-center font-bold p-10 text-center">
//         <p className="text-lg md:text-xl lg:text-2xl">
//           Tune in for a dose of happiness! 📸
//         </p>
//       </div>

//       {/* Videos */}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 bg-gray-900">
//         <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg p-4">
//           <video className="w-full max-w-md max-h-64 rounded-lg" controls>
//             <source src="/video/1.mp4" type="video/mp4" />
//           </video>
//           <p className="text-white mt-4 text-lg text-center">
//             Forever my Beautiful Barrister🖤
//           </p>
//         </div>
//         <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg p-4">
//           <video className="w-full w-4xl max-h-64 rounded-lg" controls>
//             <source src="/video/2.mp4" type="video/mp4" />
//           </video>
//           <p className="text-white mt-4 text-lg text-center">
//             Your dance sweep me off my feet! 💎
//           </p>
//         </div>
//         <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg p-4">
//           <video className="w-full max-w-2xl max-h-64 rounded-lg" controls>
//             <source src="/video/3.mp4" type="video/mp4" />
//           </video>
//           <p className="text-white mt-4 text-lg text-center">
//             Your smile illuminates my day💋
//           </p>
//         </div>
//       </div>

//       <div className="flex items-center justify-center p-5">
//         <p className="text-lg md:text-xl lg:text-2xl">Try another name</p>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-center items-center space-x-4 p-5">
//         <a href="/Cripsy">
//           <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-red-400">
//             Cripsy🖤
//           </button>
//         </a>
//         <a href="/Wifey">
//           <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-blue-400">
//             Wifey🖤
//           </button>
//         </a>
//         <a href="/">
//           <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-red-400">
//             Sucre🖤
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Pages;
"use client";

import React, { useEffect } from "react";
import Snowfall from "../snow/page";
import Image from 'next/image';

const Pages = () => {
  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.addEventListener("play", () => {
        videos.forEach((v) => {
          if (v !== video) {
            v.pause();
          }
        });
      });
    });

    return () => {
      videos.forEach((video) => {
        video.removeEventListener("play", () => {
          videos.forEach((v) => {
            if (v !== video) {
              v.pause();
            }
          });
        });
      });
    };
  }, []); // No dependencies required here

  return (
    <div className="bg-gray-900 min-h-screen">
      <Snowfall />

      <div className="flex items-center justify-center text-white p-10">
        <h1 className="text-2xl md:text-4xl font-bold">
          Happy Birthday Teddy 🌹
        </h1>
      </div>

      <div className="flex justify-center">
        <Image
          src="/assets/1.jpeg"
          alt="Birthday celebration"
          className="rounded-full p-10 w-full md:w-auto lg:max-w-md"
          width={500}
          height={500}
        />
      </div>

      <div className="flex items-center justify-center font-bold p-10 text-center">
        <p className="text-lg md:text-xl lg:text-2xl">
          Tune in for a dose of happiness! 📸
        </p>
      </div>

      {/* Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 bg-gray-900">
        <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg p-4">
          <video className="w-full max-w-md max-h-64 rounded-lg" controls>
            <source src="/video/1.mp4" type="video/mp4" />
          </video>
          <p className="text-white mt-4 text-lg text-center">
            Forever my Beautiful Barrister🖤
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg p-4">
          <video className="w-full max-w-md max-h-64 rounded-lg" controls>
            <source src="/video/2.mp4" type="video/mp4" />
          </video>
          <p className="text-white mt-4 text-lg text-center">
            Your dance sweeps me off my feet! 💎
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg p-4">
          <video className="w-full max-w-md max-h-64 rounded-lg" controls>
            <source src="/video/3.mp4" type="video/mp4" />
          </video>
          <p className="text-white mt-4 text-lg text-center">
            Your smile illuminates my day💋
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-5">
        <p className="text-lg md:text-xl lg:text-2xl">Try another name</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center space-x-4 p-5">
        <a href="/Cripsy" aria-label="Navigate to Cripsy">
          <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-red-400">
            Cripsy🖤
          </button>
        </a>
        <a href="/Wifey" aria-label="Navigate to Wifey">
          <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-blue-400">
            Wifey🖤
          </button>
        </a>
        <a href="/" aria-label="Navigate to Sucre">
          <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-red-400">
            Sucre🖤
          </button>
        </a>
      </div>
    </div>
  );
};

export default Pages;
