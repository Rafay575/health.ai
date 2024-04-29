import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import icon01 from "../../assets/images/Picture6.png";
import icon02 from "../../assets/images/Picture7.png";
import icon03 from "../../assets/images/Picture9.png";

import { useInView } from "react-intersection-observer";

const cardVariants = {
    hidden: { opacity: 0, y: 500 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2, // Adjusted duration
        },
    },
};

const GridCard = ({ icon, title, description, controls }) => (
    <motion.div
        className="py-[30px] px-5 pb-[70px] relative"
        style={{
            background: "linear-gradient(90deg, #551880 0%, #C10891 100%)",
            borderRadius: "20px",
        }}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
    >
        <div className="flex items-center justify-center">
            <img src={icon} alt={title} />
        </div>
        <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-whiteColor font-[700] text-center">
                {title}
            </h2>
            <p className="text-[16px] leading-7 text-whiteColor font-[400] mt-4 text-center">
                {description}
            </p>
            <div className="flex justify-center mb-[30px]">
                <Link
                    to="/explore"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-whiteColor hover:bg-whiteColor mx-auto flex items-center justify-center group hover:border-none absolute bottom-10"
                >
                    <BsArrowRight className="text-white group-hover:text-changedColor w-6 h-5" />
                </Link>
            </div>
        </div>
    </motion.div>
);

const Homecard = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
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
            <GridCard
                icon={icon01}
                title="Take Better Care of Yourself"
                description="Your body is sending you important signals
                                    about your health. Understand, manage, and
                                    get care for symptoms in minutes. With
                                    features such as Coach360 for culturally
                                    competent AI-driven Wellness coaching and
                                    Contactless Vital Monitoring for convenient
                                    health monitoring, HealthLink360 aims to
                                    revolutionize the way people approach their
                                    health management journey."
                controls={controls}
            />
            <GridCard
                icon={icon02}
                title="Take Control: Your Health Information at Your Fingertips"
                description="Combining advanced culturally competent care
                with technology, HealthLink360 promotes
                positive health behaviors tailored to your
                unique needs and preferences. Healthlink360
                is more than an app; it's a movement toward
                a future where everyone has the tools to
                manage their health effectively."
                controls={controls}
            />
            <GridCard
                icon={icon03}
                title="Experience the Power of Data-Informed Preventative Care"
                description="At HealthLink360, we're transforming the
                healthcare paradigm with a singular vision:
                proactive, data-informed preventive care
                that caters to everyone in the health
                ecosystem, from individual users to the
                largest healthcare institutions.
                HealthLink360 is an all-in-one solution for
                individuals to track, manage, and improve
                their health, supported by easy access to a
                network of resources."
                controls={controls}
            />
        </div>
    );
};

export default Homecard;
