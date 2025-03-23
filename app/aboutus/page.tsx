import { Mail, Phone, MapPin, Facebook } from "lucide-react";

export default function AboutUs() {
    return (
        <div className="bg-gradient-to-b from-blue-100 to-red-100 py-10 px-8 flex justify-center">
            <div className="max-w-6xl bg-white p-8 rounded-lg shadow-lg">
                
                {/* ABOUT US SECTION */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    
                    {/* Image Section (Left Side) */}
                    <div className="w-full md:w-1/3">
                        <img 
                            src="data server.jpg" 
                            alt="Data Servers" 
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    

                    {/* Text Section (Right Side) */}
                    <div className="w-full md:w-2/3">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
                        <p className="text-gray-700 text-justify leading-relaxed">
                            Axis Point Technologies was established in 2014 to provide information technology solutions 
                            for small to medium-sized businesses. Our very first day has been to cultivate professional 
                            relationships with our clients to provide effective and reliable information technology solutions 
                            for their needs.
                        </p>
                        <p className="text-gray-700 text-justify leading-relaxed mt-4">
                            The team at Technology Solutions is equipped with a highly developed skill set developed 
                            over decades of experience, not only in information technology but also in business processes 
                            across a range of industry sectors. This business experience makes us uniquely positioned to 
                            offer solutions promising greater operational efficiency, productivity gains, and cost savings 
                            for each of our clients, regardless of their industry.
                        </p>
                        <p className="text-gray-700 text-justify leading-relaxed mt-4">
                            As an established technology-intensive company, we pride ourselves on providing a comprehensive 
                            suite of solutions comprising infrastructure consultancy, on/offsite services, custom software 
                            and web development, software and web application testing, and enterprise architecture consulting.
                        </p>
                        <p className="text-gray-700 text-justify leading-relaxed mt-4">
                            Our team consistently delivers state-of-the-art solutions in various areas, including but not 
                            limited to, integrated business solutions, system applications, product development, Internet/Intranet 
                            applications, and communication & network management services. At Axis Point Technologies, we guarantee 
                            rapid, reliable, and robust information technology solutions that work.
                        </p>
                    </div>
                </div>

                {/* VISION, MISSION & CORE VALUES SECTION */}
                <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md flex justify-center">
                    <div className="max-w-4xl w-full">
                        
                        {/* Vision */}
                        <div className="p-6 border rounded-lg shadow-md bg-white mb-6">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-3 text-center">Our Vision</h2>
                            <p className="text-gray-700 leading-relaxed text-justify">
                                To be the nation's premier technology services partner, committed to delivering world-class IT solutions 
                                while ensuring the security, efficiency, and growth of our clients.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="p-6 border rounded-lg shadow-md bg-white mb-6">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-3 text-center">Our Mission</h2>
                            <ul className="text-gray-700 text-justify leading-relaxed space-y-3 text-md">
                                <li>✔ Deliver cutting-edge IT solutions that enhance business processes and operational efficiency.</li>
                                <li>✔ Develop secure, reliable, and scalable systems that protect and support our clients’ growth.</li>
                                <li>✔ Leverage expertise in cloud computing, cybersecurity, and software development to provide superior services.</li>
                                <li>✔ Empower businesses with digital transformation strategies that drive innovation.</li>
                                <li>✔ Build strong partnerships with clients, ensuring long-term success through technology-driven solutions.</li>
                            </ul>
                        </div>

                        {/* Core Values */}
                        <div className="p-6 border rounded-lg shadow-md bg-white">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-3 text-center">Core Values</h2>
                            <ul className="text-gray-700 text-justify leading-relaxed space-y-2 text-md">
                                <li>✔ Professionalism – We uphold the highest standards in everything we do.</li>
                                <li>✔ Customer Focus – Our clients’ success is our top priority.</li>
                                <li>✔ Teamwork – We believe in collaboration and shared success.</li>
                                <li>✔ Reliability – Providing solutions that businesses can trust.</li>
                                <li>✔ Care – Ensuring security, quality, and innovation in our services.</li>
                                <li>✔ Integrity – Committed to ethical business practices and transparency.</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* CONTACT US SECTION */}
                <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md flex justify-center">
                    <div className="max-w-4xl w-full text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us </h2>

                        <div className="flex flex-col items-center space-y-4">
                            
{/* Email */}
<div className="flex items-center gap-3 text-gray-700 text-lg">
    <Mail className="w-6 h-6 text-blue-500" />
    <a href="mailto:@icloud.com" className="text-blue-600 hover:underline">
        axispoint@icloud.com
    </a>
</div>


                            {/* Phone */}
                            <div className="flex items-center gap-3 text-gray-700 text-lg">
                                <Phone className="w-6 h-6 text-blue-500" />
                                <span>+63 969 293 2967</span>
                            </div>

                            {/* Address */}
                            <div className="flex items-center gap-3 text-gray-700 text-lg">
                                <MapPin className="w-6 h-6 text-blue-500" />
                                <span>113 Kessing St. New Kalalake, Olongapo City</span>
                            </div>

                            {/* Facebook */}
                            <div className="flex items-center gap-3 text-gray-700 text-lg">
                                <Facebook className="w-6 h-6 text-blue-500" />
                                <a 
                                    href="https://www.facebook.com/share/1BNbMHsbpM/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    AxisPoint Technologies
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
