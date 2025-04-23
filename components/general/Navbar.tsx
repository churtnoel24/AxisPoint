"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for menu

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="z-50 py-5 bg-[#001f3f]"> {/* px-6 REMOVED, bg added */}
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                {/* Logo - Always Centered */}
                <div className="flex-1 flex justify-start sm:justify-center">
                    <Link href="/" className="relative w-32 h-16">
                        <Image 
                            src="/logo.png"
                            alt="Axis Point Logo"
                            fill
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Links (Centered in Large Screens) */}
                <div className="hidden sm:flex flex-grow justify-center">
                    <NavLinks closeMenu={closeMenu} />
                </div>

                {/* Mobile Menu Button (Right Side) */}
                <div className="flex-1 flex justify-end sm:hidden">
                    <button 
                        className="p-2 text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-[#001f3f] shadow-md flex flex-col items-center py-4 sm:hidden">
                    <NavLinks closeMenu={closeMenu} />
                </div>
            )}
        </nav>
    );
}

const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => (
    <div className="flex flex-col sm:flex-row items-center gap-6">
        <Link href="/" onClick={closeMenu} className="text-md font-medium text-white hover:text-gray-300 transition-colors">Home</Link>
        <Link href="/projects" onClick={closeMenu} className="text-md font-medium text-white hover:text-gray-300 transition-colors">Projects</Link>
        <Link href="/aboutus" onClick={closeMenu} className="text-md font-medium text-white hover:text-gray-300 transition-colors">About</Link>
        <Link href="/services" onClick={closeMenu} className="text-md font-medium text-white hover:text-gray-300 transition-colors">Services</Link>
        <Link href="/successlist" onClick={closeMenu} className="text-md font-medium text-white hover:text-gray-300 transition-colors">Success List</Link>
        <Link href="/supportedtechnology" onClick={closeMenu} className="text-md font-medium text-white hover:text-gray-300 transition-colors">Supported Technology</Link>
        <Link href="/permits" onClick={closeMenu} className="text-md font-medium text-white hover:text-gray-300 transition-colors">Permits</Link>
        <Link href="/contacts" onClick={closeMenu} className="text-md font-medium text-white hover:text-gray-300 transition-colors">Contacts</Link>
    </div>
);
