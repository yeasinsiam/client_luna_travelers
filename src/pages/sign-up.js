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

export default function SignUpPage() {
  const router = useRouter();
  const [isFormLoading, setIsFormLoading] = useState(false);

  const registerFormFormik = useFormik({
    initialValues: {
      //   name: "",
      //   email: "",
      //   phoneNumber: "",
      username: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: yup.object().shape({
      //   name: yup.string().required("First name is required."),
      //   email: yup.string().email("Please enter a valid email."),
      //   phoneNumber: yup
      //     .string()
      //     .required("Phone number is required.")
      //     .matches(
      //       /^(?:\+88|88)?(01[3-9]\d{8})$/,
      //       "Please enter a valid Bangladeshi phone number."
      //     ),
      username: yup.string().required("Username is required."),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required."),
      confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match.")
        .required("Confirm Password is required."),
    }),
    onSubmit: ({ username, password }) => {
      setIsFormLoading(true);

      const loadingToast = toast.loading("Signing up please wait...");
      axios
        .post("/auth/register/", {
          username,
          password1: password,
          password2: password,
        })
        .then((response) => {
          console.log(response.data);
          toast.success("Your account is created, Please login now.");
          router.push("/login");
        })
        .catch((error) => {
          console.error(error);

          if (error.response.status == 400) {
            extractErrorMessages(error.response.data).map((errorMessage) =>
              toast.error(errorMessage)
            );
          } else {
            toast.error("Something went wrong while registering.");
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
            <h5 className="my-6 text-xl font-semibold">Signup</h5>
            <form
              className="text-start"
              onSubmit={registerFormFormik.handleSubmit}
            >
              <div className="grid grid-cols-1">
                <div className="mb-4">
                  <label className="font-semibold">Username:</label>
                  <input
                    type="text"
                    aria-invalid={
                      registerFormFormik.errors.username &&
                      registerFormFormik.touched.username
                    }
                    className=" aria-[invalid='true']:border-red-500 aria-[invalid='true']:text-red-500 w-full h-10 px-3 py-2 mt-3 bg-transparent border border-gray-100 rounded outline-none aria- dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                    placeholder="Enter your username"
                    name="username"
                    onChange={registerFormFormik.handleChange}
                    onBlur={registerFormFormik.handleBlur}
                    value={registerFormFormik.values.username}
                  />
                  {registerFormFormik.errors.username &&
                    registerFormFormik.touched.username && (
                      <span className="text-red-500">
                        {registerFormFormik.errors.username}
                      </span>
                    )}
                </div>
                {/* <div className="mb-4">
                  <label className="font-semibold" htmlFor="RegisterName">
                    Your Name:
                  </label>
                  <input
                    id="RegisterName"
                    type="text"
                    className="w-full h-10 px-3 py-2 mt-3 bg-transparent border border-gray-100 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                    placeholder="Harry"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="font-semibold" htmlFor="LoginEmail">
                    Email Address:
                  </label>
                  <input
                    id="LoginEmail"
                    type="email"
                    className="w-full h-10 px-3 py-2 mt-3 bg-transparent border border-gray-100 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                    placeholder="name@example.com"
                    required
                  />
                </div> */}

                <div className="mb-4">
                  <label className="font-semibold">Password:</label>
                  <input
                    type="password"
                    aria-invalid={
                      registerFormFormik.errors.password &&
                      registerFormFormik.touched.password
                    }
                    className="aria-[invalid='true']:border-red-500 aria-[invalid='true']:text-red-500 w-full h-10 px-3 py-2 mt-3 bg-transparent border border-gray-100 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                    placeholder="Enter Password"
                    name="password"
                    onChange={registerFormFormik.handleChange}
                    onBlur={registerFormFormik.handleBlur}
                    value={registerFormFormik.values.password}
                  />
                  {registerFormFormik.errors.password &&
                    registerFormFormik.touched.password && (
                      <span className="text-red-500">
                        {registerFormFormik.errors.password}
                      </span>
                    )}
                </div>
                <div className="mb-4">
                  <label className="font-semibold">Confirm Password:</label>
                  <input
                    type="password"
                    aria-invalid={
                      registerFormFormik.errors.confirm_password &&
                      registerFormFormik.touched.confirm_password
                    }
                    className="aria-[invalid='true']:border-red-500 aria-[invalid='true']:text-red-500 w-full h-10 px-3 py-2 mt-3 bg-transparent border border-gray-100 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                    placeholder="Enter Confirm Password"
                    name="confirm_password"
                    onChange={registerFormFormik.handleChange}
                    onBlur={registerFormFormik.handleBlur}
                    value={registerFormFormik.values.confirm_password}
                  />
                  {registerFormFormik.errors.confirm_password &&
                    registerFormFormik.touched.confirm_password && (
                      <span className="text-red-500">
                        {registerFormFormik.errors.confirm_password}
                      </span>
                    )}
                </div>

                <div className="mb-4">
                  <div className="flex items-center w-full mb-0">
                    <input
                      className="text-red-500 border-gray-400 rounded form-checkbox dark:border-gray-800 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                      type="checkbox"
                      required
                      id="AcceptT&amp;C"
                    />
                    <label
                      className="form-check-label text-slate-400"
                      htmlFor="AcceptT&amp;C"
                    >
                      I Accept{" "}
                      <Link href="" className="text-red-500">
                        Terms And Condition
                      </Link>
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    disabled={isFormLoading}
                    className="inline-block w-full px-5 py-2 text-base tracking-wide text-center text-white align-middle duration-500 bg-red-500 rounded-md"
                  >
                    Register
                  </button>
                </div>

                <div className="text-center">
                  <span className="text-slate-400 me-2">
                    Already have an account ?{" "}
                  </span>{" "}
                  <Link
                    href="/sign-in"
                    className="inline-block font-bold text-black dark:text-white"
                  >
                    Sign in
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
