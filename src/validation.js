/* damage report form validation rules */
export const rules = {
  brand: {
    required: "Vehicle brand is required",
  },
  model: {
    required: "Vehicle model is required",
  },
  number: {
    required: "Vehicle number is required",
  },
  uuid: {
    required: "Vehicle image is required",
  },
  description: {
    required: "Description is required",
  },
  name: {
    required: "Customer name is required",
  },
  email: {
    required: "Customer email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  mobile: {
    required: "Customer mobile number is required",
  },
};
