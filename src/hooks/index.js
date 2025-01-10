import { useCallback, useEffect, useState } from "react";
import { debounce } from "../helper/util";
import { countrySuggestionAPI } from "../helper/apis_endpoint";

// Debounce configuration
const DEBOUNCE_DELAY = 500;

// Utility function to fetch data
const fetchData = async (url, onSuccess, onError) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    onSuccess(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    onError(error);
  }
};

// Custom hook for fetching suggestions
export const useCountrySuggestions = (setToast, setLoading, setSuggestions) => {
  return useCallback(
    debounce(async (input) => {
      if (!input) {
        setSuggestions([]); // Clear suggestions if input is empty
        return;
      }

      setLoading(true); // Start loading indicator
      fetchData(
        `${countrySuggestionAPI}/${input}`,
        (data) => {
          setSuggestions(data); // Update suggestions with fetched data
          setToast({ message: "Data fetched successfully!", type: "success" });
        },
        () => {
          setSuggestions([]); // Clear suggestions on error
          setToast({ message: "Error fetching data", type: "error" });
        }
      ).finally(() => setLoading(false)); // Stop loading indicator
    }, DEBOUNCE_DELAY),
    [setToast, setLoading, setSuggestions] // Dependencies
  );
};


// Custom hook for fetching search results
export const useFetchResults = (query) => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (!query) {
        setResults([]);
        return;
      }
  
      fetchData(
        `${countrySuggestionAPI}/${query}`,
        (data) => {
          setResults(data);
          setError(null);
        },
        () => {
          setResults([]);
          setError("No results found or an error occurred.");
        }
      );
    }, [query]);
  
    return { results, error };
  };
  