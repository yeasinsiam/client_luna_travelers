import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { RiDownloadLine } from "react-icons/ri";

export default function TopBanner() {
  const isStickyPriceWidget = useIsStickyPriceWidget();
  const [showAskQuestionPopup, setShowAskQuestionPopup] = useState(false);

  return (
    <>
      <section className="relative  h-[400px] ">
        <div className="w-full h-full">
          <div className="w-full h-full">
            <Image
              src={"/static/bg/2.jpg"}
              alt="bg1"
              className="object-cover w-full h-full"
              fill
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full ">
          <div className="container relative flex flex-col w-full gap-3 py-3 bg-gradient-to-t from-black/100 via-black/70 h-28 md:flex-row md:justify-between md:overflow-visible">
            <h2 className="text-2xl font-bold text-white md:text-4xl ">
              2027 Total Solar Eclipse in Egypt - 8 days - All Inclusive
            </h2>
            <div className="max-w-[23rem] relative  md:h-max md:-top-10">
              {!isStickyPriceWidget && (
                <PriceWidget {...{ setShowAskQuestionPopup }} />
              )}
            </div>
          </div>
        </div>
      </section>
      {isStickyPriceWidget && (
        <div className="container">
          <div className="max-w-[23rem] fixed top-[80px] z-30 ml-[755px]  ">
            <PriceWidget {...{ setShowAskQuestionPopup }} />
          </div>
        </div>
      )}
      <AskQuestionPopup
        {...{ showAskQuestionPopup, setShowAskQuestionPopup }}
      />
      <div className="py-48 md:py-0"></div>
    </>
  );
}

function AskQuestionPopup({ showAskQuestionPopup, setShowAskQuestionPopup }) {
  const [showPromoCodeBox, setShowPromoCodeBox] = useState(false);

  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  const handleChangeAdultCount = (count) => {
    if (count != 0) {
      setAdultCount(count);
    }
  };
  const handleChangeChildCount = (count) => {
    if (count != -1) {
      setChildCount(count);
    }
  };
  return (
    <div
      aria-hidden={!showAskQuestionPopup}
      className="fixed aria-hidden:hidden inset-0 z-[9999] flex items-center justify-center bg-black/60"
    >
      <div className="max-w-lg p-3 mt-8 bg-white border border-gray-200 rounded-lg shadow-lg ">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold leading-normal">Ask a Question</h4>
          <button
            className="text-gray-500"
            type="button"
            onClick={() => setShowAskQuestionPopup(false)}
          >
            <FaRegCircleXmark className="text-red-500 size-5" />
          </button>
        </div>
        <div className="mt-4">
          {/* Scrollable content */}
          <div className="overflow-y-auto max-h-[80vh]">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="col-span-full">
                <label className="font-semibold">Name:</label>
                <input
                  type="text"
                  className="w-full h-10 px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                  placeholder="e.g Jane"
                />
              </div>
              <div className="">
                <label className="font-semibold">Email:</label>
                <input
                  type="email"
                  className="w-full h-10 px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                  placeholder="e.g: jane@email.com"
                />
              </div>
              <div className="">
                <label className="font-semibold">
                  Phone Number:{" "}
                  <span className="text-sm text-slate-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                  placeholder="e.g. +880 1234 567890"
                />
              </div>

              <h4 className="pt-3 font-semibold col-span-full">
                Trevellers:{" "}
                <span className="text-sm text-slate-400">(Optional)</span>
              </h4>
              <div className="flex justify-between col-span-1">
                <h5 className="text-sm font-semibold leading-normal ">Adult</h5>
                <div className="flex items-center gap-3 ">
                  <button
                    type="button"
                    data-active={adultCount > 1}
                    onClick={() => handleChangeAdultCount(adultCount - 1)}
                    className="  flex items-center justify-center size-7 text-lg font-normal text-gray-300 data-[active='true']:text-black  data-[active='true']:border-black border border-gray-200 rounded-full shadow  "
                  >
                    -
                  </button>
                  <span className="w-6 text-lg text-center ">{adultCount}</span>
                  <button
                    type="button"
                    data-active={true}
                    onClick={() => handleChangeAdultCount(adultCount + 1)}
                    className="  flex items-center justify-center size-7 text-lg font-normal text-gray-300 data-[active='true']:text-black  data-[active='true']:border-black border border-gray-200 rounded-full shadow  "
                  >
                    +
                  </button>
                </div>
              </div>
              <div></div>
              <div className="flex justify-between col-span-1">
                <h5 className="text-sm font-semibold leading-normal ">Child</h5>
                <div className="flex items-center gap-3 ">
                  <button
                    type="button"
                    data-active={childCount > 1}
                    onClick={() => handleChangeChildCount(childCount - 1)}
                    className="  flex items-center justify-center size-7 text-lg font-normal text-gray-300 data-[active='true']:text-black  data-[active='true']:border-black border border-gray-200 rounded-full shadow  "
                  >
                    -
                  </button>
                  <span className="w-6 text-lg text-center ">{childCount}</span>
                  <button
                    type="button"
                    data-active={true}
                    onClick={() => handleChangeChildCount(childCount + 1)}
                    className="  flex items-center justify-center size-7 text-lg font-normal text-gray-300 data-[active='true']:text-black  data-[active='true']:border-black border border-gray-200 rounded-full shadow  "
                  >
                    +
                  </button>
                </div>
              </div>
              <div></div>

              <div className="col-span-full">
                <label className="font-semibold">Your Question</label>
                <textarea className="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded outline-none h-28 dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0" />
              </div>

              <button
                type="button"
                className="inline-block w-full h-10 px-5 py-1 text-base tracking-wide text-center text-white align-middle duration-500 bg-red-500 rounded-md cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceWidget({ setShowAskQuestionPopup }) {
  return (
    <div className="p-6 bg-white border border-gray-400 rounded-md shadow-lg ">
      <div className="pb-5 text-center ">
        <h3 className="text-4xl font-bold">$5,480</h3>
        <span className="text-sm text-slate-400">
          Deposit: <b className="text-black">$750</b>
        </span>
      </div>

      <div className="py-5 space-y-3 border-gray-300 border-y">
        <select className="w-full h-10 px-3 py-2 bg-transparent border border-gray-400 rounded-md outline-none form-select dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0 ">
          <option>Double Room</option>
          <option>Single Room</option>
        </select>
        <button
          type="button"
          className="inline-block w-full h-10 px-5 py-1 text-base tracking-wide text-center text-white align-middle duration-500 bg-red-500 rounded-md cursor-pointer"
        >
          Book Now
        </button>
      </div>

      <div className="pt-5 space-y-3">
        <button
          type="button"
          className="inline-flex items-center justify-center w-full h-10 gap-3 px-5 py-1 text-base tracking-wide text-center text-white align-middle duration-500 bg-gray-400 rounded-md cursor-pointer"
        >
          Download Brochure asdf
        </button>
        <button
          type="button"
          onClick={() => setShowAskQuestionPopup(true)}
          className="inline-block w-full h-10 px-5 py-1 text-base tracking-wide text-center text-white align-middle duration-500 rounded-md cursor-pointer bg-cyan-500"
        >
          Ask A Question
        </button>
      </div>
    </div>
  );
}
function useIsStickyPriceWidget() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollPosition.current = window.scrollY;
      if (scrollPosition.current > 300) {
        // console.log("User scrolled down to 300px");
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth > 768);

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return isDesktop && isScrolledDown;
}
