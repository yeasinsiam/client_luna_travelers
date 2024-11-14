import { faqData } from "@/data/data";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

export default function AccommodationTab() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="p-5 mt-8 bg-white border border-gray-200 rounded-lg shadow-lg md:grid-cols-2 md:mt-12">
      {/* <h4 className="text-lg font-bold leading-normal">Itinerary</h4> */}

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
              <span>Package incl. Standard Double Room at Adrere</span>
              <FiChevronUp
                className={`size-4 shrink-0 ${
                  activeIndex === 1 ? "" : "rotate-180"
                }`}
              ></FiChevronUp>
            </button>
          </h2>
          <div class={activeIndex === 1 ? "" : "hidden"}>
            <div className="p-5">
              <p className="text-slate-400 dark:text-gray-400 text-sm">
                Cairo, Egypt - Steigenberger Hotel El Tahrir Cairo
                <br />
                Luxor, Egypt - Movenpick MS Sunray
                <br />
                Siwa Oasis, Egypt - Adrere Amellal Eco-Lodge
                <br />
                Alexandria, Egypt - Four Seasons Hotel Alexandria At San Stefano
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
              <span>Package incl. Standard Double Room at Adrere</span>
              <FiChevronUp
                className={`size-4 shrink-0 ${
                  activeIndex === 2 ? "" : "rotate-180"
                }`}
              ></FiChevronUp>
            </button>
          </h2>
          <div class={activeIndex === 2 ? "" : "hidden"}>
            <div className="p-5">
              <p className="text-slate-400 dark:text-gray-400 text-sm">
                Cairo, Egypt - Steigenberger Hotel El Tahrir Cairo
                <br />
                Luxor, Egypt - Movenpick MS Sunray
                <br />
                Siwa Oasis, Egypt - Adrere Amellal Eco-Lodge
                <br />
                Alexandria, Egypt - Four Seasons Hotel Alexandria At San Stefano
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
      </div>
    </div>
  );
}
