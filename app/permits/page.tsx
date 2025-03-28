export default function Permits() {
    return (
        <div className="bg-gradient-to-b from-blue-100 to-red-100 py-10 px-8 flex justify-center">
            <div className="max-w-6xl bg-white p-10 rounded-lg shadow-lg">
                
                {/* HEADER */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Our Permits</h1>
                    <p className="text-gray-700 text-lg mt-6">
                        Axis Point Technologies ensures compliance with all regulatory requirements by obtaining the necessary permits. <br></br>
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
                            className="w-full max-w-xs h-auto rounded-lg shadow-md"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
