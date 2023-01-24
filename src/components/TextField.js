import React from "react";
import { Controller } from "react-hook-form";
import Error from "./Error";

const TextField = React.forwardRef(
  (
    { label, isRequired, placeholder, error, onChangeText, hidden = false },
    ref
  ) => (
    <div className={`mt-6 ${hidden && "hidden" }`}>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
        {label}
        {isRequired && <span className="text-red-600">*</span>}
      </label>
      <input
        ref={ref}
        hidden={hidden}
        placeholder={placeholder}
        onChange={onChangeText}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {error && <Error message={error.message} />}
    </div>
  )
);
export default TextField;
