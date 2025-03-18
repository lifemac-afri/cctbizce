"use client";
import React, { useState } from "react";
import { supabase } from "../../supabase/supabaseClient"; 
import { FaSpinner } from "react-icons/fa";
import SuccessModal from "../../components/modal/SuccessModal";
import { useNavigate } from "react-router-dom";

const BirthCertificateForm = () => {
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1); // Track the current step
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay

      // Insert data into the Supabase table
      const { data, error } = await supabase
        .from("birth_certificates")
        .insert([formData]);

      if (error) {
        throw error;
      }

      setShowModal(true)
    } catch (error) {
      console.error("Error inserting data:", error);
      alert("Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Redirect to the resource docs page
    navigate("/resource_docs");
    window.scrollTo({top: 0, behavior:"auto"})
  };

  // Function to go to the next step
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo({top: 0, behavior: "auto"})
  };

  // Function to go to the previous step
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({top: 0, behavior: "auto"})
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Requirements for Birth Certificate
      </h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <form className="space-y-10" onSubmit={handleSubmit}>
          {/* Step 1: Applicant's Details */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Applicant&apos;s Details
              </h2>
              <div className="space-y-6">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="First Name"
                  name="first_name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Middle Name"
                  name="middle_name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Surname"
                  name="surname"
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Date of Birth"
                  name="date_of_birth"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Place of Birth"
                  name="place_of_birth"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Region"
                  name="region"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="District"
                  name="district"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Residential Address of Child"
                  name="residential_address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Telephone"
                  name="telephone"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2: Father's Details */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Father&apos;s Details
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Father's Name"
                  name="father_name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Nationality"
                  name="father_nationality"
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Age"
                  name="father_age"
                  onChange={handleChange}
                  required
                />
                <select
                  name="father_marital_status"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="National ID Type"
                  name="father_id_type"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Residential Address"
                  name="father_residential_address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Region"
                  name="father_region"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="District"
                  name="father_district"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Town"
                  name="father_town"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="National ID Number"
                  name="father_id_number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Date of Issue"
                  name="father_date_of_issue"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Father's Telephone"
                  name="father_telephone"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Father's Occupation"
                  name="father_occupation"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Level of Education"
                  name="father_education_level"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Father's Religion"
                  name="father_religion"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 3: Mother's Details */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mother&apos;s Details
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Mother's Maiden Name"
                  name="mother_maiden_name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Age"
                  name="mother_age"
                  onChange={handleChange}
                  required
                />
                <select
                  name="mother_marital_status"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="National ID Type"
                  name="mother_id_type"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Residential Address"
                  name="mother_residential_address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Region"
                  name="mother_region"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="District"
                  name="mother_district"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Town"
                  name="mother_town"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="National ID Number"
                  name="mother_id_number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Date of Issue"
                  name="mother_date_of_issue"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Religion"
                  name="mother_religion"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Mother's Telephone"
                  name="mother_telephone"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Mother's Occupation"
                  name="mother_occupation"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Level of Education"
                  name="mother_education_level"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 4: Informant Details */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Informant Details
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Informant Name"
                  name="informant_name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Relationship"
                  name="informant_relationship"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Residential Address"
                  name="informant_residential_address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Region"
                  name="informant_region"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="District"
                  name="informant_district"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Town"
                  name="informant_town"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="ID Type"
                  name="informant_id_type"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="National ID Number"
                  name="informant_id_number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Date of Issue"
                  name="informant_date_of_issue"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Informant Telephone"
                  name="informant_telephone"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-evenly mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Previous
              </button>
            )}
            {step < 4 && (
              <button
                type="button"
                onClick={nextStep}
                className="bg-primary_green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Next
              </button>
            )}
            {step === 4 && (
               <button
               type="submit"
               disabled={loading}
               className="bg-primary_green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
             >
               {loading ? (
                 <>
                   <FaSpinner className="animate-spin" /> Submitting...
                 </>
               ) : (
                 "Submit"
               )}
             </button>
            )}
          </div>
        </form>
        {showModal && <SuccessModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default BirthCertificateForm;
