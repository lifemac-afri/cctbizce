import React, { useState } from "react";

const BirthCertificateForm = () => {
  const [step, setStep] = useState(1); // Track the current step

  // Function to go to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Function to go to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Requirements for Birth Certificate</h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <form className="space-y-10">
          {/* Step 1: Applicant's Details */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Applicant's Details</h2>
              <div className="space-y-6">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Middle Name"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Surname"
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Date of Birth"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Place of Birth"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Region"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="District"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Residential Address of Child"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Telephone"
                />
              </div>
            </div>
          )}

          {/* Step 2: Father's Details */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Father's Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Father's Name"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Nationality"
                />
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Age"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Marital Status"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="National ID Type"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Residential Address"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Region"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="District"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Town"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="National ID Number"
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Date of Issue"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Father's Telephone"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Father's Occupation"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Level of Education"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Father's Religion"
                />
              </div>
            </div>
          )}

          {/* Step 3: Mother's Details */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Mother's Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Mother's Maiden Name"
                />
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Age"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Marital Status"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="National ID Type"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Residential Address"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Region"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="District"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Town"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="National ID Number"
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Date of Issue"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Religion"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Mother's Telephone"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Mother's Occupation"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Level of Education"
                />
              </div>
            </div>
          )}

          {/* Step 4: Informant Details */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Informant Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Informant Name"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Relationship"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Residential Address"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Region"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="District"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Town"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="ID Type"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="National ID Number"
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Date of Issue"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Informant Telephone"
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
                className="bg-primary_green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BirthCertificateForm;