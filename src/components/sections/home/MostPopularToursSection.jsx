import { packages } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMapPin } from "react-icons/fi";
import useSWR from "swr";

export default function MostPopularToursSection({ tours }) {
  return (
    <section className="relative py-8 overflow-hidden md:py-12">
      <div className="container relative ">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
            Most Popular Tours
          </h3>

          <p className="max-w-xl mx-auto text-slate-400">
            Planning for a trip? We will organize your trip with the best places
            and within best budget!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {tours.slice(0, 8).map((item, index) => {
            return (
              <div
                className="rounded-md shadow group dark:shadow-gray-700"
                key={index}
              >
                <div className="md:flex md:items-center">
                  <div className="relative mx-3 mt-3 overflow-hidden shadow md:shrink-0 md:rounded-md rounded-t-md dark:shadow-gray-700 md:m-3">
                    <div className="w-48 h-56">
                      <Image
                        src={item.banner_image}
                        className="object-cover w-full h-full duration-500 scale-125 group-hover:scale-100"
                        alt=""
                        fill
                      />
                    </div>
                    {/* {item.tagText && (
                      <div className="absolute top-0 p-4 start-0">
                        <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                          {item.tagText}
                        </span>
                      </div>
                    )} */}

                    {/* <div className="absolute top-0 p-4 end-0">
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center bg-white rounded-full shadow size-8 dark:bg-slate-900 dark:shadow-gray-800 text-slate-300 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"
                      >
                        <i className="mdi mdi-heart text-[20px] align-middle"></i>
                      </Link>
                    </div> */}
                  </div>

                  <div className="w-full p-4">
                    <p className="flex items-center mb-2 font-medium text-slate-400">
                      <FiMapPin className="text-red-500 size-4 me-1"></FiMapPin>{" "}
                      {item.destination.name}
                    </p>
                    <Link
                      href={{
                        pathname: "/tours/[tourId]",
                        query: { tourId: item.id },
                      }}
                      className="text-lg font-medium duration-500 ease-in-out hover:text-red-500"
                    >
                      {item.title}
                    </Link>

                    <p className="mt-2 text-sm text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras sollicitudin, tellus vi
                    </p>
                    {/* <div className="flex items-center mt-2">
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
                    </div> */}

                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 dark:border-gray-800">
                      <h5 className="text-lg font-medium text-red-500">
                        ${parseInt(item.price).toLocaleString()}
                      </h5>

                      <Link
                        href={{
                          pathname: "/tours/[tourId]",
                          query: { tourId: item.id },
                        }}
                        className="text-slate-400 hover:text-red-500"
                      >
                        Explore Now <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          {/* <Link
            href="/grid-right-sidebar"
            className="inline-block text-slate-400 hover:text-red-500"
          >
            See More Tours <i className="align-middle mdi mdi-arrow-right"></i>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
