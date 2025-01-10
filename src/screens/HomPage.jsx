import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";
import { useCountrySuggestions } from "../hooks";
import { SkeletonList } from "../components/Skeleton";



const HomePage = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [error, setError] = useState(""); // For input validation errors
  const navigate = useNavigate();

  // Hook for debounced search
  const debouncedSearch = useCountrySuggestions(setToast, setLoading, setSuggestions);

  const handleInputChange = useCallback(
    (e) => {
      const value = e.target.value;

      // Allow only alphabets and spaces
      if (/^[a-zA-Z\s]*$/.test(value)) {
        if (value.length <= 60) {
          setQuery(value);
          setError(""); // Clear error
          debouncedSearch(value); // Trigger search suggestions
        } else {
          setError("The lengthiest country name is 56 characters. Maximum allowed is 60.");
        }
      } else {
        setError("Only alphabets are allowed.");
      }
    },
    [debouncedSearch]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!error && query) {
        navigate("/results", { state: { query } });
      }
    },
    [navigate, query, error]
  );

  const handleSuggestionClick = useCallback(
    (country) => {
      navigate("/results", { state: { query: country.name.common } });
    },
    [navigate]
  );

  const handleCloseToast = useCallback(() => setToast(null), []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Country Search
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col mb-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search for a country..."
              value={query}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              disabled={!query || error}
              className="bg-blue-600 text-white py-2 px-4 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              Search
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        <ul className="mt-4 space-y-2 max-h-48 overflow-y-auto">
          {loading
            ? Array.from({ length: 5 }).map((curren, index) => <SkeletonList key={index} />)
            : suggestions.map((country) => (
                <li
                  key={country.cca3}
                  onClick={() => handleSuggestionClick(country)}
                  className="p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  {country.name.common}
                </li>
              ))}
        </ul>
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

export default HomePage;
