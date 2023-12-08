import { Footer, Hero,Join, Navbar, Choices } from "../components/Fragments/Home"; // Benefit, Offer, SampeReport,
import LoadingScreen from "../components/Elements/Loading/LoadingScreen";
import React, { Suspense } from "react";

const LayoutHome = React.lazy(() => import("../components/Layouts/LayoutHome"));

export default function Home() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LayoutHome>
        <Navbar />
        <Hero />
        <Join />
        <Choices />
        {/*<SampeReport />*/}
        {/*<Benefit />*/}
        {/*<Offer />*/}
        <Footer />
      </LayoutHome>
    </Suspense>
  );
}
