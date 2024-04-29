const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
];
const stats = [
    { name: "Offices worldwide", value: "12" },
    { name: "Full-time colleagues", value: "300+" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
];

import image from "../../assets/images/about_img.jpg";
import Methadology from "../Methadology.jsx";
import Solutions from "../Solutions.jsx";
import GridComponent from "./GridComponent.jsx";
import Values from "./Values.jsx";
export default function Aboutus() {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src={image}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center brightness-75"
                />

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            About HealthLink360
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            At HealthLink360, we recognize the pitfalls of the
                            "Maybe it will go away" approach to health. Ignoring
                            symptoms and delaying preventive care can lead to
                            serious consequences. With the advancements in
                            technology, we provide individuals with valuable
                            insights to make better decisions about their
                            health.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Our commitment lies in empowering individuals to
                            take daily steps towards their well-being. We
                            leverage advanced AI technology to provide
                            personalized health coaching and support, ensuring
                            that each user receives tailored recommendations
                            based on their unique health profile.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            With HealthLink360, users gain can take control of
                            their health journey, and take strides to a future
                            where preventive care is the norm, not the
                            exception.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Join us in reshaping the landscape of healthcare,
                            one informed decision at a time
                        </p>
                    </div>
                </div>
            </div>
            <Methadology/>
            <Values />
            {/* <Solutions /> */}
            {/* <section className="container">
                <GridComponent />
            </section> */}
        </>
    );
}
