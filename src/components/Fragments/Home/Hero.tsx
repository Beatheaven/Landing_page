// import { Link } from "react-router-dom";
// import { ButtonOutlineSecondary, ButtonPrimary } from "../../Elements/Button/";

export default function Hero() {
  return (
    <section className="bg-[url('/images/webp/hero-banner.webp')] bg-cover bg-center">
      <div className="container py-5 ">
        <div className="p-10 w-full max-w-none lg:max-w-4xl leading-10 space-y-5 text-center lg:text-left">
          <div className="leading-5 text-white mb-20">
            <h1 className="uppercase font-barlow font-black text-6xl lg:text-6xl ">The best way to predict the future is to invent it.</h1>
            <p className="text-base md:text-lg w-full max-w-2xl">Kunci untuk sukses dalam karier teknologi adalah belajar secara terus-menerus, beradaptasi dengan perubahan, dan memiliki hasrat untuk memecahkan masalah.</p>
          </div>
          {/*<div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-5">
            <div className="w-full max-w-full lg:max-w-xs">
              <Link to="https://app.certification.sagaratech.com">
              <ButtonOutlineSecondary width="100%">Get Modul</ButtonOutlineSecondary>
              </Link>
            </div>*/}
            {/* <div className="w-full max-w-full lg:max-w-xs">
              <Link to="https://app.certification.sagaratech.com">
              </Link><ButtonPrimary width="100%">Get Certification</ButtonPrimary>
            </div> */}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
