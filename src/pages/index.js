import React, { useState } from "react";

import Tagline from "@/components/layout/Header/tagline";
import Navbar from "@/components/layout/Header/navbar";
// import Form from "@/components/form";
import TopDestinationOne from "@/components/top-destination-one";
// import About from "@/components/about";
// import Client from "@/components/client";
// import Blogs from "@/components/blogs";
import Footer from "@/components/layout/Footer";
// import Switcher from "@/components/switcher";

import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import { packages } from "@/data/data";

import { FiMapPin } from "@/assets/icons/vander";
import Image from "next/image";

export default function Index() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Tagline />
      <Navbar
        navclass="defaultscroll is-sticky tagline-height"
        navlight={true}
        manuclass="justify-end nav-light"
      />
      <section className="relative md:pt-72 md:pb-60 py-36 table w-full items-center bg-[url('../../assets/images/bg/1.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="order-2 lg:col-span-8 md:col-span-7 md:order-1">
              <h5 className="text-3xl text-white font-dancing">
                Beauty of Discovers
              </h5>
              <h4 className="mt-5 mb-6 text-4xl font-bold leading-normal text-white lg:leading-normal lg:text-6xl">
                Let's Leave The Road, <br /> And Take The Travosy
              </h4>
              <p className="max-w-xl text-xl text-white/70">
                Planning for a trip? We will organize your trip with the best
                places and within best budget!
              </p>
            </div>

            <div className="order-1 lg:col-span-4 md:col-span-5 md:text-center md:order-2">
              <a
                to="#!"
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center w-20 h-20 mx-auto text-red-500 duration-500 ease-in-out bg-white rounded-full shadow-lg lightbox lg:h-24 lg:w-24 dark:shadow-gray-800 hover:bg-red-500 hover:text-white"
              >
                <i className="inline-flex items-center justify-center text-3xl mdi mdi-play"></i>
              </a>
            </div>
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen}
              videoId="S_CGed6E610"
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
      </section>

      <div className="container relative -mt-16 z-1">{/* <Form /> */}</div>

      <section className="relative py-16 overflow-hidden md:py-24">
        <TopDestinationOne />

        <div className="container relative mt-16 md:mt-24">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
              Tours Packages
            </h3>

            <p className="max-w-xl mx-auto text-slate-400">
              Planning for a trip? We will organize your trip with the best
              places and within best budget!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3 md:grid-cols-2">
            {packages.slice(0, 6).map((item, index) => {
              return (
                <div
                  className="rounded-md shadow group dark:shadow-gray-700"
                  key={index}
                >
                  <div className="relative mx-3 mt-3 overflow-hidden shadow rounded-t-md dark:shadow-gray-700">
                    <Image
                      src={item.image}
                      className="duration-500 scale-125 group-hover:scale-100"
                      alt="cat"
                    />
                    {item.tagText && (
                      <div className="absolute top-0 p-4 start-0">
                        <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                          {item.tagText}
                        </span>
                      </div>
                    )}

                    <div className="absolute top-0 p-4 end-0">
                      <a
                        to="#"
                        className="inline-flex items-center justify-center bg-white rounded-full shadow size-8 dark:bg-slate-900 dark:shadow-gray-800 text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"
                      >
                        <i className="mdi mdi-heart text-[20px] align-middle"></i>
                      </a>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="flex items-center mb-2 font-medium text-slate-400">
                      <FiMapPin className="text-red-500 size-4 me-1"></FiMapPin>{" "}
                      {item.place}
                    </p>
                    <a
                      to={`/tour-detail-one/${item.id}`}
                      className="text-lg font-medium duration-500 ease-in-out hover:text-red-500"
                    >
                      {item.title}
                    </a>

                    <div className="flex items-center mt-2">
                      <span className="text-slate-400">Rating:</span>
                      <ul className="space-x-1 text-lg font-medium list-none text-amber-400 ms-2">
                        <li className="inline">
                          <i className="align-middle mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="align-middle mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="align-middle mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="align-middle mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="align-middle mdi mdi-star"></i>
                        </li>
                        <li className="inline text-sm text-black dark:text-white">
                          5.0(30)
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 dark:border-gray-800">
                      <h5 className="text-lg font-medium text-red-500">
                        $ 58 / Day
                      </h5>

                      <a to="" className="text-slate-400 hover:text-red-500">
                        Explore Now <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <a
              to="/grid-right-sidebar"
              className="inline-block text-slate-400 hover:text-red-500"
            >
              See More Tours{" "}
              <i className="align-middle mdi mdi-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* <About />

        <Client />

        <Blogs /> */}
      </section>
      <Footer />
      {/* <Switcher /> */}
    </>
  );
}
