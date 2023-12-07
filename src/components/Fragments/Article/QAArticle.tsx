import { ButtonPrimary } from "../../Elements/Button/";
import { Subtitle, TypographyH1, Paragraph, TypographyH2 } from "../../Elements/Typography";
import Image from "../../Elements/Image/Image";
import { Link } from "react-router-dom";

export default function QAArticle() {
  return (
    <article className="container bg-white shadow-md w-full max-w-[1200px] h-full px-5 lg:px-24 py-5 space-y-5">
      <div>
        <TypographyH1 fontFamily="roboto" fontWeight="bold" fontSize="40px" fontColor="#A51535" uppercase={false}>
          Introduction to Quality Assurance{" "}
        </TypographyH1>
        <Subtitle fontColor="#888888" fontSize="18px">
          Mari mengenal Quality Assurance!
        </Subtitle>
      </div>
      <div className="space-y-3">
        <div>
          <TypographyH2 fontFamily="barlow" fontWeight="bold" fontSize="20px">
            Apa itu Quality Assurance
          </TypographyH2>
          <Paragraph fontSize="18px" fontColor="#212121" textPosition="justify">
            Sebelum membahas lebih jauh mengenai tugas dari QA, kita harus mengenal terlebih dahulu apa itu <u>Quality Assurance</u>. Menurut definisinya, Quality Assurance adalah pekerjaan yang memiliki tanggung jawab untuk memastikan dan
            menyiapkan segala kebutuhan dari aplikasi yang dibangun oleh perusahaan dapat bekerja dengan baik.{" "}
          </Paragraph>
        </div>
        <div>
          <TypographyH2 fontFamily="barlow" fontWeight="bold" fontSize="20px">
            Tugas Quality Assurance
          </TypographyH2>
          <Paragraph fontSize="18px" fontColor="#212121" textPosition="justify">
            <ol className="list-decimal list-inside">
              <li>Membuat kebutuhan dokumen, draf, dan mampu mengimplementasikan setiap standar prosedur QA untuk kepentingan organisasi maupun bisnis yang dijalankan.</li>
              <li>Memastikan ulang bahwa kualitas produk telah diperbarui dan diuji cobakan.</li>
            </ol>
          </Paragraph>
        </div>
        <Image src="/images/png/QARectangle.png" alt="" width="100%" height="auto" className="my-[30px]" />
        <div>
          <TypographyH2 fontFamily="barlow" fontWeight="bold" fontSize="20px">
            Skill yang harus dimiliki Quality Assurance
          </TypographyH2>
          <ol className="list-decimal list-inside text-[18px] text-[#212121] text-justify">
            <li>Mampu untuk memahami, berkomunikasi, dan membaca data dengan baik.</li>
            <li>Memiliki keahlian dalam manajemen proyek yang optimal.</li>
            <li>Memahami bagaimana sebuah produk dapat mempengaruhi pola pikir, kebiasaan, dan kehidupan manusia.</li>
          </ol>
          <Paragraph fontSize="20px" fontColor="#212121" textPosition="justify">
            Kemudian, untuk proses software Quality Assurance apa saja yang dibutuhkan saat ini? Kemampuan yang penting untuk dimiliki, antara lain sebagai berikut:
          </Paragraph>
          <ol className="list-decimal list-inside text-[18px] text-[#212121] text-justify">
            <li>Analisa dan pengujian fungsionalitas</li>
            <li>Perbaikan proses </li>
            <li>Mindset atau pola pikir pengujian</li>
            <li>Defect Management</li>
            <li>Pengujian Keamanan</li>
          </ol>
        </div>
        <div className="flex justify-end h-13 lg:h-15">
          <Link to="https://app.certification.sagaratech.com"><ButtonPrimary>Join with Us</ButtonPrimary></Link>
        </div>
      </div>
    </article>
  );
}
