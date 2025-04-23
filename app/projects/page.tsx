export default function Projects() {
    const sections = [
        {
            title: "Network Infrastructure",
            projects: [
                { title: "Customized Data Rack", image: "datarack.png" },
                { title: "Customized Network Rack", image: "netrack.png" },
                { title: "Street-IP Cameras", image: "cctv.jpg" },
                { title: "Integrated Systems", image: "Integ.png" },
                { title: "Structural Cabling", image: "cabling.png" },
                { title: "Shopping Mall Command Center", image: "shoppingmall.png" },
                { title: "University Command Center", image: "univ.png" },
                { title: "LGU Smart Barangay", image: "lgu.png" },
                { title: "Surveillance Nerve Center", image: "nerve.png" },
                { title: "Cruise Ships Control Room", image: "commandcent.jpg" },
                { title: "Surveillance Video Storage", image: "video.png" },
                { title: "Street-IP Cameras", image: "streetip.png" },
            ]
        },
        {
            title: "Starlink & WiFi Solutions",
            projects: [
                { title: "Long Range WiFi 5Ghz", image: "longwifi.png" },
                { title: "Long Range AP 5Ghz", image: "longap.png" },
                { title: "Long Range Client 5Ghz", image: "longclient.png" },
                { title: "WiFi Access Point 2.4Ghz", image: "wifipoint.png" },
                { title: "Starlink Technology", image: "starlink.png" },
                { title: "Pre-Paid WiFi Voucher Hotspot", image: "wifi.png" }
            ]
        },
        {
            title: "IP-PBX Telephone Solutions",
            projects: [
                { title: "IP-PBX Server", image: "IPPBX.png" },
                { title: "Operators IP-Phone Unit", image: "op1.png" },
                { title: "Operators IP-Phone Unit", image: "op2.png" },
                { title: "Cabin's IP-Phone", image: "cabins.png" },
                { title: "@Cruise Ship Configuring IP-PBX", image: "config1.png" },
                { title: "@Cruise Ship Configuring IP-PBX", image: "config2.png" }
            ]
        },
        {
            title: "Radio Communication",
            projects: [
                { title: "VHF Repeater", image: "vhf.png" },
                { title: "VHF Repeater", image: "vhf2.png" },
                { title: "UHF Radio System", image: "uhf.png" },
                { title: "Cross Band Repeater", image: "cross.png" },
                { title: "HYTERA Digital Radio", image: "hytera.png" },
                { title: "UHF Repeater", image: "uhf2.png" }
            ]
        },
        {
            title: "Public Address System",
            projects: [
                { title: "IP-PA System", image: "ip1.png" },
                { title: "IP-PA System", image: "ip2.png" },
                { title: "PA System Server", image: "server.png" },
                { title: "PA Speaker", image: "speaker.png" },
                { title: "PA Speaker", image: "speaker2.png" },
                { title: "PA Speaker Analogue", image: "analogue.png" }
            ]
        },

        {
            title: "Security Services",
            projects: [
                { title: "Access Control System", image: "access.png" },
                { title: "Home Alarm System", image: "home.png" },
                { title: "Centralized Alarm System", image: "central.png" },
                { title: "Fire Alarm System", image: "fire.png" },
                { title: "Training Center", image: "train.png" },
                { title: "Data Storage", image: "data.png" },
                { title: "Network Infrastracture", image: "net.png" },
                { title: "Storage Server", image: "storage.png" },
                { title: "Perimeter Fence", image: "fence.png" },
                { title: "Access Control", image: "accon.png" },
                { title: "Command Center", image: "comm.png" },
                { title: "TV Wall", image: "tv.png" }
            ]
        },
        {
            title: "Engineers in Action",
            projects: [
                { title: "Installing Internet WiFi Backhaul", image: "backhaul.png" },
                { title: "Installing Street IP-Cams", image: "ipcam.png" },
                { title: "Installing Street IP-Cams", image: "ipcam1.png" },
                { title: "Installing Street IP-Cams", image: "ipcam2.png" },
                { title: "Configuring Surveillance", image: "surv.png" },
                { title: "Installing Wireless IP-Cams", image: "wless.png" }
            ]
        },

        
        


    ];

    return (
        <div className="bg-[#001f3f] py-10 px-8 flex justify-center">
            <div className="max-w-6xl bg-white p-16 rounded-3xl">
                
                {/* HEADER */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800">Our Projects</h1>
                    <p className="text-gray-600 text-justify mt-4 max-w-4xl mx-auto text-lg">
                        At AxisPoint Technologies, we take pride in delivering high-quality, innovative projects that drive business growth and operational efficiency. Our portfolio showcases a range of successful implementations, demonstrating our expertise in technology solutions.
                    </p>
                </div>

                {/* PROJECT SECTIONS */}
                {sections.map((section, secIndex) => (
                    <div key={secIndex} className="mb-16">
                        <h2 className="text-4xl font-bold text-center text-gray-700 mb-6">{section.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {section.projects.map((project, projIndex) => (
                                <div key={projIndex} className="p-6 bg-gray-50 rounded-xl shadow-lg text-center">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-40 object-cover rounded-lg mb-4 shadow-md"
                                    />
                                    <h3 className="text-1xl font-semibold text-gray-800">{project.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
