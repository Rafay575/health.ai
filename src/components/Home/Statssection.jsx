import { motion } from 'framer-motion';

const AnimatedNumber = ({ number }) => {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-whiteColor"
    >
      {number}
    </motion.h2>
  );
};

const AnimatedProgressBar = () => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-[100px] h-2 bg-whiteColor rounded-full block mt-[-14px] "
    ></motion.span>
  );
};

const AnimatedText = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="text__para text-whiteColor"
    >
      {text}
    </motion.div>
  );
};

const AnimatedStat = ({ number, text }) => {
  return (
    <div>
      <AnimatedNumber number={number} />
      <AnimatedProgressBar />
      <AnimatedText text={text} />
    </div>
  );
};

const Statssection = () => {
  return (
    <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
      <AnimatedStat number="40+" text="Years of Experience" />
      <AnimatedStat number="200+" text="Customers" />
      <AnimatedStat number="100%" text="Customer Satisfaction" />
    </div>
  );
};

export default Statssection;
