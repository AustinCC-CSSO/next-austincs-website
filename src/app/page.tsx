'use client';
// pages/index.js
import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';


export default function Home() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY + window.innerHeight;
      const opacity = Math.max(0, Math.min(1, (currentScroll - totalScrollHeight * 0.66) / (totalScrollHeight * 0.33)));
      setOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="gradient-background">
      <Navbar />
      <div className="skyline-image" style={{ opacity }}>
        {/* <Image src={skylineImage} alt="Austin Skyline" layout="fill" objectFit="cover" /> */}
      </div>
    </div>
  );
}



// import Image from 'next/image'
// export default function Home() {
//   return (
//     <main className="flex-col min-h-screen items-center">
//       <nav className=" flex items-center justify-between w-full p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//         <Image src="/logo.svg" alt="Logo" width={180} height={37} priority />
//         <div className="flex items-center space-x-4">
//           <a href="#" className="text-white hover:text-gray-200">Home</a>
//           <a href="#" className="text-white hover:text-gray-200">About</a>
//           <a href="#" className="text-white hover:text-gray-200">Contact</a>
//         </div>
//       </nav>

//       <section className="relative h-screen flex items-center justify-center px-4">
//         <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 opacity-80"></div>
//         <div className="relative z-10 text-center text-white">
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Austin CS Club</h1>
//           <p className="text-lg md:text-2xl lg:text-2xl">Explore the exciting world of computer science in the heart of Texas!</p>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 flex justify-center">
//           <Image src="/austin-skyline.svg" alt="Austin Skyline" width={1200} height={300} />
//         </div>
//         <div className="absolute top-20 left-20 animate-pulse">
//           <Image src="/bat.svg" alt="Bat" width={100} height={100} />
//         </div>
//         <div className="absolute top-40 right-20 animate-pulse">
//           <Image src="/bat.svg" alt="Bat" width={80} height={80} />
//         </div>
//       </section>

//       <section className="max-w-5xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4">About Us</h2>
//           <p>The Austin CS Club is a vibrant community of computer science enthusiasts...</p>
//         </div>
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
//           <ul>
//             <li>Hackathon: July 15-16, 2023</li>
//             <li>Tech Talk: August 5, 2023</li>
//           </ul>
//         </div>
//       </section>



//       {/* Existing content */}
//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         {/* Existing links */}
//       </div>
//     </main >
//   )
// }
