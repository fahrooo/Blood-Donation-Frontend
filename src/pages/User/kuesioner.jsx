import { useEffect, useState } from "react";
import Navbar from "../../components/Fragments/User/Navbar";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import { PostDonor, getDonorByDate } from "../../services/Donor.service";
import { useLogin } from "../../components/hooks/useLogin";
import { GetSchedule } from "../../services/Schedule.service";
import moment from "moment";
import * as changeCase from "change-case";

const KuesionerPage = () => {
  const [choice, setChoice] = useState("question");
  const [idUser, setIdUser] = useState(false);

  const { mutate: mutatePostDonor } = useMutation({
    mutationFn: PostDonor,
  });

  const { data: resLastSchedule } = GetSchedule({
    faculty: "all",
    page: 1,
    limit: 1,
  });

  useEffect(() => {
    getDonorByDate({
      idUser: idUser,
      date: moment(resLastSchedule?.data[0]?.schedule?.closed).format(
        "YYYY-MM-DD"
      ),
    }).then((res) => {
      if (res?.data.length > 0 && res.data[0]?.isRegister == true) {
        setChoice("yes");
      } else if (res?.data.length > 0 && res.data[0]?.isRegister == false) {
        setChoice("no");
      } else {
        setChoice("question");
      }
    });
  }, [idUser, resLastSchedule?.data]);

  const handleYes = () => {
    mutatePostDonor(
      {
        idUser: idUser,
        idSchedule: resLastSchedule?.data[0]?.id,
        isRegister: true,
        isDonor: false,
      },
      {
        onSuccess: () => {
          setChoice("yes");
        },
      }
    );
  };

  const handleNo = () => {
    mutatePostDonor(
      {
        idUser: idUser,
        idSchedule: resLastSchedule?.data[0]?.id,
        isRegister: false,
        isDonor: false,
      },
      {
        onSuccess: () => {
          setChoice("no");
        },
      }
    );
  };

  const infoPribadi = useLogin();
  useEffect(() => {
    if (infoPribadi) {
      setIdUser(infoPribadi?.data?.id);
    }
  }, [infoPribadi]);
  return (
    <div className="w-full h-screen bg-slate-200">
      <Navbar />
      <div className="h-[90%] flex justify-center items-center px-5">
        <div className="w-[400px] md:w-[800px] h-96 rounded-xl shadow-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 flex justify-center items-center flex-col">
          <div className="px-10">
            <h2 className="text-white text-xl md:text-3xl font-semibold text-center">
              {choice == "yes" && (
                <div className="w-full flex justify-center items-center">
                  <AiOutlineCheckCircle
                    size={100}
                    className="bg-green-600 rounded-full mb-5"
                  />
                </div>
              )}
              {choice == "no" && (
                <div className="w-full flex justify-center items-center">
                  <AiOutlineCheckCircle
                    size={100}
                    className="bg-green-600 rounded-full mb-5"
                  />
                </div>
              )}
              {choice == "question" &&
                `Apakah anda ingin melakukan donor darah pada tanggal ${moment(
                  new Date(resLastSchedule?.data[0]?.closed)
                ).format("DD MMMM YYYY")} di ${
                  resLastSchedule?.data[0]?.faculty?.name.length > 0
                    ? changeCase.capitalCase(
                        resLastSchedule?.data[0]?.faculty?.name
                      )
                    : "-"
                }?`}
              {choice == "yes" &&
                `Terima kasih, reminder akan dikirim melalui email. Tetap jaga kesehatan Anda.`}
              {choice == "no" &&
                `Terima kasih, Anda bisa berpartisipasi pada kegiatan donor selanjutnya.`}
            </h2>
            {choice == "question" && (
              <div className="flex justify-between w-full gap-5 mt-16">
                <button
                  className="w-1/2 md:py-4 py-2 bg-red-600 rounded-xl font-semibold text-white text-base md:text-xl hover:bg-red-800"
                  onClick={handleNo}
                >
                  TIDAK
                </button>
                <button
                  className="w-1/2 md:py-4 py-2 bg-green-600 rounded-xl font-semibold text-white text-base md:text-xl hover:bg-green-800"
                  onClick={handleYes}
                >
                  YA
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KuesionerPage;
