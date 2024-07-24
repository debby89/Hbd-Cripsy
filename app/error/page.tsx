"use client";
import { Snowfall } from "react-snowfall";

const Home = () => {
    return (
        <div className="relative h-screen " style={{ backgroundColor: "black" }}>
            <Snowfall />
            <div className="flex items-center justify-center text-white p-10">
                <h1 className="text-3xl font-bold text-red-500">404 Error</h1>
            </div>

            <audio className='mx-auto block w-48 text-white p-15' autoPlay loop controls>
                <source src="audio/8.mpeg" type="audio/mpeg" />
            </audio>

            <div className="flex items-center justify-center text-white p-10">
                <h1 className="text-3xl font-bold">Steez Maintained 😂 </h1>
            </div>

            <div className="flex justify-center">
                <img
                    src="assets/39.jpeg"
                    className="rounded-full p-10 max-w-1/2 w-full md:max-w-none md:w-auto"
                />
            </div>



            <div className="flex items-center justify-center p-5">
                <p>Try another name 🤣 </p>
            </div>

            {/* button */}
            <div className="flex justify-center items-center space-x-4">
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
