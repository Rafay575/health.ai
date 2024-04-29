import React from "react";
import icon01 from "../../assets/images/Picture21.jpg";
import icon02 from "../../assets/images/value5.png";

const valuesImages = [icon02, icon01];
const Values = () => {
    return (
        <div className="bg-gray-100 text-gray-700 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-3xl text-center font-bold mb-6"
                    style={{ color: "#c10891" }}
                >
                    Innovating Health: Culturally Connected, Clinically Advanced
                </h2>
                <p className="mb-6">
                    At HealthLink360, our core values guide everything we do. We
                    are committed to creating a platform that not only empowers
                    individuals to take control of their health but also
                    embodies our dedication to sustainability, diversity,
                    inclusion, and accessibility.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {valuesImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`HealthLink360 Value ${index + 1}`}
                            className="rounded-lg h-full shadow-lg"
                        />
                    ))}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3
                        className="text-2xl font-semibold mb-4"
                        style={{ color: "#c10891" }}
                    >
                        Our Core Values
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Accessibility: Breaking down barriers to healthcare
                            by providing easily accessible telehealth services.
                        </li>
                        <li>
                            Quality: Delivering high-quality healthcare services
                            that meet or exceed industry standards.
                        </li>
                        <li>
                            Empowerment: Empowering individuals through
                            education, support, and access to innovative
                            telehealth solutions.
                        </li>
                        <li>
                            Community Engagement: Actively engaging with
                            communities to address unique healthcare needs and
                            challenges.
                        </li>
                        <li>
                            Sustainability: Shaping a future where our
                            data-driven systems have minimal negative impact on
                            the environment.
                        </li>
                    </ul>
                    <p className="mt-6">
                        Our commitment to community extends beyond healthcare
                        delivery to initiatives that foster learning,
                        collaboration, and social impact.
                    </p>
                    <h3
                        className="text-2xl font-semibold mt-6 mb-4"
                        style={{ color: "#c10891" }}
                    >
                        Diversity, Equity, Inclusion, and Belonging
                    </h3>
                    <p>
                        At HealthLink360, we leverage our technological
                        advancements to champion health equity for all people.
                        We are committed to promoting diversity, equity,
                        inclusion, and belonging as we pioneer new ways to serve
                        diverse communities effectively.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Values;
