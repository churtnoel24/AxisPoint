export default function Services() {
    return (
        <div className="bg-gray-100 py-10 px-6 flex justify-center">
            <div className="max-w-6xl bg-white p-12 rounded-lg shadow-lg">
                
                {/* HEADER */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800">Our Services</h1>
                    <p className="text-gray-600 text-justify mt-4 max-w-4xl mx-auto text-lg">
                    At AxisPoint Technologies, we support your needs from the start—evaluating your current business processes and IT infrastructure, analyzing your requirements and objectives, selecting the best technologies and products, and developing tailored solutions.
                    </p>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div>
                        <img 
                            src="commandcent.jpg" 
                            alt="Command Center" 
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div>
                        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">What We Offer</h2>
                        <p className="text-gray-700 text-justify leading-relaxed text-lg">
                        As an independent software, hardware provider, power and cabling installer, and consultancy service provider, we guarantee long-term optimization of costs and benefits due to our neutrality in regards to different manufacturers.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-6 text-lg">
                        Open Source products have the same importance as commercial products for our consultants and developers. We also provide support for the integration and operation of our enterprise-wide and multi-enterprise information systems.
                        </p>
                    </div>
                </div>

                {/* SERVICES LIST */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-8 bg-gray-50 rounded-xl shadow-lg text-center">
                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">IT Consultation & Strategy</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Expert advice on technology implementation, optimization, and digital transformation.
                        </p>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-xl shadow-lg text-center">
                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Software Solutions</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Custom-built software solutions tailored to your business needs.
                        </p>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-xl shadow-lg text-center">
                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Hardware Solutions</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            High-performance hardware solutions to support your IT infrastructure.
                        </p>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-xl shadow-lg text-center">
                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Power & Cabling Installation</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Reliable power and network cabling solutions for seamless connectivity.
                        </p>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-xl shadow-lg text-center">
                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Enterprise System Integration</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Seamless integration of enterprise-wide systems for improved efficiency.
                        </p>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-xl shadow-lg text-center">
                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Cybersecurity & Data Protection</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Comprehensive security solutions to protect your data and IT infrastructure.
                        </p>
                    </div>
                </div>

                {/* BUSINESS MODEL SECTION */}
                <div className="mt-16 bg-gray-50 p-10 rounded-xl shadow-lg">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Business Model</h2>
                    <p className="text-gray-700 text-justify text-lg">
                        In the new economy, we realize that customers are increasingly demanding the flexibility that best serves their unique business requirements. We provide the option of selecting a combination of business models to suit various phases of a project cycle.
                    </p>
                    <div className="mt-6 space-y-6">
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800">Fixed Time/ Fixed Price</h3>
                            <p className="text-gray-700 text-lg">
                                Our fixed time, fixed price model offers customers a low-risk option and can be employed when the scope and specifications of the project are reasonably clear. This model guarantees on-time, on-budget delivery of projects. Deliverables, Costs, and Timelines are clearly defined in this model.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800">Fixed Bid</h3>
                            <p className="text-gray-700 text-lg">
                                Our fixed bid project model is tailored to client requirements, ensuring projects are completed on time, within budget, and with high quality. This framework provides a win-win scenario with quality deliverables and adherence to schedule.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800">Time and Materials</h3>
                            <p className="text-gray-700 text-lg">
                                In this model, our project teams include the required professionals, managers, and infrastructure based on project needs. Customers pay a monthly charge based on team size and composition, ensuring flexibility to balance workloads.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800">Revenue/Risk Share</h3>
                            <p className="text-gray-700 text-lg">
                                We partner with our clients through unique risk-reward models, linking project charges to business benefits. This approach ensures IT solutions drive real business effectiveness and value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
