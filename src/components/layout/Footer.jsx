import React from "react";

import logoLight from "@/assets/images/logo-light.png";

import { footerCompany, footerSocial } from "@/data/data";
import { FiMapPin, FiMail, FiPhone } from "@/assets/icons/vander";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden text-gray-200 footer bg-dark-footer dark:text-gray-200 md:mt-24">
      <div className="container relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                <div className="lg:col-span-3 md:col-span-12">
                  <Link href="/" className="text-[22px] focus:outline-none">
                    <Image src={logoLight} alt="" />
                  </Link>
                  <p className="mt-6 text-gray-300">
                    Planning for a trip? We will organize your trip with the
                    best places and within best budget!
                  </p>
                  <ul className="mt-6 space-x-1 list-none">
                    {footerSocial.map((item, index) => {
                      let Icon = item.icon;
                      return (
                        <li className="inline" key={index}>
                          <Link
                            href="/"
                            target="_blank"
                            className="inline-flex items-center justify-center text-base tracking-wide align-middle border border-gray-800 rounded-md size-8 dark:border-slate-800 hover:bg-red-500 hover:text-white text-slate-300"
                          >
                            <Icon
                              className="align-middle size-4"
                              title="Buy Now"
                            ></Icon>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <div className="lg:ms-8">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Office
                    </h5>
                    <h5 className="tracking-[1px] text-gray-100 mt-6">
                      Travosy Tour & Travels
                    </h5>

                    <div className="flex mt-4">
                      <FiMapPin className="mt-1 text-red-500 size-4 me-2"></FiMapPin>
                      <div className="">
                        <h6 className="text-gray-300">
                          C/54 Northwest Freeway, <br /> Suite 558, <br />{" "}
                          Houston, USA 485
                        </h6>
                      </div>
                    </div>

                    <div className="flex mt-4">
                      <FiMail className="mt-1 text-red-500 size-4 me-2"></FiMail>
                      <div className="">
                        <a
                          href="mailto:contact@example.com"
                          className="duration-500 ease-in-out text-slate-300 hover:text-slate-400"
                        >
                          contact@example.com
                        </a>
                      </div>
                    </div>

                    <div className="flex mt-4">
                      <FiPhone className="mt-1 text-red-500 size-4 me-2"></FiPhone>
                      <div className="">
                        <a
                          href="tel:+152534-468-854"
                          className="duration-500 ease-in-out text-slate-300 hover:text-slate-400"
                        >
                          +152 534-468-854
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <div className="lg:ms-8">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Company
                    </h5>
                    <ul className="mt-6 list-none footer-list">
                      {footerCompany.map((item, index) => {
                        return (
                          <li className="mt-[10px] first:mt-0" key={index}>
                            <Link
                              href="/"
                              className="text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                            >
                              <i className="mdi mdi-chevron-right"></i>{" "}
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Newsletter
                  </h5>
                  <p className="mt-6">
                    Sign up and receive the latest tips via email.
                  </p>
                  <form>
                    <div className="grid grid-cols-1">
                      <div className="my-3">
                        <label className="form-label">
                          Write your email{" "}
                          <span className="text-red-600">*</span>
                        </label>
                        <div className="relative mt-2 form-icon">
                          <FiMail className="absolute size-4 top-3 start-4"></FiMail>
                          <input
                            type="email"
                            className="w-full h-10 px-3 py-2 text-gray-100 bg-gray-800 border-0 rounded outline-none ps-12 focus:shadow-none focus:ring-0 placeholder:text-gray-200"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        id="submitsubscribe"
                        name="send"
                        className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-red-500 rounded-md"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container relative text-center">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <p className="mb-0">
                © {new Date().getFullYear()}. All Rights Reserved
              </p>
              {/* <p className="mb-0">
                © {new Date().getFullYear()} Travosy. Design & Develop with{" "}
                <i className="text-red-600 mdi mdi-heart"></i> by{" "}
                <a
                  href="https://shreethemes.in/"
                  target="_blank"
                  className="text-reset"
                >
                  Shreethemes
                </a>
                .
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
