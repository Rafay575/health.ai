import React from "react";

// Assuming you have these icons imported somewhere in your project
import icon01 from "../assets/images/Picture11.png";
import icon02 from "../assets/images/Picture18.png";
import icon03 from "../assets/images/Picture20.png";

const SectionContent = [
    {
        icon: icon01,
        title: "Engaging Users in their Health Journey",
        text: " Imagine Jasmine, a HealthLink360 user, who,upon joining, sets her sights on loweringher risk of hypertension—a condition thatruns in her family. Through the app, Jasminelogs her daily activities, from diet toexercise, and health data (BPM, StressIndex, HRV, RPM, SpO2 and more). Majority ofher meals logged and every step countmilestone reached propels her further alongher path, making what once felt like choresnow feel like victories. This interactiveapproach doesn't just educate Jasmine—itenthralls her, making each health-consciousdecision more rewarding. ",
        // Truncated for brevity
    },
    {
        icon: icon02,
        title: "Empowering Users with Data",
        text: "The power of HealthLink360 lies in its ability to place intricate health data directly into the hands of its users, making them the masters of their destinies. By giving users access to their own health analytics, the app encourages a deeper understanding of how lifestyle choices directly affect health outcomes. Users like Jasmine can see the tangible benefits of their actions, reinforced by the app's rewards system, which is meticulously designed to nudge them towards healthier habits and sustainable changes. ",
        // Truncated for brevity
    },
    {
        icon: icon03,
        title: "Realizing Wellness Goals",
        text: "As Jasmine interacts with HealthLink360, the gamification elements transform her journey, leading to measurable health improvements. Her blood pressure starts to stabilize within a healthier range, her energy levels increase, and she's motivated by the positive feedback loop created by her own data and the app's insights. The clear visualization of her progress keeps her engaged and committed to her wellness goals. HealthLink360 stands as a testament to how innovative engagement through gamification and empowerment through data accessibility can lead to profound behavior change and significantly improved health outcomes. Users are not only guided by HealthLink360; they're motivated, inspired, and driven to become the healthiest versions of themselves.",
        // Truncated for brevity
    },
];

const InfoSection = ({ icon, title, text }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
        <div className="p-6 text-center">
            <img src={icon} alt="Icon" className=" mx-auto" />
            <h3
                className="text-lg font-semibold mt-5 mb-4"
                style={{ color: "#c10891" }}
            >
                {title}
            </h3>
            <p className="text-gray-600">{text}</p>
        </div>
    </div>
);

const Gamify = () => (
    <section className="py-10 px-5 bg-[#c10891] text-white">
        <div className="container mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Gamifying the Health Experience
                </h2>
                <p className="mb-6">
                    For the users of HealthLink360, engaging with their health
                    has become not just informative but also truly captivating.
                    By gamifying the wellness experience, users are no longer
                    passive recipients of health advice but active participants
                    in a journey towards optimal well-being.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SectionContent.map((section, index) => (
                    <InfoSection key={index} {...section} />
                ))}
            </div>
        </div>
    </section>
);

export default Gamify;
