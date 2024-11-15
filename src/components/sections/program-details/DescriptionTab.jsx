import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

export default function DescriptionTab({ tourData }) {
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
    <div className="p-3 mt-8 bg-white border border-gray-200 rounded-lg shadow-lg md:grid-cols-2 md:mt-12">
      <div className="relative overflow-hidden rounded-lg ">
        <TinySlider settings={settings}>
          {tourData.images.map((image) => (
            <div key={image.id} className="relative h-[350px]">
              <Image
                src={image.image}
                // src={"/static/bg/2.jpg"}
                alt="bg1"
                className="object-cover w-full h-full"
                fill
              />
            </div>
          ))}
          {/* <div className="relative h-[350px]">
            <Image
              src={"/static/bg/5.jpg"}
              alt="bg2"
              className="object-cover w-full h-full"
              fill
            />
          </div>
          <div className="relative h-[350px]">
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

      {/* overview */}
      <div className="pt-7">
        <div className="flex items-center gap-2 text-red-500">
          <IoNewspaperOutline className="size-7" />
          <h4 className="text-lg font-bold leading-normal">Overview</h4>
        </div>

        <h4 className="mt-5 text-lg font-bold leading-normal">
          Lorem ipsum dolor sit amet.
        </h4>

        <div
          className="mt-1 text-sm text-slate-500"
          dangerouslySetInnerHTML={{ __html: tourData.description }}
        />

        <ul className="text-sm mt-7 text-slate-500 md:w-3/5">
          <li className="flex justify-between py-3 border-t border-gray-300">
            <span>Tour start at</span>
            <div className="w-2/5">
              <span>Luxor</span>
            </div>
          </li>
          <li className="flex justify-between py-3 border-gray-300 border-y">
            <span>Tour end at</span>
            <div className="w-2/5">
              <span>Cairo</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
