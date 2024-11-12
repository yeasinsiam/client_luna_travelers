import React from "react";
import { CiSun } from "react-icons/ci";
import { FaRegFlag } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { GrFlag } from "react-icons/gr";
import { ImSpoonKnife } from "react-icons/im";
import { IoDiamondOutline, IoEarthOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { PiTrainLight } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

export default function ServicesSection() {
  return (
    <section className="relative py-8 overflow-hidden md:py-12">
      <div className="container relative ">
        <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-4">
          <div className="flex">
            <SlCalender className="mt-1 text-red-500 fea icon-ex-md me-3 size-7"></SlCalender>
            <div className="flex-1">
              <h5 className="mb-2 text-xl font-semibold">
                Diverse Destinations
              </h5>
              <p className="text-slate-400">
                If the distribution of letters and is random, the reader will
                not be distracted from making
              </p>
            </div>
          </div>

          <div className="flex">
            <PiTrainLight className="mt-1 text-red-500 fea icon-ex-md me-3 size-7"></PiTrainLight>
            <div className="flex-1">
              <h5 className="mb-2 text-xl font-semibold"> Adventure Time</h5>
              <p className="text-slate-400">
                If the distribution of letters and is random, the reader will
                not be distracted from making
              </p>
            </div>
          </div>

          <div className="flex">
            <GrFlag className="mt-1 text-red-500 fea icon-ex-md me-3 size-7"></GrFlag>
            <div className="flex-1">
              <h5 className="mb-2 text-xl font-semibold"> Fast Booking</h5>
              <p className="text-slate-400">
                If the distribution of letters and is random, the reader will
                not be distracted from making
              </p>
            </div>
          </div>

          <div className="flex">
            <GoPeople className="mt-1 text-red-500 fea icon-ex-md me-3 size-7"></GoPeople>
            <div className="flex-1">
              <h5 className="mb-2 text-xl font-semibold"> Guided Tours</h5>
              <p className="text-slate-400">
                If the distribution of letters and is random, the reader will
                not be distracted from making
              </p>
            </div>
          </div>
          <div className="flex">
            <ImSpoonKnife className="mt-1 text-red-500 fea icon-ex-md me-3 size-7"></ImSpoonKnife>
            <div className="flex-1">
              <h5 className="mb-2 text-xl font-semibold">Incredible Journey</h5>
              <p className="text-slate-400">
                If the distribution of letters and is random, the reader will
                not be distracted from making
              </p>
            </div>
          </div>
          <div className="flex">
            <IoDiamondOutline className="mt-1 text-red-500 fea icon-ex-md me-3 size-7"></IoDiamondOutline>
            <div className="flex-1">
              <h5 className="mb-2 text-xl font-semibold">Traveling Together</h5>
              <p className="text-slate-400">
                If the distribution of letters and is random, the reader will
                not be distracted from making
              </p>
            </div>
          </div>
          <div className="flex">
            <MdOutlineWbSunny className="mt-1 text-red-500 fea icon-ex-md me-3 size-7"></MdOutlineWbSunny>
            <div className="flex-1">
              <h5 className="mb-2 text-xl font-semibold">Away We Go</h5>
              <p className="text-slate-400">
                If the distribution of letters and is random, the reader will
                not be distracted from making
              </p>
            </div>
          </div>
          <div className="flex">
            <IoEarthOutline className="mt-1 text-red-500 fea icon-ex-md me-3 size-7"></IoEarthOutline>
            <div className="flex-1">
              <h5 className="mb-2 text-xl font-semibold">Cruise Lines</h5>
              <p className="text-slate-400">
                If the distribution of letters and is random, the reader will
                not be distracted from making
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
