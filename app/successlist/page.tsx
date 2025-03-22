"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SuccessList() {
    const [openSection, setOpenSection] = useState(null);

    const sections = [
        {
            title: "Success List - Olongapo City",
            barangays: [
                "Brgy. New Kalalake", "Brgy. New Asinan", "Brgy. New Ilalim", "Brgy. East Tapinac",
                "Brgy. Mabayuan", "Brgy. Kalaklan", "Brgy. New Cabalan"
            ]
        },
        {
            title: "Success List - Subic",
            barangays: [
                "Brgy. Calapacuan", "Brgy. Santo Thomas", "Brgy. Wawandue",
                "Brgy. San Isidro", "Brgy. Cawag Nagyantok", "Brgy. Cawag Agusuhin",
                "Brgy. Calapandayan", "Brgy. Ilwas", "Brgy. Pamatawan",
                "Brgy. Aningway-Sacatihan"
            ]
        },
        {
            title: "Success List - Castillejos",
            barangays: [
                "Brgy. Santa Maria", "Brgy. Juan", "Brgy. Nagbayan", "Brgy. San Pablo",
                "Brgy. Nagbunga"
            ]
        },
        {
            title: "Enterprise & Establishments",
            businesses: [
                { name: "ROYAL SHOPPING MALL MAIN", description: "ENTERPRISE SURVEILLANCE SYSTEM" },
                { name: "ROYAL CHOICES SHOPPING MALL", description: "ENTERPRISE SURVEILLANCE SYSTEM" },
                { name: "FAHRENHEIT CRUISESHIP", description: "ENTERPRISE SURVEILLANCE, IP-PBX, INTERNET CONNECTION" },
                { name: "SUBIC INTERNATIONAL GOLF CLUB", description: "SURVEILLANCE SYSTEM" },
                { name: "ONE GR8", description: "SURVEILLANCE SYSTEM, INTERNET CONNECTIVITY (REMOTE AREA), NETWORK INFRASTRUCTURE" },
                { name: "NEW ZEALAND PHASE FOUR CAMPSITE", description: "SURVEILLANCE SYSTEM, INTERNET SOLUTION STARLINK" }
            ]
        }
    ];

    return (
        <div className="bg-gray-100 py-10 px-6 flex justify-center items-center">
            <div className="max-w-6xl bg-white p-12 rounded-lg shadow-lg w-full text-center">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-800">Success List</h1>
                    <p className="text-gray-600 text-lg mt-4 max-w-4xl mx-auto">
                        Below is the list of barangays and establishments where our projects have been successfully implemented.
                    </p>
                </div>
                
                {sections.map((section, index) => (
                    <div key={index} className="mb-8">
                        <button
                            onClick={() => setOpenSection(openSection === index ? null : index)}
                            className="flex items-center justify-center w-full p-4 bg-gray-200 rounded-lg text-2xl font-semibold text-center"
                        >
                            {section.title}
                            <span className="ml-2">{openSection === index ? <ChevronUp /> : <ChevronDown />}</span>
                        </button>
                        {openSection === index && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 justify-center">
                                {section.barangays ? (
                                    section.barangays.map((barangay, idx) => (
                                        <div key={idx} className="p-4 bg-gray-50 rounded-xl shadow-lg text-xl font-medium text-gray-800 text-center">
                                            {barangay}
                                        </div>
                                    ))
                                ) : (
                                    section.businesses.map((business, idx) => (
                                        <div key={idx} className="p-4 bg-gray-50 rounded-xl shadow-lg text-center">
                                            <h3 className="text-2xl font-bold text-gray-900">{business.name}</h3>
                                            <p className="text-gray-700 text-lg mt-2">{business.description}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
