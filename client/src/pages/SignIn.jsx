import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAxios, postAxios } from "../utils/Axios";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInSuccess, signInStart } from "../redux/userSlice";
import Cookies from "js-cookie";

function SignIn() {
  const form = useForm({
    username: "",
    password: "",
    email: "",
  });

  const { register, handleSubmit } = form;
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    console.log("on submit");
    try {
      dispatch(signInStart());
      const res = await postAxios("/api/auth/signin", {
        ...formData,
      });
      const data = res;

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      Cookies.set("access_token");
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log({ error });
      dispatch(signInFailure(error.message));
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
