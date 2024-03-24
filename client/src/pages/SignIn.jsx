import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAxios, postAxios } from "../utils/Axios";

function SignIn() {
  const form = useForm({
    username: "",
    password: "",
    email: "",
  });

  const { register, handleSubmit } = form;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    console.log("on submit");
    try {
      setLoading(true);
      const res = await postAxios("/api/auth/signin", {
        ...formData,
      });
      const data = res;
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-4"
      >
       
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          {...register("email", {
            required: {
              value: true,
              message: "email is required",
            },
          })}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          {...register("password", {
            required: {
              value: true,
              message: "password is required",
            },
          })}
        />

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
      {error && <p className="test-red-500 mt-5">{error}</p>}
    </div>
  );
}

export default SignIn;
