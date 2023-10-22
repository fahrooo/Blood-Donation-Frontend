import { Toast } from "flowbite-react";
import { HiCheck, HiX } from "react-icons/hi";

const ToastNotification = ({ message, status }) => {
  return (
    <Toast className="absolute top-3 w-fit flex items-center justify-center shadow-xl border border-gray-200">
      {status == "success" && (
        <>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
            <HiCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-semibold">{message}</div>
        </>
      )}
      {status == "error" && (
        <>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-semibold">{message}</div>
        </>
      )}
    </Toast>
  );
};

export default ToastNotification;
