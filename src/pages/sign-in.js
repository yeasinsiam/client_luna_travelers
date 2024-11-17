import React, { useState } from "react";

import logo from "@/assets/images/logo-icon.png";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import axios from "@/utils/axios";
import { extractErrorMessages } from "@/utils/helpers";
import { useRouter } from "next/router";
import bg6 from "@/assets/images/bg/6.jpg";

export default function SignInPage() {
  const router = useRouter();
  const [isFormLoading, setIsFormLoading] = useState(false);

  const signinFormFormik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required("Username is required."),
      password: yup.string().required("Password is required."),
    }),
    onSubmit: ({ username, password }) => {
      setIsFormLoading(true);
      const loadingToast = toast.loading("Signing in please wait...");
      axios
        .post("/auth/login/", {
          username,
          password,
        })
        .then((response) => {
          console.log(response.data);
          toast.success("Welcome , Sign in successful.");
          router.push("/");
        })
        .catch((error) => {
          console.error(error);

          if (error.response.status == 401) {
            // extractErrorMessages(error.response.data).map((errorMessage) =>
            //   toast.error(errorMessage)
            // );
            toast.error(error.response.data.detail);
          } else {
            toast.error("Something went wrong while sign in.");
          }
        })
        .finally(() => {
          toast.dismiss(loadingToast);
          setIsFormLoading(false);
        });
    },
  });

  return (
    <section className="relative flex items-center overflow-hidden md:h-screen py-36 zoom-image">
      <div
        style={{
          background: `url("${bg6.src}")`,
        }}
        className="absolute inset-0 bg-center bg-no-repeat bg-cover image-wrap z-1"
      ></div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"
        id="particles-snow"
      ></div>
      <div className="container relative z-3">
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
            <Link href="/">
              <Image src={logo} className="mx-auto" alt="" />
            </Link>
            <h5 className="my-6 text-xl font-semibold">Sign In</h5>
            <form
              className="text-start"
              onSubmit={signinFormFormik.handleSubmit}
            >
              <div className="grid grid-cols-1">
                <div className="mb-4">
                  <label className="font-semibold">Username:</label>
                  <input
                    type="text"
                    aria-invalid={
                      signinFormFormik.errors.username &&
                      signinFormFormik.touched.username
                    }
                    className=" aria-[invalid='true']:border-red-500 aria-[invalid='true']:text-red-500 w-full h-10 px-3 py-2 mt-3 bg-transparent border border-gray-100 rounded outline-none aria- dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                    placeholder="Enter your username"
                    name="username"
                    onChange={signinFormFormik.handleChange}
                    onBlur={signinFormFormik.handleBlur}
                    value={signinFormFormik.values.username}
                  />
                  {signinFormFormik.errors.username &&
                    signinFormFormik.touched.username && (
                      <span className="text-red-500">
                        {signinFormFormik.errors.username}
                      </span>
                    )}
                </div>

                <div className="mb-4">
                  <label className="font-semibold">Password:</label>
                  <input
                    type="password"
                    aria-invalid={
                      signinFormFormik.errors.password &&
                      signinFormFormik.touched.password
                    }
                    className="aria-[invalid='true']:border-red-500 aria-[invalid='true']:text-red-500 w-full h-10 px-3 py-2 mt-3 bg-transparent border border-gray-100 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                    placeholder="Enter Password"
                    name="password"
                    onChange={signinFormFormik.handleChange}
                    onBlur={signinFormFormik.handleBlur}
                    value={signinFormFormik.values.password}
                  />
                  {signinFormFormik.errors.password &&
                    signinFormFormik.touched.password && (
                      <span className="text-red-500">
                        {signinFormFormik.errors.password}
                      </span>
                    )}
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    disabled={isFormLoading}
                    className="inline-block w-full px-5 py-2 text-base tracking-wide text-center text-white align-middle duration-500 bg-red-500 rounded-md"
                  >
                    Sign In
                  </button>
                </div>

                <div className="text-center">
                  <span className="text-slate-400 me-2">
                    Don{"'"}t have an account ?{" "}
                  </span>{" "}
                  <Link
                    href="/sign-up"
                    className="inline-block font-bold text-black dark:text-white"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
