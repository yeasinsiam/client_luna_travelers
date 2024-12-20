import { faqData } from "@/data/data";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
//
export default function ItineraryTab({ tourData }) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="p-5 mt-8 bg-white border border-gray-200 rounded-lg shadow-lg md:grid-cols-2 md:mt-12">
      <div className="">
        {/* <div className="relative mt-4 overflow-hidden rounded-md shadow dark:shadow-gray-800 first:mt-0">
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
              <span>
                <b className="text-red-500">Day 1</b> Arrival at Cario
              </span>
              <FiChevronUp
                className={`size-4 shrink-0 ${
                  activeIndex === 1 ? "" : "rotate-180"
                }`}
              ></FiChevronUp>
            </button>
          </h2>
          <div class={activeIndex === 1 ? "" : "hidden"}>
            <AccItemDescVideo />
          </div>
        </div> */}
        {tourData.itinerary.map((data) => (
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
                <span>{data.title}</span>
                {/* <span>
                  <b className="text-red-500">Day 2 </b>Travel to Aswan, Nile
                  Cruise Sightseeing
                </span> */}
                <FiChevronUp
                  className={`size-4 shrink-0 ${
                    activeIndex === data.id ? "" : "rotate-180"
                  }`}
                ></FiChevronUp>
              </button>
            </h2>
            <div class={activeIndex === data.id ? "" : "hidden"}>
              <div className="p-5">
                {data.images.length ? (
                  <AccItemDescVideo data={data} />
                ) : (
                  <div
                    className="text-sm text-slate-400 dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccItemDescVideo({ data }) {
  const settings = {
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 5000,
    navPosition: "bottom",
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 0,
    items: 1,
  };
  return (
    <div className="grid grid-cols-12 gap-3 p-5">
      <div className="relative col-span-12 overflow-hidden rounded-lg md:col-span-5 h-52">
        <TinySlider settings={settings}>
          {data.images.map((image) => (
            <div key={image.id} className="relative h-52">
              <Image
                src={image.image}
                alt="image"
                className="object-cover w-full h-full"
                fill
              />
            </div>
          ))}
          {/* <div className="relative h-52">
            <video
              playsInline
              autoPlay
              muted
              loop
              preload="none"
              poster="/static/bg/Multipurpose travel and tour booking.jpg"
              className="object-cover w-full h-full"
            >
              <source
                // src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
                src="/static/bg/Multipurpose travel and tour booking.mp4"
                type="video/mp4"
              />
            </video>
          </div> */}
        </TinySlider>
      </div>
      <div
        className="col-span-12 text-slate-400 md:col-span-7 dark:text-gray-400"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  );
}
