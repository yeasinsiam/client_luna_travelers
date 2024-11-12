import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

export default function HomeHeroSliderSection() {
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
    <section className="relative ">
      <TinySlider settings={settings}>
        <div className=" h-96 md:h-[600px] relative">
          <Image
            src={"/static/bg/2.jpg"}
            alt="bg1"
            className="object-cover w-full h-full"
            fill
          />
        </div>
        <div className=" h-96 md:h-[600px] relative">
          <Image
            src={"/static/bg/5.jpg"}
            alt="bg2"
            className="object-cover w-full h-full"
            fill
          />
        </div>
        <div className=" h-96 md:h-[600px] relative">
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
        </div>
      </TinySlider>
      {/* <section className="relative items-center table w-full bg-top bg-no-repeat bg-cover md:pt-72 md:pb-60 py-36"> */}
    </section>
  );
}

// export default dynamic(Promise.resolve(HomeHeroSliderSection), {
//   //   loading: () => <p>Loading...</p>,
// });
