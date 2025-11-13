import React from 'react';


export default function FeatureCard({ title, text, icon }) {
return (
<div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border shadow-sm">
<div className="text-4xl mb-3">{icon}</div>
<h5 className="font-bold">{title}</h5>
<p className="text-sm text-[#666] mt-2">{text}</p>
</div>
);
}