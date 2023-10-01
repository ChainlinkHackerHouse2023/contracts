import React from "react";

const CustomInput = ({ label, type, placeholder, onChange }) => {
  return (
    <div className="relative flex flex-col justify-between bg-[#1B1B1B] p-2 pb-4 rounded mb-4">
      <label style={{ color: "#5F5F5F" }} className="text-sm">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full text-lg text-white bg-transparent appearance-none"
      />
    </div>
  );
};

export default CustomInput;
