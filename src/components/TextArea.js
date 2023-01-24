import React from "react";
import Error from "./Error";

const TextArea = React.forwardRef(
  ({ label, isRequired, onChangeText, error }, ref) => (
    <div className="mt-6">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
        {label}
        {isRequired && <span className="text-red-600">*</span>}
      </label>
      <textarea
        ref={ref}
        onChange={onChangeText}
        rows="4"
        className="block p-2.5 w-full h-72 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Your message..."
      ></textarea>
      {error && <Error message={error.message} />}
    </div>
  )
);
export default TextArea;
