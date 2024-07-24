// "use client";

// import { Snowfall } from "react-snowfall";
// import Image from 'next/image';

// const Home = () => {
//     return (
//         <div className="relative h-screen" style={{ backgroundColor: "black" }}>
//             <Snowfall />
//             <div className="flex items-center justify-center text-white p-10">
//                 <h1 className="text-3xl font-bold text-red-500">404 Error</h1>
//             </div>

//             <audio className='mx-auto block w-48 text-white p-15' autoPlay loop>
//                 <source src="audio/8.mpeg" type="audio/mpeg" />
//             </audio>

//             <div className="flex items-center justify-center text-white p-10">
//                 <h1 className="text-3xl font-bold">Steez Maintained 😂</h1>
//             </div>

//             <div className="flex justify-center">
//                 <Image
//                     src="/assets/39.jpeg"
//                     alt="Error Image"
//                     className="rounded-full p-10"
//                     width={500}
//                     height={500}
//                 />
//             </div>

//             <div className="flex items-center justify-center p-5">
//                 <p>Try another name 🤣</p>
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-center items-center space-x-4 p-5">
//                 <a href="/Cripsy">
//                     <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-red-400">
//                         Cripsy🖤
//                     </button>
//                 </a>
//                 <a href="/Teddy">
//                     <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-blue-400">
//                         Teddy🖤
//                     </button>
//                 </a>
//                 <a href="/Wifey">
//                     <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-pink-400">
//                         Wifey🖤
//                     </button>
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Home;

"use client";

import { Snowfall } from "react-snowfall";
import Image from 'next/image';

const Home = () => {
    return (
        <div className="relative h-screen bg-black">
            <Snowfall />

            <div className="flex items-center justify-center text-white p-5">
                <h1 className="text-3xl font-bold text-red-500">404 Error</h1>
            </div>

            {/* Audio Player */}
            <div className="flex items-center justify-center p-2">
                <audio
                    className='mx-auto block w-48 h-20 text-white'
                    autoPlay
                    loop
                    controls
                >
                    <source src="/audio/8.mpeg" type="audio/mpeg" />

                </audio>
            </div>

            <div className="flex items-center justify-center text-white p-4">
                <h1 className="text-3xl font-bold">Steez Maintained 😂</h1>
            </div>

            <div className="flex justify-center">
                <Image
                    src="/assets/39.jpeg"
                    alt="Error Image"
                    className="rounded-full p-10"
                    width={500}
                    height={500}
                />
            </div>

            <div className="flex items-center justify-center p-5">
                <p className="text-white">Try another name 🤣</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center items-center space-x-4 p-5">
                <a href="/Cripsy">
                    <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-red-400">
                        Cripsy🖤
                    </button>
                </a>
                <a href="/Teddy">
                    <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-blue-400">
                        Teddy🖤
                    </button>
                </a>
                <a href="/Wifey">
                    <button className="bg-white rounded-full text-black px-4 py-2 hover:bg-pink-400">
                        Wifey🖤
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Home;
