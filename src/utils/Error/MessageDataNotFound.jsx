import { RiFolderInfoFill } from "react-icons/ri";

const MessageDataNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <RiFolderInfoFill size={50} className="text-gray-400" />
      <h5 className="text-base">Sorry, Data Not Found!</h5>
    </div>
  );
};

export default MessageDataNotFound;
