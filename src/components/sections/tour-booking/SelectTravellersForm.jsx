import { produce } from "immer";
import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function SelectTravellersForm({
  packageData,
  travellers,
  setTravellers,
}) {
  const setCount = (id, count) => {
    setTravellers((prevState) =>
      produce(prevState, (draft) => {
        const objectToUpdate = draft.find((obj) => obj.id === id);
        if (objectToUpdate && count >= 0) {
          objectToUpdate["count"] = count;
        } else {
          console.log(`Object with id ${id} not found.`);
        }
      })
    );
  };

  return (
    <div className="p-6 bg-white border border-gray-300 rounded-md shadow-lg dark:bg-slate-900 dark:shadow-gray-800">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 font-bold text-white rounded bg-dark-footer">
          1
        </span>
        <h4 className="text-lg font-bold leading-normal">
          How many are travelling?
        </h4>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        {/* adult */}

        {travellers.map((traveller) => (
          <div
            key={traveller.id}
            className="flex justify-between py-3 border-b border-gray-400"
          >
            <div className="flex flex-col ">
              <h5 className="font-bold leading-normal ">
                {traveller.guest_type}
              </h5>
              <span className="text-sm text-gray-600">
                Age {traveller.age_range}
              </span>
            </div>
            <div className="flex items-center gap-3 lg:gap-5">
              <button
                type="button"
                data-active={traveller.count >= 1}
                onClick={() => setCount(traveller.id, traveller.count - 1)}
                className="  flex items-center justify-center w-10 h-10 text-4xl font-normal text-gray-300 data-[active='true']:text-black  data-[active='true']:border-black border border-gray-200 rounded-full shadow  "
              >
                -
              </button>
              <span className="w-6 text-lg text-center ">
                {traveller.count}
              </span>
              <button
                type="button"
                data-active={true}
                onClick={() => setCount(traveller.id, traveller.count + 1)}
                className="  flex items-center justify-center w-10 h-10 text-4xl font-normal text-gray-300 data-[active='true']:text-black  data-[active='true']:border-black border border-gray-200 rounded-full shadow  "
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
