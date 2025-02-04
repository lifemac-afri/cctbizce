// /* eslint-disable no-unused-vars */
// import React from "react";
// import PropTypes from "prop-types";
// import {
//   FaBriefcase,
//   FaFileAlt,
//   FaCalendarAlt,
//   FaLaptop,
//   FaUserTie,
// } from "react-icons/fa";

// const servicesData = [
//   {
//     category: "Business Consultancy Services",
//     icon: FaBriefcase,
//     image: "/images/business-consultancy.jpg",
//     services: [
//       "Business Registration and Compliance Documentation",
//       "Business Research and Feasibility Studies",
//       "Corporate Training and Professional Development",
//       "Business Branding and Identity Creation",
//       "Recruitment Services",
//     ],
//   },
//   {
//     category: "Document Processing and Preparation",
//     icon: FaFileAlt,
//     image: "/images/document-processing.jpg",
//     services: [
//       "Ghanaian Passport Application",
//       "Birth and Death Certificates Registrations",
//       "Affidavits and Gazette Publications",
//       "CV Creation and Tailoring",
//       "Professional Documentation and Proposal Writing",
//     ],
//   },
//   {
//     category: "Events Advisory and Management",
//     icon: FaCalendarAlt,
//     image: "/images/events-management.jpg",
//     services: [
//       "Event Planning and Coordination",
//       "Corporate Events and Workshops",
//       "Personal Milestone Celebrations",
//     ],
//   },
//   {
//     category: "Digital Media Consultancy and Management",
//     icon: FaLaptop,
//     image: "/images/digital-media.jpg",
//     services: [
//       "Social Media Strategy and Management",
//       "Digital Branding Solutions",
//       "Online Reputation Management",
//     ],
//   },
//   {
//     category: "Career Guidance and Coaching",
//     icon: FaUserTie,
//     image: "/images/career-guidance.jpg",
//     services: [
//       "Career Development Workshops",
//       "One-on-One Coaching Sessions",
//       "Interview Preparation and Tips",
//     ],
//   },
// ];

// const ServiceCard = ({ category, icon: Icon, image, services }) => (
//   <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
//     <img
//       src={image}
//       alt={category}
//       className="rounded-t-lg w-full h-48 object-cover"
//     />
//     <div className="p-6">
//       <div className="flex items-center mb-4">
//         <Icon className="w-8 h-8 text-primary_green mr-4" />
//         <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
//       </div>
//       <ul className="space-y-2">
//         {services.map((service, index) => (
//           <li
//             key={index}
//             className="text-gray-600 hover:text-primary_green transition-colors"
//           >
//             {service}
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );
// ServiceCard.propTypes = {
//   category: PropTypes.string.isRequired,
//   services: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       subcategories: PropTypes.arrayOf(PropTypes.string),
//     })
//   ).isRequired,
//   image: PropTypes.elementType.isRequired,
//   icon: PropTypes.elementType.isRequired,
// };

// const ServicesPage = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
//             Our Services
//           </h1>
//           <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
//             Comprehensive solutions tailored to empower your business and
//             personal growth
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {servicesData.map((service, index) => (
//             <ServiceCard
//               key={index}
//               category={service.category}
//               icon={service.icon}
//               image={service.image}
//               services={service.services}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaBriefcase,
  FaFileAlt,
  FaCalendarAlt,
  FaLaptop,
  FaUserTie,
} from "react-icons/fa";
import PropTypes from "prop-types";

import { business, car2, documents, social, workshop } from "../../assets";

const servicesData = [
  {
    category: "Business Consultancy Services",
    icon: FaBriefcase,
    image: business,
    services: [
      "Business Registration and Compliance Documentation",
      "Business Research and Feasibility Studies",
      "Corporate Training and Professional Development",
      "Business Branding and Identity Creation",
      "Recruitment Services",
    ],
  },
  {
    category: "Document Processing and Preparation",
    icon: FaFileAlt,
    image: documents,
    services: [
      "Ghanaian Passport Application",
      "Birth and Death Certificates Registrations",
      "Affidavits and Gazette Publications",
      "CV Creation and Tailoring",
      "Professional Documentation and Proposal Writing",
    ],
  },
  {
    category: "Events Advisory and Management",
    icon: FaCalendarAlt,
    image: car2,
    services: [
      "Event Planning and Coordination",
      "Corporate Events and Workshops",
      "Personal Milestone Celebrations",
    ],
  },
  {
    category: "Digital Media Consultancy and Management",
    icon: FaLaptop,
    image: social,
    services: [
      "Social Media Strategy and Management",
      "Digital Branding Solutions",
      "Online Reputation Management",
    ],
  },
  {
    category: "Career Guidance and Coaching",
    icon: FaUserTie,
    image: workshop,
    services: [
      "Career Development Workshops",
      "One-on-One Coaching Sessions",
      "Interview Preparation and Tips",
    ],
  },
];

const ServiceSection = ({ category, image, icon: Icon, services }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <img
              src={image}
              alt={category}
              className="w-full h-auto object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition duration-500 "
            />
          </div>
          <div>
            <div className="flex items-center mb-6">
              <Icon className="w-10 h-10 text-primary_green mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">{category}</h2>
            </div>
            <ul className="space-y-4 text-gray-600 text-lg">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-2 group hover:text-primary_green transition-colors"
                >
                  <span className="text-primary_green">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

ServiceSection.propTypes = {
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {servicesData.map((service, index) => (
        <ServiceSection
          key={index}
          category={service.category}
          image={service.image}
          icon={service.icon}
          services={service.services}
        />
      ))}
    </div>
  );
};

export default ServicesPage;
