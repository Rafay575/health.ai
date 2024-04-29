import React from "react";
import icon01 from "../assets/images/Picture9.png";
import icon02 from "../assets/images/Picture10.png";
import icon03 from "../assets/images/gallery1.jpg";
import icon04 from "../assets/images/home3.jpg";
const images = [icon04, icon03, icon02, icon01];

const Gallery = ({ imageSources }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {imageSources.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`HealthLink360 feature ${index + 1}`}
                    className="w-full h-auto lg:h-full rounded-lg "
                />
            ))}
        </div>
    );
};

const Solutions = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8 ">
                <h2
                    className="text-3xl font-bold text-center mb-6"
                    style={{ color: "#c10891" }}
                >
                    Not Just an App, Your Partner in Health
                </h2>
                <p className="text-gray-700 mb-4">
                    HealthLink360 empowers you to become the architect of your
                    wellness journey. Our intuitive platform puts the power of
                    health management directly into your hands, turning complex
                    biometric data into straightforward, actionable insights.
                </p>
                <Gallery imageSources={images} />
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="my-8">
                        <h3
                            className="text-2xl font-semibold mb-3"
                            style={{ color: "#c10891" }}
                        >
                            A Scan a Day Keeps Illness at Bay
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Our wholistic approach to wellness is designed in
                            our innovative methodology. Using our Biometric
                            Recognition technology you’ll receive an accurate
                            snapshot of your well-being in just 35 seconds,
                            empowering you with real-time insights to make
                            informed decisions about your health.
                        </p>
                    </div>
                    <div className="my-8">
                        <h3
                            className="text-2xl font-semibold mb-3"
                            style={{ color: "#c10891" }}
                        >
                            Bridging Knowledge Gaps with Microlearning
                        </h3>
                        <p className="text-gray-700">
                            HealthLink360 is also your go-to resource for
                            learning how to master the art of health
                            conversations with your Care Team to diving deep
                            into topics like nutrition and preventive care. Our
                            eLearning library is designed to boost your health
                            literacy and give you the confidence to make
                            informed decisions and engage effectively with your
                            healthcare providers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
