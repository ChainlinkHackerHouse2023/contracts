import React from "react";

const CustomDropdown = ({ label, options, onChange }) => {
  return (
    <div className="relative flex flex-col justify-between bg-[#1B1B1B] p-2 pb-4 rounded  mb-4">
      <label style={{ color: "#5F5F5F" }} className="text-sm">
        {label}
      </label>
      <select
        onChange={onChange}
        className="w-full text-lg text-white bg-transparent appearance-none"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5F779E]">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M6.293 9.293L10 13l3.707-3.707a.999.999 0 111.414 1.414l-4 4a.999.999 0 01-1.414 0l-4-4a.997.997 0 010-1.414.999.999 0 011.414 0z" />
        </svg>
      </div>
    </div>
  );
};

export default CustomDropdown;
