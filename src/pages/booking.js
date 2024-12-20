import Layout from "@/components/layout";
import { CiWarning } from "react-icons/ci";
import { LiaBedSolid } from "react-icons/lia";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { allCountries } from "@/data/allCountries";
import { useState } from "react";

export default function BookingPage() {
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
    <Layout headerLayout={2}>
      <div className="container py-10">
        <div>
          <h3 className="text-2xl font-bold leading-normal">
            2027 Total Solar Eclipse in Egypt - 8 days - All Inclusive
          </h3>
        </div>

        <div className="grid grid-cols-12 mt-10 gap-y-5 lg:gap-5 ">
          <div className="flex flex-col order-1 col-span-12 gap-5 lg:order-2 lg:col-span-5">
            {/* Trip information */}
            <div className="p-6 bg-white border border-gray-300 rounded-md shadow-lg">
              <h4 class="text-lg font-bold leading-normal">My Trip</h4>
              <div className="mt-5 space-y-2">
                <div className="flex flex-col">
                  <h5 class="text-sm font-semibold  leading-normal">
                    2027 Total Solar Eclipse in Egypt - 8 days - All Inclusive
                  </h5>
                  <span className="text-sm text-gray-500">8 days</span>
                </div>
                <div className="flex flex-col">
                  <h5 class="text-sm font-semibold  leading-normal">
                    Starts in Cairo, Egypt
                  </h5>
                  <span className="text-sm text-gray-500">
                    Thursday, 29 Jul 2027
                  </span>
                </div>
                <div className="flex flex-col">
                  <h5 class="text-sm font-semibold  leading-normal">
                    Ends in Cairo, Egypt{" "}
                  </h5>
                  <span className="text-sm text-gray-500">
                    Thursday, 5 Aug 2027
                  </span>
                </div>
                <div className="flex flex-col">
                  <h5 class="text-sm font-semibold  leading-normal">
                    Tour Type{" "}
                  </h5>
                  <span className="text-sm text-gray-500">Group</span>
                </div>
                <div className="flex flex-col">
                  <h5 class="text-sm font-semibold  leading-normal">
                    Operated in{" "}
                  </h5>
                  <span className="text-sm text-gray-500">English</span>
                </div>
                <div className="flex flex-col">
                  <h5 class="text-sm font-semibold  leading-normal">
                    What{"'"}s included{" "}
                  </h5>
                  <span className="text-sm text-gray-500">
                    Flights, Guide, Insurance, Meals, Transport{" "}
                  </span>
                </div>
              </div>
              {/* Starts in Cairo, Egypt */}
            </div>

            {/* Price Breakdown */}
            <div className="p-6 bg-white border border-gray-300 rounded-md shadow-lg lg:sticky lg:top-24">
              <h4 class="text-lg font-bold leading-normal">Price Breakdown</h4>
              <div className="flex items-start gap-2 p-3 mt-5 bg-indigo-100 rounded-lg lg:items-center">
                <BsExclamationCircle className="flex-shrink-0 text-2xl fill-indigo-500" />
                <p>
                  Select the number of travellers and assign accommodation to
                  display the price.
                </p>
              </div>

              <div className="mt-5">
                <div className="flex justify-between pb-5 border-b">
                  <div className="flex flex-col">
                    <h3>Single Room</h3>
                    <span className="text-sm text-gray-500">
                      1 Adult x $9,730.25
                    </span>
                  </div>
                  <div>
                    <span>$9,730.25</span>
                  </div>
                </div>

                <div className="flex justify-between mt-5">
                  <h3 className="text-lg">Single Room</h3>
                  <h2 className="text-lg font-semibold">US$9,730.25</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Booking steps */}
          <div className="flex flex-col order-2 col-span-12 gap-5 lg:order-1 lg:col-span-7">
            {/* Step 1 {select adult and child} */}
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

                <div className="flex justify-between py-3 border-b border-gray-400">
                  <div className="flex flex-col ">
                    <h5 className="font-bold leading-normal ">Adult</h5>
                    <span className="text-sm text-gray-600">Age 12-99</span>
                  </div>
                  <div className="flex items-center gap-3 lg:gap-5">
                    <button
                      type="button"
                      data-active={adultCount > 1}
                      onClick={() => handleChangeAdultCount(adultCount - 1)}
                      className="  flex items-center justify-center w-10 h-10 text-4xl font-normal text-gray-300 data-[active='true']:text-black  data-[active='true']:border-black border border-gray-200 rounded-full shadow  "
                    >
                      -
                    </button>
                    <span className="w-6 text-lg text-center ">
                      {adultCount}
                    </span>
                    <button
                      type="button"
                      data-active={true}
                      onClick={() => handleChangeAdultCount(adultCount + 1)}
                      className="  flex items-center justify-center w-10 h-10 text-4xl font-normal text-gray-300 data-[active='true']:text-black  data-[active='true']:border-black border border-gray-200 rounded-full shadow  "
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* child */}
                <div className="flex justify-between">
                  <div className="flex flex-col ">
                    <h5 className="font-bold leading-normal ">Child</h5>
                    <span className="text-sm text-gray-600">Age 5-11</span>
                  </div>
                  <div className="flex items-center gap-3 lg:gap-5">
                    <button
                      type="button"
                      data-active={childCount > 0}
                      onClick={() => handleChangeChildCount(childCount - 1)}
                      className="  flex items-center justify-center w-10 h-10 text-4xl font-normal text-gray-300 data-[active='true']:text-black  data-[active='true']:border-black border border-gray-200 rounded-full shadow  "
                    >
                      -
                    </button>
                    <span className="w-6 text-lg text-center">
                      {childCount}
                    </span>
                    <button
                      type="button"
                      data-active={true}
                      onClick={() => handleChangeChildCount(childCount + 1)}
                      className="  flex items-center justify-center w-10 h-10 text-4xl font-normal text-gray-300 data-[active='true']:text-black  data-[active='true']:border-black border border-gray-200 rounded-full shadow  "
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Step 2 {select accommodation} */}
            <div className="p-6 bg-white border border-gray-300 rounded-md shadow-lg dark:bg-slate-900 dark:shadow-gray-800">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 font-bold text-white rounded bg-dark-footer">
                  2
                </span>
                <h4 className="text-lg font-bold leading-normal">
                  Select accommodation
                </h4>
              </div>

              <div className="flex items-center gap-2 mt-10 ">
                <LiaBedSolid className="text-2xl" />
                <p>
                  Please assign <b className="text-red-500">1 Adult</b> to a
                  room.{" "}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 ">
                <IoCheckmarkDoneCircleOutline className="text-2xl text-green-600" />
                <p>All travellers assigned!</p>
              </div>

              <div className="flex flex-col gap-3 mt-5">
                {/* Double Room */}
                <div className="py-5 border-t border-gray-400">
                  <div className="flex flex-col justify-between gap-3 lg:flex-row">
                    <div className="flex flex-col gap-2">
                      <h5 className="font-bold leading-normal ">
                        Double Room{" "}
                        <span className="px-3 py-1 ml-1 text-xs font-normal rounded-lg bg-cyan-100 text-cyan-500">
                          Private
                        </span>{" "}
                      </h5>
                      <p className="text-sm">
                        Per person in a room for 2 people.{" "}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 min-w-64">
                      <div className="flex justify-between min-w-64">
                        <div>
                          <h5 className="font-bold leading-normal ">$6,356</h5>
                          <p className="text-xs">per Adult</p>
                        </div>
                        <div>
                          <select
                            aria-disabled={false}
                            className="w-32 px-5 py-3 bg-transparent border border-gray-400 rounded-lg aria-disabled:bg-gray-200 aria-disabled:text-gray-500 aria-disabled:border-gray-400"
                          >
                            <option select>0 Adult</option>
                            <option>1 Adult</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-between min-w-64">
                        <div>
                          <h5 className="font-bold leading-normal ">$6,356</h5>
                          <p className="text-xs">per Child</p>
                        </div>
                        <div>
                          <select
                            aria-disabled={false}
                            className="w-32 px-5 py-3 bg-transparent border border-gray-400 rounded-lg aria-disabled:bg-gray-200 aria-disabled:text-gray-500 aria-disabled:border-gray-400"
                          >
                            <option select>0 Child</option>
                            <option>1 Child</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1 p-3 mt-5 bg-red-100 rounded-lg">
                    <CiWarning className="flex-shrink-0 text-4xl fill-red-500" />
                    <p className="text-sm">
                      This accommodation needs 2 travellers. Please add 2
                      travellers or choose another accommodation type.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 mt-3">
                    <label className="block cursor-pointer">
                      <input type="checkbox" />
                      <span className="ml-2 ">
                        I{"'"}m travelling with a friend who is booking
                        separately{" "}
                      </span>
                    </label>

                    <div className="flex flex-col gap-3 lg:flex-row">
                      <div className="">
                        <label className="font-semibold">Their Name:</label>
                        <input
                          type="text"
                          className="w-full h-10 px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                          placeholder="e.g Jane"
                        />
                      </div>
                      <div className="">
                        <label className="font-semibold">Their Email:</label>
                        <input
                          type="email"
                          className="w-full h-10 px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                          placeholder="e.g: jane@email.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Room */}
                <div className="py-5 border-t border-gray-400">
                  <div className="flex flex-col justify-between gap-3 lg:flex-row">
                    <div className="flex flex-col gap-2">
                      <h5 className="font-bold leading-normal ">
                        Single Room{" "}
                        <span className="px-3 py-1 ml-1 text-xs font-normal rounded-lg bg-cyan-100 text-cyan-500">
                          Private
                        </span>{" "}
                      </h5>
                      <p className="text-sm">
                        Enjoy the comfort and privacy of your own room.{" "}
                      </p>
                    </div>
                    <div className="flex justify-between min-w-64">
                      <div>
                        <h5 className="font-bold leading-normal ">$9,730</h5>
                        <p className="text-xs">per Adult</p>
                      </div>
                      <div>
                        <select
                          aria-disabled={false}
                          className="w-32 px-5 py-3 bg-transparent border border-gray-400 rounded-lg aria-disabled:bg-gray-200 aria-disabled:text-gray-500 aria-disabled:border-gray-400"
                        >
                          <option select>0 Adult</option>
                          <option>1 Adult</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Step 3 {Traveller details} */}
            <div className="p-6 bg-white border border-gray-300 rounded-md shadow-lg dark:bg-slate-900 dark:shadow-gray-800">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 font-bold text-white rounded bg-dark-footer">
                  3
                </span>
                <h4 className="text-lg font-bold leading-normal">
                  Add traveller details
                </h4>
              </div>

              <div className="flex items-start gap-2 p-3 mt-5 bg-indigo-100 rounded-lg lg:items-center">
                <BsExclamationCircle className="flex-shrink-0 text-2xl fill-indigo-500" />
                <p className="text-sm">
                  <b>Please note: </b>
                  Traveller details should match information on passport
                </p>
              </div>

              <div className="mt-5">
                <h4 className="font-bold leading-normal ">Lead Traveller</h4>
                <p>
                  This traveller will serve as the contact person for the
                  booking.
                </p>
              </div>

              <div className="flex mt-5">
                <div className="flex flex-col w-full gap-3 lg:w-2/4">
                  <div className="">
                    <label className="font-semibold">First Name*:</label>
                    <input
                      type="text"
                      className="w-full h-10 px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                    />
                  </div>
                  <div className="">
                    <label className="font-semibold">Last Name*:</label>
                    <input
                      type="text"
                      className="w-full h-10 px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                    />
                  </div>
                  <div className="">
                    <label className="font-semibold">Email*:</label>
                    <input
                      type="email"
                      className="w-full h-10 px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                    />
                  </div>
                  <div className="">
                    <label className="font-semibold">Phone Number*:</label>
                    <input
                      type="text"
                      className="w-full h-10 px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                      placeholder="e.g. +880 1234 567890"
                    />
                  </div>

                  <div className="">
                    <label className="font-semibold">Date of Birth*:</label>
                    <input
                      type="date"
                      className="w-full h-10 px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                    />
                  </div>
                  <div className="">
                    <label className="font-semibold">Gender*:</label>
                    <div className="flex gap-3 mt-0">
                      <label className="flex gap-2">
                        <input
                          type="radio"
                          className="w-4"
                          name="gender-selection"
                        />
                        Male
                      </label>
                      <label className="flex gap-2">
                        <input
                          type="radio"
                          className="w-4"
                          name="gender-selection"
                        />
                        Female
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <label className="font-semibold">Nationality*:</label>
                    <select className="w-full h-10 px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded outline-none ">
                      <option select>Select your nationality</option>
                      {allCountries.map((item) => (
                        <option key={item.code}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* Step 4 {Promocode } */}
            <div className="p-6 bg-white border border-gray-300 rounded-md shadow-lg dark:bg-slate-900 dark:shadow-gray-800">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 font-bold text-white rounded bg-dark-footer">
                  4
                </span>
                <h4 className="text-lg font-bold leading-normal">Savings</h4>
              </div>
              <div className="mt-5 ">
                {!showPromoCodeBox ? (
                  <button
                    type="button"
                    onClick={() => setShowPromoCodeBox(true)}
                    className="text-red-500 hover:underline"
                  >
                    Redeem Promo Code{" "}
                  </button>
                ) : (
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
                    <div className="">
                      <label className="font-semibold">Code:</label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0"
                        placeholder="e.g: TKBTLA"
                      />
                    </div>

                    <div>
                      <button
                        type="button"
                        className="w-full px-3 py-[6px] text-white bg-red-500 rounded-lg lg:w-auto "
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 5 {payment details} */}
            <div className="p-6 bg-white border border-gray-300 rounded-md shadow-lg dark:bg-slate-900 dark:shadow-gray-800">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 font-bold text-white rounded bg-dark-footer">
                  5
                </span>
                <h4 className="text-lg font-bold leading-normal">
                  Add payment details
                </h4>
              </div>

              <div className="flex items-start gap-2 p-3 mt-5 bg-indigo-100 rounded-lg lg:items-center">
                <BsExclamationCircle className="flex-shrink-0 text-2xl fill-indigo-500" />
                <p className="text-sm">
                  This is a secure and SSL encrypted payment. Your credit card
                  details are safe.
                </p>
              </div>

              <div className="mt-7">
                <h5>Select your payment method:</h5>
                <div className="mt-3 space-y-2">
                  <div className="p-3 bg-white border border-gray-300 rounded-md shadow-lg ">
                    <label className="flex gap-2">
                      <input
                        type="radio"
                        className="w-4"
                        name="payment-gateway"
                      />
                      Pay with PayPal
                    </label>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-md shadow-lg ">
                    <label className="flex gap-2">
                      <input
                        type="radio"
                        className="w-4"
                        name="payment-gateway"
                      />
                      Free booking
                    </label>
                  </div>
                </div>
              </div>

              <label className="block cursor-pointer mt-7">
                <input type="checkbox" className="w-4 h-4" />
                <span className="ml-2 ">
                  I accept Luna travelers{" "}
                  <span className="text-red-500 hover:underline">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-red-500 hover:underline">
                    Privacy Policy
                  </span>
                  ;
                </span>
              </label>
              <button
                type="button"
                className="block w-full px-3 py-2 mt-5 text-white bg-red-500 rounded-lg "
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
