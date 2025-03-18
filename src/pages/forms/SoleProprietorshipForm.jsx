// src/pages/forms/SoleProprietorshipForm.jsx
import React, { useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../../components/modal/SuccessModal";

const SoleProprietorshipForm = () => {
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
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Upload files to Supabase Storage
      const fileUploads = Object.entries(files).map(async ([key, file]) => {
        if (file) {
          const sanitizedFileName = sanitizeFileName(file.name);
          const filePath = `sole_proprietorship_uploads/${Date.now()}_${sanitizedFileName}`;

          const { data, error } = await supabase.storage
            .from("sole_proprietorship_uploads")
            .upload(filePath, file);

          if (error) throw error;

          // Generate the public URL for the uploaded file
          const { data: publicUrlData } = supabase.storage
            .from("sole_proprietorship_uploads")
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

      // Insert data into the sole_proprietorship_applications table
      const { data, error } = await supabase
        .from("sole_proprietorship_applications")
        .insert([{ ...formData, ...fileUrls }]);

      if (error) throw error;

      setShowModal(true);
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
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  // Function to go to the previous step
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/resource_docs");
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Requirement for Sole Proprietorship
      </h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
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
                    name={`business_name_${index}`}
                    className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                    placeholder={`Proposed Business Name ${index}`}
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
                name="nature_of_business"
                className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                placeholder="Describe the nature of your business"
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Step 2: Details of the Proprietor */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Details of the Proprietor
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="full_name"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
                <select
                  name="gender"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="date"
                  name="date_of_birth"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Date of Birth"
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone_number"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="postal_address"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Postal Address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="city"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="City"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="district"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="District"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="region"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Region"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="tin"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="TIN"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="ghana_card_number"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Ghana Card Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="occupation"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Occupation"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 3: Business Address */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Business Address
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="business_house_name"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="House or Landlord’s Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_house_number"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="House Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_digital_address"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Digital Address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_street_name"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Street Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_landmark"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Landmark"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_district"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="District"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="business_region"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Region"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 4: Residential Address */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Residential Address
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="residential_house_name"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="House or Landlord’s Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="residential_house_number"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="House Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="residential_digital_address"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Digital Address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="residential_street_name"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Street Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="residential_landmark"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Landmark"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="residential_district"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="District"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="residential_region"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  placeholder="Region"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 5: Attachments */}
          {step === 5 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Attachments
              </h2>
              <div className="space-y-4">
                <label className="block text-gray-700 font-bold mb-2">
                  1. Front and Back of your Ghana Card
                </label>
                <h3 className="font-bold text-gray-600 mb-4">Front</h3>
                <input
                  type="file"
                  name="ghana_card_front"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  onChange={handleFileChange}
                  required
                />
                <h3 className="font-bold text-gray-600 mb-4">Back</h3>
                <input
                  type="file"
                  name="ghana_card_back"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
                  onChange={handleFileChange}
                  required
                />

                <label className="block text-gray-700 font-bold mb-2">
                  2. Your Signature on a Plain Sheet
                </label>
                <input
                  type="file"
                  name="signature"
                  className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary_green"
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
            {step < 5 && (
              <button
                type="button"
                onClick={nextStep}
                className="bg-primary_green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Next
              </button>
            )}
            {step === 5 && (
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

export default SoleProprietorshipForm;
