import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState , useEffect} from "react";

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().email().required(),
});

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
     resolver: yupResolver(schema) });

  const [submittedData, setSubmittedData] = useState('')

 useEffect(() => {
   if (submittedData) {
     console.log("Your data's are:", submittedData);
   }
 }, [submittedData]);
 
  const onSubmit = (data) => {
    setSubmittedData(`Name: ${data.name}, Surname: ${data.surname}, Email: ${data.email}`);
    reset();
  };

  return (
    <div className="halo mb-4">
      {/* Registration Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full mx-auto bg-white p-8 rounded-2xl shadow-2xl"
      >
        <h1>Register:</h1>

        {/* Name Input */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <div className="">
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              className="input"
            />
          </div>
          {errors.name && (
            <span className="text-md text-red-500">This field is required</span>
          )}
        </div>

        {/* Surname Input */}
        <div className="mb-4">
          <label
            htmlFor="surname"
            className="block text-sm font-medium text-gray-700"
          >
            Surname:
          </label>
          <div className="">
            <input
              id="surname"
              type="text"
              {...register("surname", { required: true })}
              className="input"
            />
          </div>
          {errors.surname && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <div className="">
            <input
              id="email"
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
              className="input"
            />
          </div>
          {errors.email && (
            <span className="text-xs text-red-500">
              This field is required and should be a valid email address
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="buton" value="Register" >Register</button>
      </form>

      {/* Submitted Data */}
      {submittedData && (
        <div className="mt-4 p-32 ml-4">
          <h2 className="text-2xl font-bold mb-4">Submitted Data:</h2>
          <div className="bg-gray-100 p-4 rounded shadow">
            <pre className="text-lg">{submittedData}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;