import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {country.name.common}
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Official Name:</strong> {country.name.official}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
        </p>
        <p className="text-gray-700">
          <strong>Currency:</strong>{" "}
          {Object.values(country.currencies || {}).map((currency) => (
            <span key={currency.name}>
              {currency.name} ({currency.symbol})
            </span>
          )) || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
