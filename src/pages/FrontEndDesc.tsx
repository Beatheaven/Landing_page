import { useEffect } from "react";
import FrontEndDescLayouts from "../components/Layouts/FrontEndDescLayouts";
import HeroFE from "../components/Elements/HeroDesc/HeroFE";
import Footer from "../components/Fragments/Footer/Footer";
import Navbar from "../components/Fragments/Navbar/Navbar";
import FrontEndArticle from "../components/Fragments/Article/FrontEndArticle";

export default function FrontEndDesc() {
  useEffect(() => {
    document.title = "Front End Developer | IT Certification";
  }, []);

  return (
    <FrontEndDescLayouts>
      <Navbar />
      <HeroFE title="front end developer" />
      <FrontEndArticle />
      <Footer />
    </FrontEndDescLayouts>
  );
}
