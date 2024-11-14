import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function InclusionsTab() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="p-5 mt-8 bg-white border border-gray-200 rounded-lg shadow-lg md:grid-cols-2 md:mt-12">
      <h4 className="text-lg font-bold leading-normal text-red-500">
        What{"'"}s Included
      </h4>
      <div className="mt-3">
        <div className="relative mt-4 overflow-hidden rounded-md shadow dark:shadow-gray-800 first:mt-0">
          <h2 className="text-base font-semibold">
            <button
              type="button"
              className={`flex justify-between items-center p-3 text-sm w-full font-medium text-start ${
                activeIndex === 1
                  ? "bg-gray-50 dark:bg-slate-800 text-red-500"
                  : ""
              }`}
              onClick={() => setActiveIndex(1)}
            >
              <span className="flex items-center gap-2">
                <FaRegCheckCircle className="text-green-300 size-5" /> Flights
              </span>
              <FiChevronUp
                className={`size-4 shrink-0 ${
                  activeIndex === 1 ? "" : "rotate-180"
                }`}
              ></FiChevronUp>
            </button>
          </h2>
          <div class={activeIndex === 1 ? "" : "hidden"}>
            <div className="p-5">
              <p className="text-sm text-slate-400 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                eius.
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}

        <div className="relative mt-4 overflow-hidden rounded-md shadow dark:shadow-gray-800 first:mt-0">
          <h2 className="text-base font-semibold">
            <button
              type="button"
              className={`flex justify-between items-center p-3 text-sm w-full font-medium text-start ${
                activeIndex === 2
                  ? "bg-gray-50 dark:bg-slate-800 text-red-500"
                  : ""
              }`}
              onClick={() => setActiveIndex(2)}
            >
              <span className="flex items-center gap-2">
                <FaRegCheckCircle className="text-green-300 size-5" /> Guide
              </span>
              <FiChevronUp
                className={`size-4 shrink-0 ${
                  activeIndex === 2 ? "" : "rotate-180"
                }`}
              ></FiChevronUp>
            </button>
          </h2>
          <div class={activeIndex === 2 ? "" : "hidden"}>
            <div className="p-5">
              <p className="text-sm text-slate-400 dark:text-gray-400">
                Full guidance
              </p>
            </div>
          </div>
        </div>
        {/* 3 */}

        <div className="relative mt-4 overflow-hidden rounded-md shadow dark:shadow-gray-800 first:mt-0">
          <h2 className="text-base font-semibold">
            <button
              type="button"
              className={`flex justify-between items-center p-3 text-sm w-full font-medium text-start ${
                activeIndex === 3
                  ? "bg-gray-50 dark:bg-slate-800 text-red-500"
                  : ""
              }`}
              onClick={() => setActiveIndex(3)}
            >
              <span className="flex items-center gap-2">
                <FaRegCheckCircle className="text-green-300 size-5" /> Insurance
              </span>
              <FiChevronUp
                className={`size-4 shrink-0 ${
                  activeIndex === 3 ? "" : "rotate-180"
                }`}
              ></FiChevronUp>
            </button>
          </h2>
          <div class={activeIndex === 3 ? "" : "hidden"}>
            <div className="p-5">
              <p className="text-sm text-slate-400 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                ad.s
              </p>
            </div>
          </div>
        </div>
        {/* 4 */}

        <div className="relative mt-4 overflow-hidden rounded-md shadow dark:shadow-gray-800 first:mt-0">
          <h2 className="text-base font-semibold">
            <button
              type="button"
              className={`flex justify-between items-center p-3 text-sm w-full font-medium text-start ${
                activeIndex === 4
                  ? "bg-gray-50 dark:bg-slate-800 text-red-500"
                  : ""
              }`}
              onClick={() => setActiveIndex(4)}
            >
              <span className="flex items-center gap-2">
                <FaRegCheckCircle className="text-green-300 size-5" /> Meals
              </span>
              <FiChevronUp
                className={`size-4 shrink-0 ${
                  activeIndex === 4 ? "" : "rotate-180"
                }`}
              ></FiChevronUp>
            </button>
          </h2>
          <div class={activeIndex === 4 ? "" : "hidden"}>
            <div className="p-5">
              <p className="text-sm text-slate-400 dark:text-gray-400">
                Day 1 - Dinner
                <br />
                Day 2-Breakfast, Lunch and Dinner
                <br />
                Day 3-Breakfast Lunch and Dinner
              </p>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-lg font-bold leading-normal text-red-500 mt-7">
        What{"'"}s Not Included
      </h4>
      <div className="mt-3">
        <div className="relative mt-4 overflow-hidden rounded-md shadow dark:shadow-gray-800 first:mt-0">
          <h2 className="text-base font-semibold">
            <button
              type="button"
              className={`flex justify-between items-center p-3 text-sm w-full font-medium text-start ${
                activeIndex === 1
                  ? "bg-gray-50 dark:bg-slate-800 text-red-500"
                  : ""
              }`}
              onClick={() => setActiveIndex(1)}
            >
              <span className="flex items-center gap-2">
                <FaRegCircleXmark className="text-red-500 size-5" /> Additional
                Services
              </span>
              <FiChevronUp
                className={`size-4 shrink-0 ${
                  activeIndex === 1 ? "" : "rotate-180"
                }`}
              ></FiChevronUp>
            </button>
          </h2>
          <div class={activeIndex === 1 ? "" : "hidden"}>
            <div className="p-5">
              <p className="text-sm text-slate-400 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                eius.
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}

        <div className="relative mt-4 overflow-hidden rounded-md shadow dark:shadow-gray-800 first:mt-0">
          <h2 className="text-base font-semibold">
            <button
              type="button"
              className={`flex justify-between items-center p-3 text-sm w-full font-medium text-start ${
                activeIndex === 2
                  ? "bg-gray-50 dark:bg-slate-800 text-red-500"
                  : ""
              }`}
              onClick={() => setActiveIndex(2)}
            >
              <span className="flex items-center gap-2">
                <FaRegCircleXmark className="text-red-500 size-5" /> Lorem.
              </span>
              <FiChevronUp
                className={`size-4 shrink-0 ${
                  activeIndex === 2 ? "" : "rotate-180"
                }`}
              ></FiChevronUp>
            </button>
          </h2>
          <div class={activeIndex === 2 ? "" : "hidden"}>
            <div className="p-5">
              <p className="text-sm text-slate-400 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                rerum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
