export default function SupportedRoute() {
    const technologies = [
        { name: "Microsoft", logo: "microsoft.png" },
        { name: "Linux", logo: "linux.png" },
        { name: "YAESU", logo: "yaesu.png" },
        { name: "ICOM", logo: "icom.png" },
        { name: "TrueNAS", logo: "truenas.png" },
        { name: "TP-Link", logo: "tplink.png" },
        { name: "Honeywell Security", logo: "honeywell.png" },
        { name: "Aimetis", logo: "aimetis.png" },
        { name: "HP", logo: "hp.png" },
        { name: "Ubiquiti Networks", logo: "ubiquiti.png" },
        { name: "Yeastar", logo: "yeastar.png" },
        { name: "Pelco", logo: "pelco.png" },
        { name: "Gallagher Security", logo: "gallagher.png" },
        { name: "Dahua Technology", logo: "dahua.png" },
        { name: "Cisco", logo: "cisco.png" },
        { name: "pfSense", logo: "pfsense.png" },
        { name: "Panasonic", logo: "panasonic.png" },
        { name: "MikroTik", logo: "mikrotik.png" },
        { name: "Hikvision", logo: "hikvision.png" },
        { name: "D-Link", logo: "dlink.png" },
        { name: "Axis Communications", logo: "axiscommunications.png" },
    ];

    return (
        <div className="bg-gray-100 py-10 px-8 flex justify-center">
            <div className="max-w-6xl w-full bg-white p-10 rounded-xl shadow-xl">
                {/* HEADER */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-800">Supported Technology</h1>
                    <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
                        We support a variety of technologies to deliver the best solutions for our clients.
                    </p>
                </div>

                {/* 4-COLUMN GRID (CENTERED) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center text-center">
                    {technologies.map((tech, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center border border-gray-300 rounded-xl bg-white shadow-md p-4 hover:scale-105 hover:shadow-lg transition-transform"
                        >
                            <img 
                                src={tech.logo} 
                                alt={tech.name} 
                                className="w-24 h-24 object-contain mb-2"
                            />
                            <p className="text-md font-medium text-gray-700 text-center">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}