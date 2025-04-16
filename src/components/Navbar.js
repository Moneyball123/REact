import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-end pr-32 space-x-6 p-4 text-2xl">
        <a href="#about" className="hover:text-blue-500">About me</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
    </nav>

  );
}