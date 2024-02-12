import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
     resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    // Process registration data here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      {/* Registration Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full mx-auto bg-white p-8 rounded-2xl shadow-2xl"
      >
        {/* Logo and Title */}
        <h1 className="text-2xl font-bold  mb-6 text-center">
          <img src="/logo192.png" alt="Logo" className="mx-auto w-20 h-20" />
        </h1>
        <h1>Register</h1>
        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="email"
              type="email"
              {...register("email")}
              className="block w-full pl-10 pr-3 py-2 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          {errors.email && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="password"
              type="password"
              {...register("password")}
              className="block w-full pl-10 pr-3 py-2 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          {errors.password && (
            <span className="text-xs text-blue-500">This field is required</span>
          )}
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg cursor-pointer transition ease-in-out duration-150 transform hover:-translate-y-1"
          value="Register"
        />
      </form>
    </div>
  );
}

export default RegistrationForm;
