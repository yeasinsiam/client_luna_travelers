import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function InclusionsTab({ tourData }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeIndexNotIncluded, setActiveIndexNotIncluded] = useState(1);

  return (
    <div className="p-5 mt-8 bg-white border border-gray-200 rounded-lg shadow-lg md:grid-cols-2 md:mt-12">
      <h4 className="text-lg font-bold leading-normal text-red-500">
        What{"'"}s Included
      </h4>
      <div className="mt-3">
        {tourData.accommodations.map((data) => (
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
                <span className="flex items-center gap-2">
                  <FaRegCheckCircle className="text-green-300 size-5" />{" "}
                  {data.title}
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
        {/* 
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
        </div> */}
      </div>
      <h4 className="text-lg font-bold leading-normal text-red-500 mt-7">
        What{"'"}s Not Included
      </h4>
      <div className="mt-3">
        {tourData.not_included.map((data) => (
          <div
            key={data.id}
            className="relative mt-4 overflow-hidden rounded-md shadow dark:shadow-gray-800 first:mt-0"
          >
            <h2 className="text-base font-semibold">
              <button
                type="button"
                className={`flex justify-between items-center p-3 text-sm w-full font-medium text-start ${
                  activeIndexNotIncluded === data.id
                    ? "bg-gray-50 dark:bg-slate-800 text-red-500"
                    : ""
                }`}
                onClick={() => setActiveIndexNotIncluded(data.id)}
              >
                <span className="flex items-center gap-2">
                  <FaRegCircleXmark className="text-red-500 size-5" />{" "}
                  {data.title}
                </span>
                <FiChevronUp
                  className={`size-4 shrink-0 ${
                    activeIndexNotIncluded === data.id ? "" : "rotate-180"
                  }`}
                ></FiChevronUp>
              </button>
            </h2>
            <div class={activeIndexNotIncluded === data.id ? "" : "hidden"}>
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
