import React, { useState } from 'react';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import profileImg from '../assets/profile.png';

export default function About() {
  const [showContacts, setShowContacts] = useState(false);

  const handleShowContacts = () => setShowContacts(!showContacts);

  return (
    <section id="about" className="flex items-center justify-center px-12 py-10 gap-x-16">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold mb-4">Hi, I’m <span className="text-black">ASHLEY BOURNE DALUYEN</span></h1>
        <p className="text-3xl leading-relaxed">
          I am a second year B.S.I.T. student from the University of the Cordilleras. I am majoring in Network and Security.
          I’m deeply interested in IT networking and enjoy working with network infrastructure and systems.
        </p>
        <button onClick={handleShowContacts} className="mt-6 px-4 py-2 bg-black text-white rounded-full">Get in Touch</button>
        
        
        {showContacts && (
          <div className="flex gap-4 mt-4 text-2xl">
            <FaGoogle className="hover:text-red-500 cursor-pointer" />
            <FaMicrosoft className="hover:text-blue-500 cursor-pointer" />
          </div>
        )}
        
        
      </div>
      <img src={profileImg} alt="Ashley Daluyen" className="w-[500px] relative -top-[150px] rounded-xl" />
    </section>
  );
}
