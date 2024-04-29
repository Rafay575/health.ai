import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedContent = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="lg:w-[570px]"
        >
            {children}
        </motion.div>
    );
};

const AnimatedHeading = ({ text }) => {
    return (
        <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="text-[36px] leading-[46px] text-whiteColor font-[800] md:text-[60px] md:leading-[70px]"
        >
            {text}
        </motion.h1>
    );
};

const AnimatedParagraph = ({ text }) => {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="text-white"
        >
            {text}
        </motion.p>
    );
};


const AnimatedButton = () => {
    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="btn"
        >
            <Link to="/explore">Learn More</Link>
        </motion.button>
    );
};

const Herotext = () => {
    return (
        <div>

        {/* <AnimatedContent>
            <AnimatedHeading text="HealthLink360: Your Link to Better Health" />
            <AnimatedParagraph text="HealthLink360 is a prevention focused health and wellness
                platform that leverages your data and our innovative technology
                to empower individuals to take control of their health and
                well-being. It provides personalized insights, recommendations,
                and tools to help users make informed decisions about their
                health, prevent chronic illnesses, and improve their overall
                quality of life.">
                
            </AnimatedParagraph>
            <AnimatedButton />
        </AnimatedContent> */}
        </div>
    );
};

export default Herotext;
