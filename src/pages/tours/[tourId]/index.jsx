import Layout from "@/components/layout";
import PageLoading from "@/components/PageLoading";
import TourDetailsSection from "@/components/sections/tour-details";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";

export default function TourDetailsPage() {
  const router = useRouter();

  const {
    data: tourData,
    error: tourDataError,
    isLoading: tourDataLoading,
  } = useSWR(`/tours/${router.query.tourId}/`, {
    revalidateIfStale: false,
  });

  //if tourist spot not found go to 404 page
  useEffect(() => {
    if (tourDataError && tourDataError.response.status == 404) {
      router.replace("/404");
    }
  }, [tourDataError]);

  if (!tourData) return <PageLoading />;
  return (
    <Layout>
      <TourDetailsSection tourData={tourData} />
    </Layout>
  );
}
