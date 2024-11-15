import Layout from "@/components/layout";
import ProgramDetailsSection from "@/components/sections/program-details";
import React from "react";
import useSWR from "swr";

export default function ProgramDetailsPage() {
  const {
    data: tourData,
    error: tourDataError,
    isLoading: tourDataLoading,
  } = useSWR(`/tours/1/`, {
    revalidateIfStale: false,
  });

  console.log(tourData);

  if (!tourData) return;
  return (
    <Layout>
      <ProgramDetailsSection tourData={tourData} />
    </Layout>
  );
}
