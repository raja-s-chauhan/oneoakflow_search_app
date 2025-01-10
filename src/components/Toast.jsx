import React, { useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // Automatically close toast after 4 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 right-5 p-4 w-96 rounded-md text-white ${
        type === "error" ? "bg-red-500" : "bg-green-500"
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-3 text-lg">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;
