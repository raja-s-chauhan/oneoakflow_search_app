import React from "react";

const SkeletonCard = () => (
  <div className="max-w-sm bg-gray-200 rounded-lg shadow-lg animate-pulse overflow-hidden">
    <div className="w-full h-48 bg-gray-300"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
    </div>
  </div>
);

const SkeletonList = () => {
  return <li className="p-2 bg-gray-200 rounded-lg animate-pulse"></li>;
};

export { SkeletonCard, SkeletonList };
