import { faqData } from "@/data/data";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronUp, FiPlusCircle } from "react-icons/fi";
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

export default function OtherInformationTab() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="p-5 mt-8 bg-white border border-gray-200 rounded-lg shadow-lg md:grid-cols-2 md:mt-12">
      <div className="">
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
              <span className="flex items-center gap-1">
                <FiPlusCircle className=" size-5" /> Insurance
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente enim illum nulla repellat. Magni, soluta!
              </p>
            </div>
          </div>
        </div>

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
              <span className="flex items-center gap-1">
                <FiPlusCircle className=" size-5" /> COVID-19
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                necessitatibus magnam voluptatum debitis quidem. Odit!
              </p>
            </div>
          </div>
        </div>
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
              <span className="flex items-center gap-1">
                <FiPlusCircle className=" size-5" /> Visa and Passports
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                necessitatibus magnam voluptatum debitis quidem. Odit!
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
      </div>
    </div>
  );
}
