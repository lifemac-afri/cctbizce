"use client";
import React, { useState } from "react";
import { supabase } from "../../supabase/supabaseClient"; 

const BirthCertificateForm = () => {
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1); // Track the current step

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Insert data into the Supabase table
      const { data, error } = await supabase
        .from("birth_certificates")
        .insert([formData]);

      if (error) {
        throw error;
      }

      console.log("Data inserted successfully:", data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error inserting data:", error);
      alert("Failed to submit form.");
    } finally {
      setLoading(false);
    }
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
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="First Name"
                  name="first_name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Middle Name"
                  name="middle_name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Surname"
                  name="surname"
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Date of Birth"
                  name="date_of_birth"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Place of Birth"
                  name="place_of_birth"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Region"
                  name="region"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="District"
                  name="district"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Residential Address of Child"
                  name="residential_address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
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
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Father's Name"
                  name="father_name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Nationality"
                  name="father_nationality"
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Age"
                  name="father_age"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Marital Status"
                  name="father_marital_status"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="National ID Type"
                  name="father_id_type"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Residential Address"
                  name="father_residential_address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Region"
                  name="father_region"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="District"
                  name="father_district"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Town"
                  name="father_town"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="National ID Number"
                  name="father_id_number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Date of Issue"
                  name="father_date_of_issue"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Father's Telephone"
                  name="father_telephone"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Father's Occupation"
                  name="father_occupation"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Level of Education"
                  name="father_education_level"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
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
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Mother's Maiden Name"
                  name="mother_maiden_name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Age"
                  name="mother_age"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Marital Status"
                  name="mother_marital_status"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="National ID Type"
                  name="mother_id_type"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Residential Address"
                  name="mother_residential_address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Region"
                  name="mother_region"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="District"
                  name="mother_district"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Town"
                  name="mother_town"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="National ID Number"
                  name="mother_id_number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Date of Issue"
                  name="mother_date_of_issue"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Religion"
                  name="mother_religion"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Mother's Telephone"
                  name="mother_telephone"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Mother's Occupation"
                  name="mother_occupation"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
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
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Informant Name"
                  name="informant_name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Relationship"
                  name="informant_relationship"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Residential Address"
                  name="informant_residential_address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Region"
                  name="informant_region"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="District"
                  name="informant_district"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Town"
                  name="informant_town"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="ID Type"
                  name="informant_id_type"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="National ID Number"
                  name="informant_id_number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Date of Issue"
                  name="informant_date_of_issue"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
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
                className="bg-primary_green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BirthCertificateForm;
