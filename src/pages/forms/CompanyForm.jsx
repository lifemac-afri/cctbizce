"use client";
import React, { useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../../components/modal/SuccessModal";


const CompanyForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [files, setFiles] = useState({
    ghana_card_front: null,
    ghana_card_back: null,
    signature: null,
  });
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    setFiles({ ...files, [name]: fileList[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Function to sanitize file names
  const sanitizeFileName = (fileName) => {
    return fileName.replace(/[^a-zA-Z0-9\-_.]/g, "_");
  };


    try {


      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay

      // Upload files to Supabase Storage
      const fileUploads = Object.entries(files).map(async ([key, file]) => {
        if (file) {
          const sanitizedFileName = sanitizeFileName(file.name);
          const filePath = `company_uploads/${Date.now()}_${sanitizedFileName}`;
          const { data, error } = await supabase.storage
            .from("company_uploads")
            .upload(filePath, file);

          if (error) throw error;

          // Generate the public URL for the uploaded file
          const { data: publicUrlData } = supabase.storage
            .from("company_uploads")
            .getPublicUrl(filePath);

          return { [key]: publicUrlData.publicUrl }; // Save the public URL
        }
        return { [key]: null };
      });

      // Wait for all file uploads to complete
      const uploadedFiles = await Promise.all(fileUploads);
      const fileUrls = uploadedFiles.reduce(
        (acc, curr) => ({ ...acc, ...curr }),
        {}
      );

      // Insert data into the company_applications table
      const { data, error } = await supabase
        .from("company_applications")
        .insert([{ ...formData, ...fileUrls }]);

      if (error) throw error;

      setShowModal(true)
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Failed to submit form: ${error.message}`);
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


  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/resource_docs");
    window.scrollTo({top: 0, behavior:"auto"})
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Requirement for Company
      </h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Proposed Business Name and Nature of Business */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Proposed Business Name
              </h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                    placeholder={`Proposed Business Name ${index}`}
                    name={`business_name_${index}`}
                    onChange={handleChange}
                    required
                  />
                ))}
              </div>

              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">
                Nature of Business
              </h2>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                placeholder="Describe the nature of your business"
                name="nature_of_business"
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Step 2: Business Address and Postal Address */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 focus:outline-none focus:ring-2 focus:ring-primary_green">
                Business Address
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="business_house_name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business House Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_house_number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business House Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_digital_address"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business Digital Address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_street_name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business Street Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_landmark"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business Landmark"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_district"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business District"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_region"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business Region"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Start of Business Postal Address and Business Contact */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">
                Business Postal Address
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="business_postal_co"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business Postal CO"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_postal_box_number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business Postal Box Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_postal_prefix"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business Postal Prefix"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_postal_town"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business Postal Town"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_postal_region"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business Postal Region"
                  onChange={handleChange}
                  required
                />
                <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">
                  Business Contact
                </h2>
                <input
                  type="text"
                  name="business_phone_number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business Phone Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_mobile_number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business Mobile Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="business_email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Business Email"
                  onChange={handleChange}
                  required
                />
                <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">
                  Stated Capital
                </h2>
                <input
                  type="text"
                  name="stated_capital"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Stated Capital"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 4: Director Information */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Director Information
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="director_full_name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Director Full Name"
                  onChange={handleChange}
                  required
                />
                <select
                  name="director_gender"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  name="director_place_of_birth"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Place of Birth"
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  name="director_date_of_birth"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Date of Birth"
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="director_phone_number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="director_email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="director_postal_address"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Postal Address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="director_city"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="City"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="director_district"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="District"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="director_region"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Region"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="director_tin"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="TIN"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="director_ghana_card_number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Ghana Card Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="director_occupation"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Occupation"
                  onChange={handleChange}
                  required
                />
                {/* End of business director details */}
              </div>
            </div>
          )}

          {/* Step 5: Residential and Occupation Data */}
          {step === 5 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Residential Address
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="residential_house_name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Residential House Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="residential_house_number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Residential House Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="residential_digital_address"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Residential Digital Address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="residential_street_name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Residential Street Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="residential_landmark"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Residential Landmark"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="residential_district"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Residential District"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="residential_region"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Residential Region"
                  onChange={handleChange}
                  required
                />

                {/* End of residential address */}
              </div>
            </div>
          )}

          {/* Step 6: Occupational Address */}
          {step === 6 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Occupational Address
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="occupational_house_name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Occupational House Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="occupational_house_number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Occupational House Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="occupational_digital_address"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Occupational Digital Address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="occupational_street_name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Occupational Street Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="occupational_landmark"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Occupational Landmark"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="occupational_district"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Occupational District"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="occupational_region"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Occupational Region"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="percentage_of_share"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Percentage of Share"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Start of Attachments */}
          {step === 7 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Attachments
              </h2>
              <div className="space-y-4">
                <label className="block text-gray-700 font-bold mb-2">
                  1. Front and Back of your Ghana Card
                </label>
                <h3  className="font-bold text-gray-600 mb-4">Front</h3>
                <input
                  type="file"
                  name="ghana_card_front"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  onChange={handleFileChange}
                  required
                />
                <h3 className="font-bold text-gray-600 mb-4">Back</h3>
                <input
                  type="file"
                  name="ghana_card_back"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  onChange={handleFileChange}
                  required
                />

                <label className="block text-gray-700 font-bold mb-2">
                  2. Your Signature on a Plain Sheet
                </label>
                <input
                  type="file"
                  name="signature"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_green"
                  onChange={handleFileChange}
                  required
                />

                <p className="text-sm text-gray-600">
                  <strong>NB:</strong> Provide your mother’s maiden name if you
                  don’t have TIN.
                </p>
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
            {step < 7 && (
              <button
                type="button"
                onClick={nextStep}
                className="bg-primary_green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Next
              </button>
            )}
            {step === 7 && (
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

export default CompanyForm;
