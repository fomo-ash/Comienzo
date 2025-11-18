// src/components/Footer.jsx
import React from 'react';


export default function Footer() {
return (
<footer className="bg-[#1b1919] text-white py-12">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* 🌟 MESSAGE FOR FRESHERS (6-7 Lines) 🌟 */}
    <div className="max-w-3xl mx-auto mb-10">
        <p className="text-xl italic text-gray-200 leading-relaxed">
            Hi Junos,
            <br/><br/>
            Welcome to the family! We know you're excited, and we're even more thrilled to have you here. College is a journey of discovery, embrace the chaos, chase your passions, and never be afraid to ask for help.
            <br/>
            This party is just the beginning. Make every moment count, and let the good times roll!
        </p>
    </div>

    <div className="border-t border-white/10 pt-8">
        <p className="text-xl font-bold text-yellow-300 mb-2">
            COMIENZO
        </p>
        <p className="text-sm text-gray-300 mb-1">
            We await your presence
        </p>
        {/* 🌟 ADDED CONTACT INFO 🌟 */}
        <p className="text-sm text-gray-300">
            For any queries, contact: <br/>
            Sailen Sahoo (CR): +91 9769544049 <br/>
            Rakshit Mohanty (ACR): +91 8114732140

        </p>
    </div>
  </div>
</footer>
);
}