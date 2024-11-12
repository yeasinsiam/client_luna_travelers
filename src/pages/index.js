import React, { useState } from "react";

import { packages } from "@/data/data";

import HomeHeroSliderSection from "@/components/sections/home/HomeHeroSliderSection";
import Layout from "@/components/layout";
import MostPopularToursSection from "@/components/sections/home/MostPopularToursSection";
import TopDestinationSection from "@/components/sections/home/TopDestinationSection";
import ClientsTestimonialSection from "@/components/sections/home/ClientsTestimonialSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import FaqSection from "@/components/sections/home/FaqSection";

export default function Index() {
  return (
    <Layout>
      <HomeHeroSliderSection />

      <MostPopularToursSection />

      <TopDestinationSection />

      <ServicesSection />

      <ClientsTestimonialSection />

      <FaqSection />
    </Layout>
  );
}
