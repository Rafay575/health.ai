import React from "react";
import icon01 from "../assets/images/Picture24.png";
import icon02 from "../assets/images/Picture25.jpg";
import icon03 from "../assets/videos/PatientDashoboard.gif";
// import icon02 from "../assets/images/Picture25.jpg";
const careTeamMedia = [icon01, icon02, icon03];

const Careteam = () => {
    return (
        <div className="bg-gray-100 text-gray-700 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <h2
                    className="text-3xl text-center font-bold mb-6"
                    style={{ color: "#c10891" }}
                >
                    Integrative Care Through Cultural Intelligence and
                    Technological Precision
                </h2>
                <p className="mb-6">
                    At HealthLink360, we're transforming the healthcare paradigm
                    with a singular vision: proactive, data-informed preventive
                    care that caters to everyone in the health ecosystem, from
                    individual users to the largest healthcare institutions.
                </p>
                <p className="mb-6">
                    HealthLink360 is an all-in-one solution for individuals to
                    track, manage, and improve their health, supported by easy
                    access to a network of resources.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                    <div className="lg:col-span-1">
                        <img
                            src={careTeamMedia[0]}
                            alt="Care Team Large Image"
                            className="w-full h-auto lg:h-full rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:col-span-1 grid grid-cols-1 gap-4">
                        <img
                            src={careTeamMedia[1]}
                            alt="Care Team Smaller Image"
                            className="w-full  rounded-lg shadow-lg"
                        />
                        <img
                            src={careTeamMedia[2]}
                            alt="Care Team GIF"
                            className="w-full  rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3
                        className="text-2xl font-semibold mb-4"
                        style={{ color: "#c10891" }}
                    >
                        Clinical Insight Meets Next-Generation Innovation at
                        HealthLink360
                    </h3>
                    <p className="mb-4">
                        Our commitment at HealthLink360 goes beyond mere
                        tracking — we integrate the cultural intelligence of
                        Coach360 with state-of-the-art algorithms to amplify the
                        impact of your healthcare delivery.
                    </p>
                    <p className="mb-4">
                        Embrace the fusion of innovation and cost-effectiveness
                        with HealthLink360 and set new benchmarks in patient
                        care and healthcare management excellence.
                    </p>
                    <h3
                        className="text-2xl font-semibold mt-6 mb-4"
                        style={{ color: "#c10891" }}
                    >
                        Enriching Care Team Expertise: Your Access to a World of
                        Health Knowledge
                    </h3>
                    <p className="mb-4">
                        The journey of care is continuous learning, and
                        HealthLink360 stands as your ally in this journey,
                        offering Care Teams unrestricted access to our extensive
                        digital library of health knowledge.
                    </p>
                    <div className="text-center my-6 mt-12">
                        <button className="text-white bg-[#c10891] hover:bg-[#a2067c] font-bold py-2 px-4 rounded-full transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careteam;
