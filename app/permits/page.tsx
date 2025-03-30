"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function Permits() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="bg-gradient-to-b from-blue-100 to-red-100 py-10 px-8 flex justify-center">
            <div className="max-w-6xl bg-white p-16 rounded-3xl">
                
                {/* HEADER */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Our Permits</h1>
                    <p className="text-gray-700 text-lg mt-6">
                        Axis Point Technologies ensures compliance with all regulatory requirements by obtaining the necessary permits. <br />
                        Below are our official permits, validating our commitment to professionalism and legal adherence.
                    </p>
                </div>

                {/* Permits Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
                    {[...Array(8)].map((_, index) => (
                        <img 
                            key={index} 
                            src={`p${index + 1}.png`} 
                            alt={`Permit ${index + 1}`} 
                            className="w-full max-w-xs h-auto rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
                            onClick={() => setSelectedImage(`p${index + 1}.png`)}
                        />
                    ))}
                </div>

                {/* Image Modal */}
                {selectedImage && (
                    <Dialog 
                        open={!!selectedImage} 
                        onClose={() => setSelectedImage(null)} 
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    >
                        <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl">
                            <button 
                                onClick={() => setSelectedImage(null)} 
                                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
                            >
                                &times;
                            </button>
                            <img src={selectedImage} alt="Selected Permit" className="w-full h-auto rounded-lg" />
                        </div>
                    </Dialog>
                )}
            </div>
        </div>
    );
}
