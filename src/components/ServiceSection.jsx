import React from "react";

// Example of InformationCard component
const InformationCard = ({ title, description }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-[#f7e1f3] transition-colors duration-300">
        <h4 className="text-lg font-semibold mb-4" style={{ color: "#c10891" }}>
            {title}
        </h4>
        <p className="text-gray-600">{description}</p>
    </div>
);

const ServicesSection = () => (
    <section className="py-10 px-5 bg-gray-100">
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-[#c10891] mb-4">
                    Uncover the Goals You Can Monitor
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                    We believe that proactive healthcare starts with
                    understanding your unique health profile and strategically
                    guiding your wellness journey. Our platform utilizes
                    advanced data collection techniques and AI analysis to
                    deliver tailored recommendations and proactive interventions
                    designed to optimize your health and well-being.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InformationCard
                    title="Nutrition Management"
                    description="Nutrition management involves maintaining a balanced diet rich in essential nutrients to support overall health and well-being. It's crucial to track nutrition to ensure adequate intake of vitamins, minerals, and macronutrients while avoiding excessive consumption of unhealthy foods. HealthLink360 helps users track their daily food intake, offering insights into nutritional content and meal planning suggestions. By monitoring their nutrition, users can make informed dietary choices and work towards achieving their health goals, whether it's weight management, improved energy levels, or disease prevention."
                />

                <InformationCard
                    title="Physical Activity"
                    description="Regular physical activity is essential for maintaining cardiovascular health, muscle strength, and flexibility, as well as reducing the risk of chronic diseases such as obesity, diabetes, and hypertension. Tracking physical activity helps individuals ensure they meet recommended exercise guidelines and stay active throughout the day. HealthLink360 provides users with tools to track their exercise routines, set fitness goals, and receive personalized workout recommendations. By monitoring their physical activity levels, users can stay motivated, track progress, and adjust their fitness regimen as needed, ultimately achieving better overall health and fitness."
                />

                <InformationCard
                    title="Stress Management (Coming soon)"
                    description="Stress management involves adopting strategies to cope with daily stressors and reduce the negative impact of chronic stress on mental and physical health. Tracking stress levels helps individuals identify triggers and implement effective stress-reduction techniques. HealthLink360 offers features such as stress tracking, mindfulness exercises, and relaxation techniques to support users in managing stress effectively. By monitoring their stress levels and practicing stress-reduction activities, users can improve their emotional well-being, enhance resilience, and achieve greater balance in their lives."
                />

                <InformationCard
                    title="Environmental Wellness (Coming soon)"
                    description="Environmental wellness focuses on creating a healthy living environment that promotes well-being and minimizes exposure to harmful substances or pollutants. It's important to track environmental factors that may affect health, such as air quality, water purity, and exposure to toxins. HealthLink360 provides users with resources and information to assess environmental risks and make informed decisions to protect their health. By tracking environmental wellness indicators and accessing relevant educational content, users can take proactive steps to create a healthier living environment for themselves and their families."
                />

                <InformationCard
                    title="Preventative Tips (Coming Soon)"
                    description="Preventative tips encompass actionable strategies and guidance aimed at preventing illness, promoting health, and reducing the risk of chronic diseases. It's essential to track preventative tips to empower individuals with the knowledge and resources they need to proactively manage their health. HealthLink360 offers a wealth of preventative tips on various health topics, ranging from nutrition and exercise to disease prevention and management. By providing users with practical advice and actionable recommendations, HealthLink360 helps individuals make informed decisions about their health and adopt healthier lifestyles."
                />

                <InformationCard
                    title="Community Resources and Support"
                    description="Community resources and support play a vital role in promoting health and well-being by providing individuals with access to social support networks, healthcare services, and community programs. It's important to track community resources to ensure individuals can access the support they need to maintain and improve their health. HealthLink360 connects users with community resources, such as local healthcare providers, support groups, and wellness programs. By providing users with access to community resources and support networks, HealthLink360 helps individuals build social connections, access healthcare services, and engage in activities that promote well-being."
                />
            </div>
        </div>
    </section>
);

export default ServicesSection;
