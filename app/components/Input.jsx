import { ErrorMessage } from "formik";
import React from "react";

export default function Input({
  label,
  name,
  handleChange,
  handleBlur,
  value,
  placeholder = "",
  className = "",
}) {
  return (
    <div className={`sm:col-span-2 ${className}`}>
      <label
        htmlFor="region"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-2 ">
        <input
          type="text"
          name={name}
          id={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder}
          className="block w-full placeholder:text-xs  rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
        />
      </div>
      <ErrorMessage name={name}>
        {(msg) => <div className="mt-2 text-xs text-rose-500">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
