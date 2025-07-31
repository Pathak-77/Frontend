import React from "react";

const Spinner = () => {
   return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-75">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="w-16 h-16"
      >
        <path
          d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
          strokeLinecap="round"
          strokeDasharray="192.4416961669922 64.14723205566406"
          strokeWidth="7"
          stroke="#de5c8a"
          fill="none"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;256.58892822265625"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
