import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="p-12 flex justify-center">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-4">Skills</h2>
        
        <h3 className="text-3xl font-semibold mb-2">Technical Skills</h3>
        <ul className="text-xl text-left space-y-2">
          <li>Packet Tracer</li>
          <li>Basic Network Configuration</li>
          <li>Routing Protocols</li>
        </ul>

        <h3 className="text-3xl font-semibold mt-6 mb-2">Soft Skills</h3>
        <ul className="text-xl text-left space-y-2">
          <li>Problem Solving</li>
          <li>Team Collaboration</li>
        </ul>
      </div>
    </section>
  );
}
