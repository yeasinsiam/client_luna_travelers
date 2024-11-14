import React, { useState } from "react";
import TopBanner from "./TopBanner";
import DescriptionTab from "./DescriptionTab";
import ItineraryTab from "./ItineraryTab";
import AccommodationTab from "./AccommodationTab";
import CancellationPolicyTab from "./CancellationPolicyTab";
import InclusionsTab from "./InclusionsTab";
import PackagesAndTerms from "./PackagesAndTerms";
import OtherInformationTab from "./OtherInformationTab";

export default function ProgramDetailsSection() {
  const [activeTab, setActiveTab] = useState("description");
  // description, itinerary, accommodation, package_and_terms, inclusions

  const handleSetActiveTab = (tabName) => {
    setActiveTab(tabName);
    // document
    //   .getElementById("tab-scroll-to-location")
    //   .scrollIntoView();

    var element = document.getElementById("tab-scroll-to-location");
    var headerOffset = 190;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
    });

    // window.scrollBy(0, -100);
  };

  return (
    <>
      <TopBanner />
      {/* Tabs */}
      <div className="container relative mt-8 md:mt-12">
        <div className="md:max-w-2xl">
          {/* tabs */}
          <ul className="sticky z-30 flex flex-wrap gap-2  bg-white top-[74px]">
            <li
              aria-current={activeTab == "description"}
              className="border border-gray-400 aria-[current='true']:border-red-500 aria-[current='true']:bg-red-500 text-slate-600 px-2 py-1 text-center aria-[current='true']:text-white  rounded-lg whitespace-nowrap"
              role="button"
              onClick={() => handleSetActiveTab("description")}
            >
              Description
            </li>
            <li
              aria-current={activeTab == "itinerary"}
              className="border border-gray-400 aria-[current='true']:border-red-500 aria-[current='true']:bg-red-500 text-slate-600 px-2 py-1 text-center aria-[current='true']:text-white  rounded-lg whitespace-nowrap"
              role="button"
              onClick={() => handleSetActiveTab("itinerary")}
            >
              Itinerary
            </li>
            <li
              aria-current={activeTab == "accommodation"}
              className="border border-gray-400 aria-[current='true']:border-red-500 aria-[current='true']:bg-red-500 text-slate-600 px-2 py-1 text-center aria-[current='true']:text-white  rounded-lg whitespace-nowrap"
              role="button"
              onClick={() => handleSetActiveTab("accommodation")}
            >
              Accommodation
            </li>
            <li
              aria-current={activeTab == "package_and_terms"}
              className="border border-gray-400 aria-[current='true']:border-red-500 aria-[current='true']:bg-red-500 text-slate-600 px-2 py-1 text-center aria-[current='true']:text-white  rounded-lg whitespace-nowrap"
              role="button"
              onClick={() => handleSetActiveTab("package_and_terms")}
            >
              Packages & Terms
            </li>
            <li
              aria-current={activeTab == "inclusions"}
              className="border border-gray-400 aria-[current='true']:border-red-500 aria-[current='true']:bg-red-500 text-slate-600 px-2 py-1 text-center aria-[current='true']:text-white  rounded-lg whitespace-nowrap"
              role="button"
              onClick={() => handleSetActiveTab("inclusions")}
            >
              Inclusions
            </li>
            <li
              aria-current={activeTab == "other_information"}
              className="border border-gray-400 aria-[current='true']:border-red-500 aria-[current='true']:bg-red-500 text-slate-600 px-2 py-1 text-center aria-[current='true']:text-white  rounded-lg whitespace-nowrap"
              role="button"
              onClick={() => handleSetActiveTab("other_information")}
            >
              Other Information
            </li>
          </ul>
          <div id="tab-scroll-to-location"></div>

          {activeTab == "description" && <DescriptionTab />}
          {activeTab == "itinerary" && <ItineraryTab />}
          {activeTab == "accommodation" && <AccommodationTab />}
          {activeTab == "package_and_terms" && (
            <>
              <PackagesAndTerms />
              <CancellationPolicyTab />
            </>
          )}
          {activeTab == "inclusions" && <InclusionsTab />}
          {activeTab == "other_information" && <OtherInformationTab />}
        </div>
      </div>
    </>
  );
}
