import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Schema
const formSchema = z
  .object({
    firstname: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .regex(/^[A-Za-z]+$/, "Only letters are allowed"),

    lastname: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .regex(/^[A-Za-z]+$/, "Only letters are allowed"),

    email: z.string().email("Enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[0-9]/, "Must contain at least one number")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Must contain at least one special character"
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const App = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const submitOnHandler = async (data) => {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 3000));

      console.log(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#313131]">
      <form
        onSubmit={handleSubmit(submitOnHandler)}
        className="bg-white p-8 rounded-lg shadow-lg w-[420px] space-y-5"
      >
        <h1 className="text-2xl font-bold text-center">Registration Form</h1>

        {/* First Name */}
        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <input
            type="text"
            {...register("firstname")}
            className="w-full border p-2 rounded outline-none"
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstname.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-1 font-medium">Last Name</label>
          <input
            type="text"
            {...register("lastname")}
            className="w-full border p-2 rounded outline-none"
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastname.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full border p-2 rounded outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full border p-2 rounded outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 font-medium">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className="w-full border p-2 rounded outline-none"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default App;