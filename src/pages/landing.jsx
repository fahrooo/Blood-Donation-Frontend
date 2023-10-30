import { Navigate } from "react-router-dom";
import donor from "/images/donor.png";
import logo from "/images/logo.png";
import { useState } from "react";
const LandingPage = () => {
  const [toLogin, setToLogin] = useState(false);
  const [toRegister, setToRegister] = useState(false);

  return (
    <>
      {toLogin && <Navigate to="/login" />}
      {toRegister && <Navigate to="/register" />}
      <div className="bg-white w-full h-16 fixed shadow-lg flex justify-between items-center px-5 md:px-10">
        <div className="text-black flex justify-center items-center gap-3">
          <img src={logo} className="w-6" />
          <h4 className="text-xl font-bold hidden md:block">Bloodis</h4>
        </div>
        <div className="flex justify-center items-center gap-2 text-black">
          <button
            className="px-4 py-2.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-800"
            onClick={() => setToLogin(true)}
          >
            Login
          </button>
        </div>
      </div>
      <div className="h-fit md:h-screen w-full bg-blue-600 flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full px-5 md:px-10 pb-5 text-white md:text-lg flex flex-col gap-2 justify-center md:pt-10 text-sm">
          <h4 className="text-3xl md:text-6xl text-center md:text-left font-bold">
            Bloodis
          </h4>
          <p className="mt-5 text-justify">
            Bloodis atau blood donation system merupakan sebuah sistem yang
            menyajikan informasi seputar donor darah di UIN Syarif Hidayatullah
            Jakarta. Sistem ini membantu civitas akademika dan masyarakat untuk
            lebih mudah mengakses dan berpartisipasi dalam kegiatan donor darah
            yang diselenggarakan di Kampus UIN.
          </p>
          <div className="w-full flex justify-center items-center py-10">
            <button
              className="px-4 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-300"
              onClick={() => setToRegister(true)}
            >
              Join With Us!
            </button>
          </div>
        </div>
        <div className="w-full">
          <img src={donor} className="mt-20 md:rounded-l-full" />
        </div>
      </div>
      <div className="h-fit md:h-screen w-full bg-gray-100 p-5 md:p-20">
        <h4 className="font-semibold text-2xl md:text-4xl text-center">
          Darah Kita Perlu Regenerasi, Ikuti Cara Berikut
        </h4>
        <div className="grid md:grid-cols-2 mt-5 md:mt-16 gap-5 text-white">
          <div className="w-full min-h-full bg-blue-600 p-5 rounded-lg">
            <h6 className="text-center font-semibold text-2xl">
              Pentingnya Regenerasi Darah
            </h6>
            <p className="mt-5">
              Darah merupakan komponen penting bagi tubuh kita. Mengingat darah
              berperan mengalirkan oksigen dan asupan nutrisi ke seluruh tubuh
              sehingga sel-sel tubuh dapat tetap hidup dan menjalankan fungsinya
              dengan baik. Oleh karena itu, sangat penting memperhatikan
              kesehatan darah kita dengan memaksimalkan regenerasi sel darah.
            </p>
            <p className="mt-5">
              Regenerasi darah adalah proses pembentukan kembali sel-sel darah
              dalam tubuh untuk menggantikan sel darah yang rusak atau mati
              akibat sudah lama di dalam tubuh. Darah mampu bertahan sampai 120
              hari saja sebelum akhirnya mati dan perlu regenerasi.
            </p>
            <p className="mt-5">
              Regenerasi ini memang terjadi secara alamiah di dalam hati dan
              limpa saat sel darah sudah sudah habis umurnya atau mati. Namun,
              akan lebih baik jika kita memaksimalkan proses regenerasi agar
              darah kita tetap dalam kondisi yang optimal dengan cara berikut.
            </p>
          </div>
          <div className="w-full h-full bg-blue-600 p-5 rounded-lg">
            <h6 className="text-center font-semibold text-2xl">
              Cara Optimalkan Regenerasi Darah
            </h6>
            <ol className="list-decimal list-inside mt-5">
              <li>
                Asupan Nutrisi yang Baik Konsumsi makanan yang banyak mengandung
                gizi dan hindari makanan cepat saji. Perbanyaklah konsumsi
                makanan yang mengandung protein karena dapat membantu
                mempercepat perbaikan sel-sel yang rusak atau mati di dalam
                tubuh. Protein banyak ditemukan pada daging, ikan, telur, tahu,
                kedelai, susu, dan sebagainya.
              </li>
              <li className="mt-2">
                Tidur yang Cukup di Malam Hari Penelitian menyebutkan proses
                regenerasi sel banyak terjadi saat kita istirahat di malam hari.
                Sehingga perlu tidur yang cukup 6-8 jam agar proses regenerasi
                berjalan maksimal.
              </li>
              <li className="mt-2">
                Saat kita mendonorkan darah, tubuh secara alamiah akan mengirim
                sinyal ke sumsum tulang belakang untuk memproduksi sel darah
                baru dalam 48 jam setelah donor. Dengan begitu, darah dalam
                tubuh kita menjadi lebih segar, sehat, dan meningkatkan
                kekebalan tubuh tentunya.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="h-fit md:h-screen w-full bg-blue-600 p-5 md:pt-28 md:px-20">
        <h4 className="font-semibold text-2xl md:text-4xl text-center text-white">
          Manfaat & Syarat Donor Darah
        </h4>
        <div className="grid md:grid-cols-2 mt-5 md:mt-16 gap-5 text-white">
          <div className="w-full h-full bg-white text-black p-5 rounded-lg">
            <h6 className="text-center font-semibold text-2xl">
              Manfaat Donor Darah
            </h6>
            <ol className="list-decimal list-inside mt-5">
              <li>
                Membantu saudara kita yang membutuhkan darah akibat mengalami
                masalah kesehatan. Faktanya, setiap delapan detik, ada satu
                orang yang membutuhkan transfusi darah di Indonesia.
              </li>
              <li className="mt-2">Mengurangi risiko penyakit jantung.</li>
              <li className="mt-2">
                Mencegah kanker si pembunuh nomor 1 saat ini.
              </li>
              <li className="mt-2">
                Bermasalah dengan berat badan? donor darah dapat mengendalikan
                dan menurunkan berat badan juga loh.
              </li>
            </ol>
          </div>
          <div className="w-full h-full bg-white text-black p-5 rounded-lg">
            <h6 className="text-center font-semibold text-2xl">
              Syarat Donor Darah
            </h6>
            <ol className="list-disc list-inside mt-5">
              <li>Sehat jasmani & rohani</li>
              <li className="mt-2">usia 17 - 60 tahun</li>
              <li className="mt-2">Berat badan minimal 45 Kg</li>
              <li className="mt-2">Tekanan darah normal</li>
              <li className="mt-2">Kadar haemoglobin 12,5-17,0 gr/dL%</li>
              <li className="mt-2">Tidak sedang mengkonsumsi obat</li>
              <li className="mt-2">Bagi wanita tidak sedang haid</li>
              <li className="mt-2">
                Jeda waktu minimal 2 bulan dari donor terakhir
              </li>
            </ol>
          </div>
        </div>
        <div className="mt-16">
          <h4 className="text-white font-semibold text-3xl text-center">
            Ikuti donor darah dan rasakan sendiri manfaatnya!
          </h4>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
