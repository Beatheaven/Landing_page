import { useEffect } from "react";
import BackEndDescLayouts from "../components/Layouts/BackEndDescLayouts";
import Navbar from "../components/Fragments/Navbar/Navbar";
import HeroBE from "../components/Elements/HeroDesc/HeroBE";
import BackEndArticle from "../components/Fragments/Article/BackEndArticle";
import Footer from "../components/Fragments/Footer/Footer";

export default function BackendDesc() {
  useEffect(() => {
    document.title = "Back End Developer | IT Certification";
  }, []);
  return (
    <BackEndDescLayouts>
      <Navbar />
      <HeroBE title="back end developer" />
      <BackEndArticle />
      <Footer />
    </BackEndDescLayouts>
  );
}
