import React from "react";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Success!</h2>
        <p className="text-gray-700 mb-6">
          Your form has been successfully submitted. We will follow up with you shortly.
        </p>
        <button
          onClick={onClose}
          className="bg-primary_green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;