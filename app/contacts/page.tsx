import { Mail, Phone, MapPin } from "lucide-react";
import { Facebook as FacebookIcon } from "lucide-react";

export default function Contacts() {
    return (
        <div className="bg-gradient-to-b from-blue-200 to-red-200 py-14 px-8 flex justify-center">
            <div className="max-w-6xl bg-white p-16 rounded-3xl shadow-2xl border-8 border-gray-200">
                {/* HEADER SECTION */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Contact Us</h1>
                    <p className="text-gray-700 text-lg mt-6">
                        Get in touch with Axis Point Technologies for inquiries, support, or collaboration. <br />
                        We are here to assist you with professionalism and dedication.
                    </p>
                </div>
                
                {/* CONTACT US SECTION */}
                <div className="mt-12 bg-gray-100 p-16 rounded-3xl shadow-lg flex justify-center border-4 border-gray-100">
                    <div className="max-w-4xl w-full text-center">
                        <div className="flex flex-col items-center space-y-8">
                            {/* Email */}
                            <div className="flex items-center gap-5 text-gray-800 text-lg bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-2 border-gray-400 w-full max-w-lg">
                                <Mail className="w-7 h-7 text-blue-600" />
                                <a href="mailto:axispoint@icloud.com" className="text-blue-700 font-semibold hover:underline">
                                    axispoint@icloud.com
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-5 text-gray-800 text-lg bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-2 border-gray-400 w-full max-w-lg">
                                <Phone className="w-7 h-7 text-blue-600" />
                                <span className="font-medium">+63 969 293 2967</span>
                            </div>

                            {/* Address */}
                            <div className="flex items-center gap-5 text-gray-800 text-lg bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-2 border-gray-400 w-full max-w-lg">
                                <MapPin className="w-7 h-7 text-blue-600" />
                                <span className="font-medium whitespace-nowrap">113 Kessing St. New Kalalake, Olongapo City</span>
                            </div>

                            {/* Facebook */}
                            <div className="flex items-center gap-5 text-gray-800 text-lg bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-2 border-gray-400 w-full max-w-lg">
                                <FacebookIcon className="w-7 h-7 text-blue-600" />
                                <a
                                    href="https://www.facebook.com/share/1BNbMHsbpM/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 font-semibold hover:underline"
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
