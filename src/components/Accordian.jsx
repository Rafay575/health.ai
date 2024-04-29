import React, { useState, useRef } from "react";
import "../styles/myStyle.css";
// Utility function to get height of the content for smooth transitions
const getHeight = (element) => {
    return element?.scrollHeight;
};

const accordionData = [
    {
        title: "Navigating Health with Personal Precision",
        content:
            "HealthLink360 isn't just an app; it's your partner in health, empowering you to become the architect of your wellness journey. Our intuitive platform puts the power of health management directly into your hands, turning complex biometric data into straightforward, actionable insights. From identifying. subtle changes in your vital signs to offering personalized nutrition and fitness guidance, HealthLink360 equips you with the tools to preempt illness and foster a healthier lifestyle.\n\nWe understand that knowledge is power, especially when it comes to health. That's why HealthLink360 simplifies complex medical information, helping you make sense of your body's messages. With just a few taps, you can monitor crucial health metrics, understand their implications, and receive tailored tips to adjust your daily habits. This personalized approach ensures that you're not just following general advice but embarking on a health path that's right for you.",
    },
    {
        title: "Bridging Knowledge Gaps with Microlearning",
        content:
            "Embark on your health journey with confidence, thanks to HealthLink360's extensive microlearning library. It's your go-to resource for everything from mastering the art of health conversations to diving deep into topics like nutrition and preventive care. Our library is designed to boost your health literacy, giving you the confidence to make informed decisions and engage effectively with your healthcare providers.\n\nHealthLink360 is more than an app—it's a movement towards informed, autonomous health management. Join the HealthLink360 community and take the first step toward a proactive, empowered, and healthier life.",
    },
    {
        title: "Biometric Recognition - The Insightful Pulse of Your Health",
        content:
            "At the heart of HealthLink360 is our advanced Biometric Recognition technology. By analyzing the subtle interplay of light and motion, our platform offers a window into your well-being, capturing accurate physiological insights in real time. This state-of-the-art system, supported by rigorous, peer-reviewed research, is meticulously refined to deliver unbiased results across diverse skin tones. Within a mere 35 seconds, experience a comprehensive health assessment that combines speed with reliability, empowering you with immediate and insightful health data to inform your wellness decisions.",
    },
    {
        title: "Nutrition Management - Your Personalized Path to Nutritional Wellness",
        content:
            "Embark on a journey of tailored nutrition with HealthLink360's Nutrition Management system. It's more than just tracking calories—it's about understanding the nutritional tapestry of your meals. Our platform helps you maintain a balanced diet that's as unique as you are, with personalized meal planning and nutritional insights that make healthy eating simple and sustainable. Whether your focus is on weight management, boosting energy, or preventing disease, HealthLink360 serves as your digital nutritionist, guiding you towards your dietary goals with precision and ease.",
    },
    {
        title: "Physical Activity Tracker - Moving You Forward",
        content:
            "Elevate your fitness game with HealthLink360's Physical Activity Tracker. It's your digital coach that celebrates every step, every calorie burned, and every goal met. Our intuitive tools not only track your activity levels but also inspire you to push boundaries and redefine your limits. As you embark on your fitness journey, HealthLink360's tracker is the companion that keeps you accountable, motivated, and on track. It's not just about reducing the risk of chronic diseases—it's about unlocking a more vigorous, dynamic life where every move counts towards a healthier you.",
    },
    {
        title: "Coach360 – Nudging You Towards Healthier Habits",
        content:
            "Imagine having a personal wellness coach that’s available 24/7, tuned perfectly to your health needs, and always learning more about you. That’s Coach360. Leveraging the latest AI technology, Coach360 takes your health data and transforms it into personalized, actionable advice. Whether it's suggesting a brisk walk on a sunny day or a nutritious alternative to your afternoon snack, Coach360 makes living healthier not just simple, but also enjoyable. It's like having a wise friend in your pocket—one that helps you make small, impactful steps toward lasting well-being.",
    },
    {
        title: "Digital Health Literacy – Empowering Informed Health Conversations",
        content:
            "HealthLink360 is dedicated to cultivating Digital Health Literacy, empowering you to navigate the healthcare landscape with confidence and clarity. Our expansive microlearning library delves into pivotal topics, offering a deep dive into cultural competency within healthcare, unveiling the essence of cultural humility, and demonstrating the impact of cultural relevance. It doesn't stop there—we equip you with the skills to effectively communicate with your care providers, ensuring every interaction is as informative as it is impactful. With HealthLink360, you gain more than knowledge; you gain the power to collaborate with healthcare professionals as a proactive advocate for your health.",
    },
];

const AccordionItem = ({ title, content, index, isActive, setActiveIndex }) => {
    const contentRef = useRef(null);
    // const isActive = index === activeIndex;

    const handleClick = () => {
        setActiveIndex(isActive ? null : index);
    };

    return (
        <div className="border-b ">
            <button
                className={`accordion-title p-5 w-full text-left font-bold text-lg focus:outline-none transition duration-300 ease-in-out ${
                    isActive ? "text-[#c10891]" : "text-gray-700"
                }`}
                onClick={handleClick}
            >
                {title}
            </button>
            <div
                className={`accordion-content overflow-hidden transition-max-height duration-700 ease-in-out ${
                    isActive ? "h-auto" : "max-h-0"
                }`}
                style={{
                    maxHeight: isActive
                        ? `${getHeight(contentRef.current)}px`
                        : "0px",
                }}
                ref={contentRef}
            >
                <div className="p-5 text-gray-700">{content}</div>
            </div>
        </div>
    );
};

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto p-5">
            <div className="container mx-auto p-5">
                <div className="info-title-">
                    <h3 className="info-title text-">
                        <span className="text-[#c10891]">For User</span>
                    </h3>
                </div>
                {accordionData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isActive={activeIndex === index}
                        setActiveIndex={() => toggleItem(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Accordion;
