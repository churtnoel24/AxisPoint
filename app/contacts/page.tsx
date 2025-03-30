import { Mail, Phone, MapPin, Facebook } from "lucide-react";

export default function Contacts() {
    return (
        <div className="bg-gradient-to-b from-blue-200 to-red-200 py-14 px-4 sm:px-8 flex justify-center">
            <div className="max-w-6xl bg-white p-6 sm:p-12 md:p-16 rounded-3xl shadow-2xl border-8 border-gray-200 w-full">
                {/* HEADER SECTION */}
                <div className="text-center mb-6 md:mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Contact Us</h1>
                    <p className="text-gray-700 text-base sm:text-lg mt-4 sm:mt-6">
                        Get in touch with Axis Point Technologies for inquiries, support, or collaboration. <br />
                        We are here to assist you with professionalism and dedication.
                    </p>
                </div>
                
                {/* CONTACT US SECTION */}
                <div className="mt-8 md:mt-12 bg-gray-100 p-6 sm:p-10 md:p-16 rounded-3xl shadow-lg flex justify-center border-4 border-gray-100 w-full">
                    <div className="max-w-4xl w-full">
                        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
                            {/* Contact Items */}
                            {contactItems.map(({ Icon, text, link }, index) => (
                                <div key={index} className="flex items-center gap-4 sm:gap-5 text-gray-800 text-base sm:text-lg bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-2 border-gray-400 w-full">
                                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                                    {link ? (
                                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline break-all">
                                            {text}
                                        </a>
                                    ) : (
                                        <span className="font-medium break-all">{text}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Contact Information Array
const contactItems = [
    { Icon: Mail, text: "axispoint@icloud.com", link: "mailto:axispoint@icloud.com" },
    { Icon: Phone, text: "+63 969 293 2967" },
    { Icon: MapPin, text: "113 Kessing St. New Kalalake, Olongapo City" },
    { Icon: Facebook, text: "AxisPoint Technologies", link: "https://www.facebook.com/share/1BNbMHsbpM/" }
];
