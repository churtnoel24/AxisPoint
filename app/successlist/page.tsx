"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Building } from "lucide-react";

export default function SuccessList() {
    const [openSection, setOpenSection] = useState<number | null>(null);

    const sections = [
        {
            title: "Olongapo City",
            icon: <MapPin className="text-red-500 w-6 h-6" />,
            barangays: [
                "Brgy. New Kalalake", "Brgy. New Asinan", "Brgy. New Ilalim", "Brgy. East Tapinac",
                "Brgy. Mabayuan", "Brgy. Kalaklan", "Brgy. New Cabalan"
            ]
        },
        {
            title: "Subic",
            icon: <MapPin className="text-red-500 w-6 h-6" />,
            barangays: [
                "Brgy. Calapacuan", "Brgy. Santo Thomas", "Brgy. Wawandue",
                "Brgy. San Isidro", "Brgy. Cawag Nagyantok", "Brgy. Cawag Agusuhin",
                "Brgy. Calapandayan", "Brgy. Ilwas", "Brgy. Pamatawan",
                "Brgy. Aningway-Sacatihan"
            ]
        },
        {
            title: "Castillejos",
            icon: <MapPin className="text-red-500 w-6 h-6" />,
            barangays: [
                "Brgy. Santa Maria", "Brgy. Juan", "Brgy. Nagbayan", "Brgy. San Pablo",
                "Brgy. Nagbunga"
            ]
        },
        {
            title: "Enterprise & Establishments",
            icon: <Building className="text-blue-500 w-6 h-6" />,
            businesses: [
                { name: "Royal Shopping Mall Main", description: "Enterprise Surveillance System" },
                { name: "Royal Choices Shopping Mall", description: "Enterprise Surveillance System" },
                { name: "Fahrenheit Cruiseship", description: "Enterprise Surveillance, IP-PBX, Internet Connection" },
                { name: "Subic International Golf Club", description: "Surveillance System" },
                { name: "One Gr8", description: "Surveillance System, Internet Connectivity (Remote Area), Network Infrastructure" },
                { name: "New Zealand Phase Four Campsite", description: "Surveillance System, Internet Solution Starlink" }
            ]
        }
    ];

    return (
        <div className="bg-[#001f3f] py-10 px-8 flex justify-center">
            <div className="max-w-6xl bg-white p-16 rounded-3xl">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-800">Success List</h1>
                    <p className="text-gray-600 text-lg mt-4 max-w-4xl">
                        Below is the list of barangays and establishments where our projects have been successfully implemented.
                    </p>
                </div>
                
                {sections.map((section, index) => (
                    <div key={index} className="mb-8">
                        {/* Clickable Button */}
                        <button
                            onClick={() => setOpenSection(openSection === index ? null : index)}
                            className="w-full p-4 bg-gray-200 rounded-lg text-2xl font-semibold text-gray-900 flex items-center justify-between hover:bg-gray-300 transition duration-300 ease-in-out"
                        >
                            <div className="flex items-center gap-3">
                                {section.icon} {section.title}
                            </div>
                            {openSection === index ? <ChevronUp /> : <ChevronDown />}
                        </button>

                        {/* Expandable Content with Smooth Animation */}
                        <div
                            className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 transition-all duration-500 overflow-hidden ${
                                openSection === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                            {section.barangays ? (
                                section.barangays.map((barangay, idx) => (
                                    <div 
                                        key={idx} 
                                        className="p-4 bg-gray-50 rounded-xl shadow-lg text-lg font-medium text-gray-800 flex items-center gap-3 hover:bg-gray-200 transition duration-300 ease-in-out"
                                    >
                                        <MapPin className="text-red-500 w-5 h-5" /> {barangay}
                                    </div>
                                ))
                            ) : (
                                section.businesses.map((business, idx) => (
                                    <div 
                                        key={idx} 
                                        className="p-4 bg-gray-50 rounded-xl shadow-lg flex items-center gap-3 hover:bg-gray-200 transition duration-300 ease-in-out"
                                    >
                                        <Building className="text-blue-500 w-5 h-5" />
                                        <div>
                                            <p className="text-lg font-semibold text-gray-900">{business.name}</p>
                                            <p className="text-sm text-gray-700">{business.description}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
