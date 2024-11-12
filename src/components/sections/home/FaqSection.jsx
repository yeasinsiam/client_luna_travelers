import Image from "next/image";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import faqImg from "@/assets/images/bg/6.jpg";
import { faqData } from "@/data/data";

export default function FaqSection() {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <section className="relative py-8 overflow-hidden md:py-12">
      <div className="container relative ">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
            Other Useful Information
          </h3>

          <p className="max-w-xl mx-auto text-slate-400">
            This is just a simple text made for this unique and awesome
            template, you can replace it with any text.
          </p>
        </div>

        <div className="relative grid items-center grid-cols-1 gap-6 mt-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <Image
              src={faqImg}
              className="w-full h-[540px] object-cover rounded-md shadow dark:shadow-gray-800"
              alt="faq image"
            />
          </div>

          <div className="md:col-span-6">
            <div>
              {faqData.map((item, index) => {
                return (
                  <div
                    className="relative mt-4 overflow-hidden rounded-md shadow dark:shadow-gray-800 first:mt-0"
                    key={index}
                  >
                    <h2
                      className="text-base font-semibold"
                      id="accordion-collapse-heading-1"
                    >
                      <button
                        type="button"
                        className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                          activeIndex === item.id
                            ? "bg-gray-50 dark:bg-slate-800 text-red-500"
                            : ""
                        }`}
                        onClick={() => setActiveIndex(item.id)}
                      >
                        <span>{item.title}</span>
                        <FiChevronDown
                          className={`w-4 h-4 shrink-0 ${
                            activeIndex === item.id ? "rotate-180" : ""
                          }`}
                        ></FiChevronDown>
                      </button>
                    </h2>
                    <div className={activeIndex === item.id ? "" : "hidden"}>
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
