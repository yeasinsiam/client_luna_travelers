import React from "react";
import Link from "next/link";
import { topDestination } from "../../../data/data";
import dynamic from "next/dynamic";
import Image from "next/image";
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

export default function TopDestinationSection() {
  const settings = {
    container: ".tiny-home-top-destination-section-container",
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      1025: {
        items: 5,
      },

      992: {
        items: 4,
      },

      767: {
        items: 3,
      },

      425: {
        items: 1,
      },
    },
  };

  return (
    <section className="relative py-8 overflow-hidden bg-gray-100 md:py-12">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
            Top Destinations
          </h3>

          <p className="max-w-xl mx-auto text-slate-400">
            Planning for a trip? We will organize your trip with the best places
            and within best budget!
          </p>
        </div>

        <div className="relative grid grid-cols-1 mt-6">
          <div className="tiny-home-top-destination-section-container">
            <TinySlider settings={settings}>
              {topDestination.map((item, index) => {
                return (
                  <div className="tiny-slide" key={index}>
                    <div className="relative m-2 overflow-hidden rounded-md shadow group dark:shadow-gray-800">
                      <Image
                        src={item.image}
                        className="object-cover w-full duration-500 scale-125 h-72 group-hover:scale-100"
                        alt=""
                      />
                      <div className="absolute inset-0 duration-500 opacity-0 bg-gradient-to-b to-slate-900 from-transparent group-hover:opacity-100"></div>
                      <div className="absolute bottom-0 p-4 start-0">
                        <Link
                          href="/"
                          className="text-lg font-medium text-white duration-500 ease-in-out hover:text-red-500"
                        >
                          {item.place}
                        </Link>
                        <p className="text-sm duration-500 text-white/70 group-hover:text-white">
                          {item.hotels}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
  );
}
// export default dynamic(Promise.resolve(TopDestinationOne), {
//   //   loading: () => <p>Loading...</p>,
// });
