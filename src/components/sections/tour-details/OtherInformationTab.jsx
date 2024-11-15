import { faqData } from "@/data/data";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronUp, FiPlusCircle } from "react-icons/fi";
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

export default function OtherInformationTab({ tourData }) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="p-5 mt-8 bg-white border border-gray-200 rounded-lg shadow-lg md:grid-cols-2 md:mt-12">
      <div className="">
        {tourData.other_information.map((data) => (
          <div
            key={data.id}
            className="relative mt-4 overflow-hidden rounded-md shadow dark:shadow-gray-800 first:mt-0"
          >
            <h2 className="text-base font-semibold">
              <button
                type="button"
                className={`flex justify-between items-center p-3 text-sm w-full font-medium text-start ${
                  activeIndex === data.id
                    ? "bg-gray-50 dark:bg-slate-800 text-red-500"
                    : ""
                }`}
                onClick={() => setActiveIndex(data.id)}
              >
                <span className="flex items-center gap-1">
                  <FiPlusCircle className=" size-5" /> {data.title}
                </span>
                <FiChevronUp
                  className={`size-4 shrink-0 ${
                    activeIndex === data.id ? "" : "rotate-180"
                  }`}
                ></FiChevronUp>
              </button>
            </h2>
            <div class={activeIndex === data.id ? "" : "hidden"}>
              <div className="p-5">
                <div
                  className="text-sm text-slate-400 dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
