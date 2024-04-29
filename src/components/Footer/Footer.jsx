import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";

const socialLinks = [
    {
        path: "https://www.linkedin.com/company/healthlink360-ai",
        icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
    },
    {
        path: "https://www.instagram.com/healthlink360.ai",
        icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
    },
];

const quickLinks01 = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/explore",
        display: "Solutions",
    },
    {
        path: "/services",
        display: "Services",
    },
    {
        path: "/about",
        display: "About Us",
    },
];

const quickLinks02 = [
    {
        path: "/",
        display: "Donate",
    },
    {
        path: "/contact",
        display: "Contact Us",
    },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer
            className="pb-16 pt-10"
            style={{
                background:
                    "linear-gradient(270deg,#c10891  0%, #551880 100%)",
            }}
        >
            <div className="container ">
                <div className="flex  justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div className="lg:w-1/2">
                        <img src={logo} alt="" />

                        <p className="text-[16px] leading-7 font-[400] text-whiteColor">
                            Empowering holistic health journeys, HealthLink360
                            blends cutting-edge technology with culturally
                            sensitive care to elevate your well-being.
                        </p>
                        <p className="text-[16px] leading-7 font-[400] text-whiteColor">
                            Our solutions are not a replacement for a healthcare
                            professional and our solution does not diagnose,
                            prevent, provide any treatment for any form of
                            illness or disease, and should only be considered a
                            tool to provide health and wellness data for
                            informational purposes only.
                        </p>
                        <p className="text-[16px] leading-7 font-[400] text-whiteColor">
                            Copyright © {year}. All Rights Reserved.{" "}
                        </p>

                        <div className="flex items-center gap-3 mt-4">
                            {socialLinks.map((link, index) => (
                                <Link
                                    to={link.path}
                                    key={index}
                                    className="w-9 h-9 border border-solid border-whiteColor text-whiteColor rounded-full flex items-center justify-center group "
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-whiteColor">
                            Quick Links
                        </h2>

                        <ul>
                            {quickLinks01.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link
                                        to={item.path}
                                        className="text-[16px] leading-7 font-[400] text-whiteColor"
                                    >
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-whiteColor">
                            Support
                        </h2>

                        <ul>
                            {quickLinks02.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link
                                        to={item.path}
                                        className="text-[16px] leading-7 font-[400] text-whiteColor"
                                    >
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
