import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import icon01 from "../../assets/images/Picture13.png";
import icon02 from "../../assets/images/Picture11.png";
import icon03 from "../../assets/images/Picture10.png";
import icon04 from "../../assets/images/value4.png";
import icon05 from "../../assets/images/value5.png";

import { useInView } from "react-intersection-observer";
const GridElement = ({ icon, title, description, controls }) => {
    return (
        <motion.div
            className="py-[30px] px-5"
            style={{
                background: "linear-gradient(90deg, #551880 0%, #C10891 100%)",
                borderRadius: "20px",
            }}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <div className="flex items-center justify-center">
                <img src={icon} alt={title} />
            </div>
            <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-whiteColor font-[700] text-center">
                    {title}
                </h2>
                <p className="text-[16px] leading-7 text-whiteColor font-[400] mt-4 text-justify">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const GridComponent = () => {
    const { ref, inView } = useInView({ triggerOnce: false });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"
            ref={ref}
        >
            <GridElement
                icon={icon01}
                title="Quality"
                description="We are committed to delivering high-quality healthcare services that meet or exceed industry standards. Our focus on quality extends to every aspect of our operations, from the technology we develop to the care provided by our healthcare professionals."
                controls={controls}
            />
            <GridElement
                icon={icon02}
                title="Accessibility"
                description="We believe in breaking down barriers to healthcare by providing easily accessible telehealth services to all members of the community, regardless of their location, income level, or physical ability."
                controls={controls}
            />
            <GridElement
                icon={icon03}
                title="Empowerment"
                description="We empower individuals to take control of their health and well -being through education, support, and access to innovative telehealth solutions. By empowering our members, we aim to elevate hope and promote proactive health management."
                controls={controls}
            />
            <GridElement
                icon={icon04}
                title="Community Engagement"
                description="We recognize the importance of community in promoting health and wellness. Through active engagement with communities, we strive to advance healing by addressing the unique healthcare needs and challenges of diverse populations."
                controls={controls}
            />
            <GridElement
                icon={icon05}
                title="Sustainability"
                description="We look forward to shaping a future where data drive systems have minimal negative impact on the environment."
                controls={controls}
            />
        </div>
    );
};

export default GridComponent;
