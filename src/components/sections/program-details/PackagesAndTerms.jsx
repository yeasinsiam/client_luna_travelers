import React from "react";

export default function PackagesAndTerms() {
  return (
    <div className="p-5 mt-8 bg-white border border-gray-200 divide-y divide-gray-300 rounded-lg shadow-lg md:grid-cols-2 md:mt-12">
      <div className="flex flex-wrap gap-3 py-3 first:pt-0 last:pb-0 md:flex-nowrap text-slate-600">
        <div className="w-full md:w-3/4">
          <h4 className="">Double Room Egypt Eclipse Tour</h4>

          <div className="mt-3 space-y-1 text-sm">
            <h5 className="font-bold">Double Room Price is for two persons.</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              excepturi odit praesentium nam? Officia, officiis illum animi
              sapiente sint expedita?
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full gap-3 md:justify-start md:w-1/3">
          <div className="flex flex-col md:text-right whitespace-nowrap">
            <span>$5,480</span>
            <span className="text-xs text-slate-400">Deposited:$750</span>
          </div>

          <div>
            <button
              type="button"
              class="py-3 px-5 whitespace-nowrap text-sm  block tracking-wide align-middle duration-500  text-center bg-white text-red-500 hover:bg-red-500 border border-red-500 hover:text-white font-semibold rounded-md w-full cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 py-3 first:pt-0 last:pb-0 md:flex-nowrap text-slate-600">
        <div className="w-full md:w-3/4">
          <h4 className="">Single Room Egypt Eclipse Tour</h4>

          <div className="mt-3 space-y-1 text-sm">
            <h5 className="font-bold">Single Room Price is for one person.</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              excepturi odit praesentium nam? Officia, officiis illum animi
              sapiente sint expedita?
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full gap-3 md:justify-start md:w-1/3">
          <div className="flex flex-col md:text-right whitespace-nowrap">
            <span>$8,480</span>
            <span className="text-xs text-slate-400">Deposited:$750</span>
          </div>

          <div>
            <button
              type="button"
              class="py-3 px-5 whitespace-nowrap text-sm  block tracking-wide align-middle duration-500  text-center bg-white text-red-500 hover:bg-red-500 border border-red-500 hover:text-white font-semibold rounded-md w-full cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
