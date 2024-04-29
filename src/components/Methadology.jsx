import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import icon01 from "../assets/images/Picture23.jpg";
import icon02 from "../assets/images/Picture15.png";


const methodologyImages = [icon02, icon01];

const Methadology = () => {
  return (
    <div className="bg-gray-100 text-gray-700 py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-6" style={{ color: '#c10891' }}>
          Advancing Care with Cultural Insight and Cutting-Edge Innovation
        </h2>
        <p className="mb-6">
          HealthLink360 is rooted in proactive healthcare and personalized support. We understand that traditional healthcare models prioritize treating illnesses rather than preventing them. Therefore, our approach emphasizes preventive care by offering proactive health recommendations and early detection strategies to help users maintain optimal health and prevent chronic conditions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {methodologyImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`HealthLink360 Methodology ${index + 1}`}
              className="rounded-lg w-full h-full shadow-lg"
            />
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: '#c10891' }}>Our Mission</h3>
          <p className="mb-4">
            Our mission is to revolutionize healthcare accessibility through innovative telehealth solutions, providing high-quality preventative treatments to empower individuals in proactively managing their well-being, regardless of geographical, financial, or physical limitations.
          </p>
          <p className="mb-4">
            By understanding the specific needs and preferences of diverse communities, we aim to reduce health disparities and provide accessible and equitable healthcare solutions for all.
          </p>
          <div className="text-center my-6 mt-12">
            <Link to="/link-page" className="text-white bg-[#c10891] hover:bg-[#a2067c] font-bold py-2 px-4 rounded-full transition duration-300">
              Connect With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methadology;
