import React, { useState } from "react";

import { packages } from "@/data/data";

import HomeHeroSliderSection from "@/components/sections/home/HomeHeroSliderSection";
import Layout from "@/components/layout";
import MostPopularToursSection from "@/components/sections/home/MostPopularToursSection";
import TopDestinationSection from "@/components/sections/home/TopDestinationSection";
import ClientsTestimonialSection from "@/components/sections/home/ClientsTestimonialSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import FaqSection from "@/components/sections/home/FaqSection";
import useSWR from "swr";
import PageLoading from "@/components/PageLoading";

export default function Index() {
  const {
    data: toursData,
    error: toursDataError,
    isLoading: toursDataLoading,
  } = useSWR(`/tours/`, {
    revalidateIfStale: false,
  });

  console.log(toursData);
  if (!toursData) return <PageLoading />;
  return (
    <Layout>
      <HomeHeroSliderSection />

      <MostPopularToursSection tours={toursData.results} />

      <TopDestinationSection />

      <ServicesSection />

      <ClientsTestimonialSection />

      <FaqSection />
    </Layout>
  );
}
