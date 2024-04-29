import InformationCard from "../components/Info/InformationCard";
import featureImg from "../assets/images/Picture19.png";
import featureImg2 from "../assets/images/Picture5.png";
import icon01 from "../assets/images/Picture11.png";
import icon02 from "../assets/images/Picture18.png";
import icon03 from "../assets/images/Picture20.png";
import aboutImg1 from "../assets/images/Picture16.png";
import aboutCardImg from "../assets/images/about-card.png";
import { Link } from "react-router-dom";
import "../styles/info.css";
import CareTeamsSection from "../components/CareTeamsSection ";
import Careteam from "../components/Careteam";
import InfoSection from "../components/InfoSection";
import Accordion from "../components/Accordian";
import Gamify from "../components/Gamify";
import ServicesSection from "../components/ServiceSection";
import Solutions from "../components/Solutions";

const Explore = () => {
    return (
        <>
            <section className="bg-[#c10891] pt-[60px] 2xl;h-[800px]">
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">
                        {/* ============ Features Content Start =========== */}
                        <div className="xl:w-[670px]">
                            <h2 className="heading text-whiteColor">
                                Empowered Wellness: Your Personal Health
                                Revolution with HealthLink360
                            </h2>
                            <p className="text__para text-whiteColor">
                                We believe that proactive healthcare starts with
                                understanding your unique health profile and
                                strategically guiding your wellness journey. Our
                                platform utilizes advanced data collection
                                techniques and AI analysis to deliver tailored
                                recommendations and proactive interventions
                                designed to optimize your health and well-being.
                            </p>
                            <Link to="/insights">
                                <button className="btn">
                                    Join Our Waitlist
                                </button>
                            </Link>
                        </div>
                        {/* ============ Features Content End =========== */}

                        {/* ============ Features Image Start =========== */}
                        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                            <img src={featureImg} className="w-3/4" alt="" />
                        </div>
                        {/* ============ Features Image End =========== */}
                    </div>
                </div>
            </section>

            <Solutions />
            <ServicesSection />
            <Gamify />
            <section className="my-[55px]">
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">
                        {/* ============ Features Content Start =========== */}
                        <div className="xl:w-[670px]">
                            <h2 className="heading">
                                Reducing Healthcare Costs
                            </h2>
                            <p className="text__para">
                                For insurers, HealthLink360's proactive health
                                monitoring translates to fewer claims and
                                reduced payouts for acute health episodes by
                                catching and addressing potential health issues
                                before they escalate. Hospitals benefit from the
                                decreased burden on resources, with fewer
                                emergency admissions and shorter stays, while
                                caregivers are provided with tools to manage
                                patient care effectively, reducing the need for
                                frequent in-person consultations.
                            </p>
                            <Link to="/insights">
                                <button className="btn">
                                    Join Our Waitlist
                                </button>
                            </Link>
                        </div>                   
                        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                            <img src={featureImg2} className="w-3/4" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <InfoSection />
            <Accordion />
            <Careteam />

            <section className="my-[55px]">
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                        {/* ============ About Image ============= */}
                        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-1 lg:order-2 mt-[50px]">
                            <img src={aboutImg1} alt="" />
                        </div>
                        {/* ============ About Content ============= */}
                        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                            <h2 className="heading">
                                Promoting Better Health Outcomes
                            </h2>
                            <p className="text__para">
                                HealthLink360 not only articulates potential
                                health risks but also empowers patients to take
                                charge of their health with personalized,
                                culturally-competent recommendations. This
                                approach has shown to improve adherence to
                                treatment plans and lifestyle changes, leading
                                to better health outcomes. With patients more
                                engaged in their health journey, insurers see a
                                decline in serious health incidents, hospitals
                                witness improved patient recovery rates, and
                                caregivers experience streamlined care
                                coordination.
                            </p>
                            <p className="text__para mt-[30px]">
                                In essence, HealthLink360 is not just a tool but
                                a transformation in healthcare delivery,
                                aligning the interests of all stakeholders in
                                the pursuit of a healthier, cost-effective
                                future.
                            </p>
                            <Link to="/insights">
                                <button className="btn">
                                    Join our Waitlist
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Explore;
