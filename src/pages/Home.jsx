import heroImg01 from "../assets/images/Picture15.png";

import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import Testimonial from "../components/Testimonial/Testimonial";
import hero from "../assets/videos/banner.mp4";
import "../styles/banner.css";
import Homecard from "../components/Home/Homecard";
import Homecomponent from "../components/Home/Homecomponent";
import image1 from "../assets/images/home.png";
import image2 from "../assets/images/home3.jpg";
import image3 from "../assets/images/home2.png";
import image4 from "../assets/images/home4.jpg";
import Aboutus from "../components/About/Aboutus";
import Solutions from "../components/Solutions";
import Methadology from "../components/Methadology";

const data = [
    {
        title: "From Smart Phone to Smart Health",
        text: "Your body is sending you important signals about your health. Understand, manage, and get care for symptoms in minutes. From Smartphone to Smart Health: Your Camera, Our AI, Better Choices. With HealthLink360, your phone's camera becomes an eye for wellness, pairing with our AI to bring a clear picture of your health and habits, inspiring informed, illness-preventing lifestyle shifts. With features such as Coach360 for culturally competent AI-driven Wellness coaching and Contactless Vital Monitoring for convenient health monitoring, HealthLink360 aims to revolutionize the way people approach their health management journey.",

        image: image1,
        left: true,
    },
    {
        title: "You Deserve Better Health",
        text: "HealthLink360 is a disease prevention obsessed health and wellness platform that leverages your data and our innovative technology to empower individuals to take control of their health and well-being. It provides personalized insights, recommendations, and tools to help users make informed decisions about their health, prevent chronic illnesses, and improve their overall quality of life. ",

        image: image2,
        left: false,
    },
    {
        title: "Take Control: Your Health Information, Directly at Your Fingertips.",
        text: "Combining advanced culturally competent care with technology, HealthLink360 promotes positive health behaviors tailored to your unique needs and preferences. Healthlink360 is more than an app; it's a movement toward a future where everyone has the tools to manage their health effectively. ",

        image: image3,
        left: true,
    },
    {
        title: "Experience the Power of Data-Informed Preventative Care ",
        text: "At HealthLink360, we're transforming the healthcare paradigm with a singular vision: proactive, data-informed preventive care that caters to everyone in the health ecosystem, from individual users to the largest healthcare institutions.HealthLink360 is an all-in-one solution for individuals to track, manage, and improve their health, supported by easy access to a network of resources.HealthLink360's all-in-one solution unifies our users by offering a seamless conduit between data-informed health management and a network of support. Our platform acts as a catalyst for behavior change and informed decision-making, empowering individuals with the knowledge to take preventive action, and providing institutions with the data to support these decisions. Experience the synergy as HealthLink360 brings together the individual's engagement with their health and the overarching goal of healthcare providers to facilitate a healthier, well-informed population.",

        image: image4,
        left: false,
    },
];

const Home = () => {
    return (
        <>
            {/* ============ Hero Section Start =========== */}
            <div>
                <div className="banner-container ">
                    <video autoPlay loop muted className="banner-video">
                        <source src={hero} type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* ============ Hero Section End =========== */}
            <section>
                {data.map((item, index) => (
                    <Homecomponent
                        key={index}
                        title={item.title}
                        text={item.text}
                        // image={image1}

                        image={item.image}
                        left={item.left}
                    />
                ))}
            </section>
            {/* ============ How it works Section Start =========== */}
            <section className="py-0 pb-5">
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className="heading text-center">
                            Link to Better Health with HealthLink360
                        </h2>
                        <p className="text__para text-center">
                            Your body is sending you important signals about
                            your health. Understand, manage, and get care for
                            symptoms in minutes.
                        </p>
                    </div>
                    <Homecard />
                </div>
            </section>
            {/* ============ How it works Section End =========== */}
            {/* <Solutions /> */}
            {/* <About /> */}
            {/* <section id="about">
                <Aboutus />
            </section> */}

            {/* ============ Features Section Start =========== */}
            <section className="apply_bg">
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">
                        {/* ============ Features Content Start =========== */}
                        <div className="xl:w-[670px]">
                            <h2 className="heading text-whiteColor">
                                Fostering Community Health with HealthLink360.
                            </h2>
                            <p className="text__para text-whiteColor">
                                What You’ll Get:
                            </p>
                            <ul className="pl-4">
                                <li className="text__para text-whiteColor">
                                    1. Collaborative Partner
                                </li>
                                <li className="text__para text-whiteColor">
                                    2. Culture Centric Organization
                                </li>
                                <li className="text__para text-whiteColor">
                                    3. Mission-Driven Team
                                </li>
                                <Link to="/insights">
                                    <button className="btn">Learn More</button>
                                </Link>
                            </ul>
                        </div>
                        {/* ============ Features Content End =========== */}
                        {/* ============ Features Image Start =========== */}
                        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                            <img src={featureImg} className="w-3/4" alt="" />

                            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-[6px] lg:gap-3">
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                                            Tue, 24
                                        </p>
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                                            10:00AM
                                        </p>
                                    </div>
                                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                                        <img src={videoIcon} alt="" />
                                    </span>
                                </div>

                                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                                    Consultation
                                </div>

                                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                    <img src={avatarIcon} alt="" />
                                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor"></h4>
                                </div>
                            </div>
                        </div>
                        {/* ============ Features Image End =========== */}
                    </div>
                </div>
            </section>
            {/* <Methadology /> */}

            {/* ============ Features Section End =========== */}
            {/* ============ Testimonial Section Start =========== */}
            <section className="py-[50px]">
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">
                            What our users say
                        </h2>
                        <p className="text__para text-center">
                            World-class care for everyone. Our health system
                            offers unmatched, expert health care.
                        </p>
                    </div>
                    <Testimonial />
                </div>
            </section>
            {/* ============ Testimonial Section End =========== */}
        </>
    );
};

export default Home;
