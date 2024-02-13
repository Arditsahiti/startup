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
    <div className="halo mb-4">
      {/* Registration Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full mx-auto bg-white p-8 rounded-2xl shadow-2xl"
      >
        <h1>Register:</h1>
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
              {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
              className="input"
            />
          </div>
          {errors.email && (
            <span className="text-xs text-red-500">This field is required and should be a valid email address</span>
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
              {...register("password", { required: true, minLength: 8 })}
              className="input"
            />
          </div>
          {errors.password && (
            <span className="text-xs text-blue-500">
              This field is required and should be at least 8 characters long
            </span>
          )}
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password:
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="confirmPassword"
              type="password"
              // {...register("confirmPassword", { required: true, validate: value => value === watch('password') })}
              className="input"
            />
          </div>
          {errors.confirmPassword && (
            <span className="text-xs text-blue-500">
              This field is required and should match the password
            </span>
          )}
        </div>

        {/* Submit Button */}
        <input type="submit" className="buton" value="Register" />
      </form>
    </div>
  );
}

export default RegistrationForm;
