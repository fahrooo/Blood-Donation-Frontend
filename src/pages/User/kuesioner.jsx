import { MdOutlineHealing } from "react-icons/md";

const KuesionerPage = () => {
  return (
    <div className="w-full h-screen bg-slate-200">
      <div className="h-[10%] flex justify-between items-center px-5 md:px-10 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 shadow-2xl">
        <div className="text-white flex justify-center items-center gap-3">
          <MdOutlineHealing size={40} />
          <h4 className="text-xl font-bold hidden md:block">Blood Donation</h4>
        </div>
        <h6 className="font-semibold text-base text-white">
          CIndi Maelani Putri
        </h6>
      </div>
      <div className="h-[90%] flex justify-center items-center px-5">
        <div className="w-[400px] md:w-[800px] h-96 rounded-xl shadow-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 flex justify-center items-center flex-col">
          <div className="px-10">
            <h2 className="text-white text-3xl font-semibold text-center mb-16">
              Apakah anda ingin melakukan donor darah pada tanggal 21 November
              2023 di Fakultas Ilmu Kesehatan?
            </h2>
            <div className="flex justify-between w-full gap-5">
              <button className="w-1/2 py-4 bg-red-600 rounded-xl font-semibold text-white text-xl hover:bg-red-800">
                TIDAK
              </button>
              <button className="w-1/2 py-4 bg-green-600 rounded-xl font-semibold text-white text-xl hover:bg-green-800">
                YA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KuesionerPage;
