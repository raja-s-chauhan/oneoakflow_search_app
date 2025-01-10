import React, { useState, useEffect, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import { useFetchResults } from "../hooks";
import CountryCard from "../components/CountryCard";
import { SkeletonCard } from "../components/Skeleton";
import Toast from "../components/Toast"; // Import the Toast component

const ResultsPage = () => {
  const location = useLocation();
  const { query } = location.state || {};
  const [showGoTopButton, setShowGoTopButton] = useState(false);
  const [loading, setLoading] = useState(true); // Track loading state
  const [toast, setToast] = useState(null); // State for toast messages
  const { results, error } = useFetchResults(query);

  // Update loading state and show toast messages
  useEffect(() => {
    if (results?.length > 0) {
      setLoading(false);
      setToast({ message: "Results fetched successfully!", type: "success" });
    } else if (error) {
      setLoading(false);
      setToast({ message: `Failed to fetch results: ${error}`, type: "error" });
    }
  }, [results, error]);

  // Close the toast
  const handleCloseToast = () => setToast(null);

  // Scroll event handler
  const handleScroll = useCallback(() => {
    setShowGoTopButton(window.scrollY > 300);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 inline-block mb-8"
        >
          &larr; Back to Home
        </Link>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : error ? (
          <div className="min-h-screen flex flex-row items-center justify-center py-12 px-6">
          <p className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-red-600 text-center">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>
        )}

        {showGoTopButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
          >
            ↑
          </button>
        )}
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleCloseToast}
        />
      )}
    </div>
  );
};

export default ResultsPage;
