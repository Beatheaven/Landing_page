import UIUXLayouts from "../components/Layouts/UIUXLayouts";
import { useEffect } from "react";
import HeroUIUX from "../components/Elements/HeroDesc/HeroUIUX";
import Footer from "../components/Fragments/Footer/Footer";
import Navbar from "../components/Fragments/Navbar/Navbar";
import UIUXArticle from "../components/Fragments/Article/UIUXArticle";

export default function UIUXDesc() {
  useEffect(() => {
    document.title = "UI/UX Design | IT Certification";
  }, []);
  return (
    <UIUXLayouts>
      <Navbar />
      <HeroUIUX title="ui/ux design" />
      {/* fix this. */}
      <UIUXArticle />
      <Footer />
    </UIUXLayouts>
  );
}
