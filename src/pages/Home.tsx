import { Benefit, Footer, Hero,Join, Navbar, Offer, SampeReport, Choices } from "../components/Fragments/Home";
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
