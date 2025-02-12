
import React from "react";
import { Link } from "react-router-dom";

const ResourceDocsPage = () => {
  const forms = [
    {
      id: 1,
      title: "Requirement for Company",
      description: "Form for registering a company.",
      link: "/forms/company",
    },
    {
      id: 2,
      title: "Requirement for Sole Proprietorship",
      description: "Form for registering a sole proprietorship.",
      link: "/forms/sole_proprietorship",
    },
    {
      id: 3,
      title: "Requirements for Birth Certificate",
      description: "Form for applying for a birth certificate.",
      link: "/forms/birth_certificate",
    },
    {
      id: 4,
      title: "Passport Application Details",
      description: "Form for applying for a passport.",
      link: "/forms/passport_application",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Resource Docs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {forms.map((form) => (
          <Link to={form.link} key={form.id}>
            <div className="bg-white p-6 py-20 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{form.title}</h2>
              <p className="text-gray-600">{form.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourceDocsPage;