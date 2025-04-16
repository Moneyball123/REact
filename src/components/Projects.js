import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="p-12 px-32 flex justify-center">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-4">Projects</h2>
        <ul className="text-left space-y-4 text-xl">
          <li>
            <h3 className="text-2xl font-semibold">DHCP Server Configuration and Basic LAN Setup</h3>
            <p>
              In this project, I designed a basic LAN using Cisco Packet Tracer, connecting multiple PCs to a 
              switch and assigning IP addresses manually or via DHCP. I configured a router as a DHCP server to
              automate IP allocation, ensuring devices could obtain addresses dynamically. Connectivity was tested
              using the `ping` command, and IP assignments were verified with `ipconfig`. This project 
              enhanced my understanding of LAN setup, DHCP, and network troubleshooting, providing practical 
              experience in fundamental networking concepts.
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold">Network Address Translation (NAT) Configuration</h3>
            <p>
              I configured Network Address Translation (NAT) on a router to enable devices in a
              private network to access the internet. Using Cisco Packet Tracer, I connected a router to a switch and
              multiple PCs in a private network, then added a simulated "internet" cloud to represent the public 
              network. After configuring NAT on the router, I tested connectivity from the private network to the public 
              network, ensuring seamless communication. This project deepened my understanding of NAT, private
              vs. public IP addresses, and router configuration, providing hands-on experience in enabling secure internet access 
              for private networks.
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold">Inter-VLAN Routing Configuration</h3>
            <p>
              I configured inter-VLAN routing to enable communication between devices in different VLANs. Using Cisco 
              Packet Tracer, I created multiple VLANs on a switch and assigned PCs to each VLAN. I then configured a 
              router with sub-interfaces for each VLAN (Router-on-a-Stick) and tested connectivity between PCs in different
              VLANs. This project enhanced my understanding of VLANs, trunking, and inter-VLAN routing, providing hands-on 
              experience in managing segmented networks and ensuring seamless communication across VLANs.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
