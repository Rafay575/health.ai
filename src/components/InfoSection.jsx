import React from "react";

// Define the InformationCard component
const InformationCard = ({ title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 lg:mb-0 hover:bg-[#f3e8f3]">
            <div className="p-6 ">
                <h4 className="font-bold mb-3" style={{ color: "#c10891" }}>
                    {title}
                </h4>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

const InfoSection = () => {
    return (
        <div className="bg-[#c10891]">
            <section className="info- container py-5 lg:py-10 ">
                <div className="info-title-">
                    <h3 className="info-title text-whiteColor">
                        <span className="text-whiteColor">For Providers</span>
                    </h3>
                    <p className="text__para text-whiteColor">
                        We believe that proactive healthcare starts with
                        understanding your unique health profile and
                        strategically guiding your wellness journey. Our
                        platform utilizes advanced data collection techniques
                        and AI analysis to deliver tailored recommendations and
                        proactive interventions designed to optimize your health
                        and well-being.
                    </p>
                </div>

                <div className="info-cards-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <InformationCard
                        title="Remote Health Monitoring"
                        description="At HealthLink360, our AI-powered remote health monitoring technology isn't just innovative—it's a game-changer for healthcare providers, users, and caregivers alike. Seamlessly melding with your current systems or apps, our sophisticated tools are designed to enhance the care continuum, bringing efficiency to the forefront and elevating health outcomes. With HealthLink360, step into the future of healthcare where every piece of data works harmoniously to support comprehensive wellness journeys."
                    />

                    <InformationCard
                        title="Clinical Backed Insights"
                        description="At HealthLink360, we are redefining the approach to patient wellness with our AI-driven Coach360 platform, crafted to align with the goals of insurance companies and hospitals. Our predictive analytics capabilities ensure patients lead healthier lives by proactively guiding them towards better health outcomes. This not only enhances patient satisfaction but also substantially reduces healthcare costs and minimizes the strain on hospital resources by decreasing the necessity for frequent visits and extended hospital stays. By integrating Coach360's sophisticated algorithms and cultural intelligence into your systems, we optimize the efficiency of healthcare delivery. We empower patients with personalized health insights, driving down readmission rates, and fostering a healthier population. Partner with HealthLink360, where innovation meets cost-effectiveness, elevating the standard of patient care and operational excellence."
                    />

                    <InformationCard
                        title="Reducing Healthcare Costs"
                        description="In a healthcare landscape where cost reduction and improved patient outcomes are paramount, HealthLink360 emerges as a pivotal ally for insurance companies, hospitals, and caregivers. Our platform stands as a beacon of innovation, employing cutting-edge AI to deliver predictive health insights, fostering an ecosystem where preventive care is prioritized, and management of chronic conditions is streamlined. For insurers, HealthLink360's proactive health monitoring translates to fewer claims and reduced payouts for acute health episodes by catching and addressing potential health issues before they escalate. Hospitals benefit from the decreased burden on resources, with fewer emergency admissions and shorter stays, while caregivers are provided with tools to manage patient care effectively, reducing the need for frequent in-person consultations."
                    />
                </div>
            </section>
        </div>
    );
};

export default InfoSection;
