import ButtonPrimary from "../../Elements/Button/ButtonPrimary";
import { Link } from "react-router-dom";

export default function Works() {
  return (
    <>
      <div className="bg-[#fafafa] min-h-screen flex items-center justify-center">
        <div className="container flex flex-col lg:flex-row-reverse justify-around">
          <div className="flex justify-center">
            <figure>
              <img src="/images/png/BackEnd.png" alt="Sagara" className="min-w-full lg:max-w-xl py-10 rounded-xl" />
            </figure>
          </div>

          <div className="space-y-5 w-full lg:w-[22rem]">
            <div>
              <h2 className="text-[#A51525] font-bold text-[40px]">01</h2>
            </div>
            <div>
              <h3 className="font-roboto-flex text-[40px]">Back End (BE)</h3>
              <p className="font-roboto text-[15px]">Seorang backend developer bertanggung jawab untuk merancang dan mengembangkan software di sisi server yang berkaitan dengan logika serta database, mengelola basis data serta mengatur integrasi API, dan memastikan bahwa seluruh program di balik software bisa berjalan dengan sempurna.</p>
            </div>
            <div className="flex justify-center items-center md:justify-start">
              <Link to="/backend-description"><ButtonPrimary>Get Certification</ButtonPrimary></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fafafa] min-h-full flex items-center justify-center">
        <div className="container flex flex-col lg:flex-row justify-around">
          <div className="flex justify-center">
            <figure>
              <img src="/images/png/FrontEnd.png" alt="Sagara" className="min-w-full lg:max-w-xl py-10 rounded-xl" />
            </figure>
          </div>

          <div className="space-y-5 w-full lg:w-[22rem]">
            <div>
              <h2 className="text-[#A51525] font-bold text-[40px]">02</h2>
            </div>
            <div>
              <h3 className="font-roboto-flex text-[40px]">Front End (FE) </h3>
              <p className="font-roboto text-[15px]">Seorang frontend developer bertanggung jawab untuk merancang dan mengembangkan tampilan visual dan interaksi pengguna pada sebuah website atau aplikasi web dengan menggunakan bahasa pemrograman seperti HTML, CSS, dan JavaScript.</p>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link to="/frontend-description"><ButtonPrimary>Get Certification</ButtonPrimary></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fafafa] min-h-screen flex items-center justify-center">
        <div className="container flex flex-col lg:flex-row-reverse justify-around">
          <div className="flex justify-center">
            <figure>
              <img src="/images/png/QualityAssurance.png" alt="Sagara" className="min-w-full lg:max-w-xl py-10 rounded-xl" />
            </figure>
          </div>

          <div className="space-y-5 w-full lg:w-[22rem]">
            <div>
              <h2 className="text-[#A51525] font-bold text-[40px]">03</h2>
            </div>
            <div>
              <h3 className="font-roboto-flex text-[40px]">Quality Assurance (QA) </h3>
              <p className="font-roboto text-[15px]">Seorang quality assurance bertanggung jawab untuk memastikan produk software yang dihasilkan oleh perusahaan sesuai dengan standar kualitas yang telah ditetapkan, dengan melakukan testing dan reporting pada setiap tahap pengembangan software.</p>
            </div>
            <div className="flex justify-center items-center md:justify-start">
              <Link to="/quality-assurance-description"><ButtonPrimary>Get Certification</ButtonPrimary></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fafafa] min-h-full flex items-center justify-center">
        <div className="container flex flex-col lg:flex-row justify-around">
          <div className="flex justify-center">
            <figure>
              <img src="/images/png/UI-UX.png" alt="Sagara" className="min-w-full lg:max-w-xl py-10 rounded-xl" />
            </figure>
          </div>

          <div className="space-y-5 w-full lg:w-[22rem]">
            <div>
              <h2 className="text-[#A51525] font-bold text-[40px]">04</h2>
            </div>
            <div>
              <h3 className="font-roboto-flex text-[40px]">UI/UX Designer</h3>
              <p className="font-roboto text-[15px]">Seorang UI/UX Designer bertanggung jawab untuk merancang dan mengembangkan tampilan visual dan interaksi pengguna pada sebuah website atau aplikasi web dengan menggunakan bahasa pemrograman seperti HTML, CSS, dan JavaScript, serta memastikan bahwa tampilan web atau aplikasi yang dibuat dapat menarik, fungsional, dan ramah bagi user (user friendly) dengan memperhatikan kebutuhan dan hasil yang diinginkan pengguna.</p>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link to="/uiux-design-description"><ButtonPrimary>Get Certification</ButtonPrimary></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
