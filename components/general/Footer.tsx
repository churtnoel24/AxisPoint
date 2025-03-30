import { Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold">AxisPoint Technologies</h2>
          <p className="text-sm text-gray-400">Securing our nation through technology.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center w-full">
  <nav> 
    <ul className="flex flex-col md:flex-row gap-6 text-sm text-gray-300">
      <li><a href="/aboutus" className="hover:text-white transition">About</a></li>
      <li><a href="/services" className="hover:text-white transition">Services</a></li>
      <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
      <li><a href="/contacts" className="hover:text-white transition">Contact Us</a></li>
    </ul>
  </nav>
</div>


        {/* Social Media */}
        <div className="flex justify-center md:justify-end">
          <a
            href="https://www.facebook.com/share/1BNbMHsbpM/"
            className="text-gray-400 hover:text-white transition"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 pt-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AxisPoint Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
