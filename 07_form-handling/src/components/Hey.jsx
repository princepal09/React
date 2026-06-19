import React from "react";
import { useForm } from "react-hook-form";

const Hey = () => {
  const {
    handleSubmit,
    register, reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitHandler = (data) => {
    const formData = new FormData()
    formData.append("name", data?.name)
    formData.append("password", data?.password)
    formData.append("file", data?.file[0])

    for(const[key, value] of formData.entries()){
        console.log(`${key} : ${value}`)
    }

    reset() 
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-slate-800">
          Registration Form
        </h2>

        {/* Name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Enter your name
          </label>
          <input
            {...register("name", {
              required: "Enter your name please",
            })}
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Enter your password
          </label>
          <input
            {...register("password", {
              required: "Enter your password please",
            })}
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* File */}
        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Upload File
          </label>
          <input
            {...register("file", {
              required: "Please select a file",
            })}
            type="file"
            className="w-full border rounded-lg p-2 file:mr-4 file:px-4 file:py-2 file:border-0 file:bg-indigo-100 file:text-indigo-700 file:rounded-md hover:file:bg-indigo-200"
          />
          {errors.file && (
            <p className="mt-1 text-sm text-red-500">
              {errors.file.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-indigo-300"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Hey;