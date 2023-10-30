import { Dialog, Transition } from "@headlessui/react";
import { useRef } from "react";
import { Fragment } from "react";
import Button from "./Button";
import { MdClose } from "react-icons/md";

const ModalForm = (props) => {
  const { open, setOpen, children, title, onClick, textButton, colorButton } =
    props;
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto overflow-hidden">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-lg p-4">
                <div className="w-full flex justify-end" ref={cancelButtonRef}>
                  <MdClose
                    size={30}
                    className="text-gray-400 cursor-pointer"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <div className="bg-white px-4 pt-2 md:px-4">
                  <div className="flex items-start">
                    <div className="text-center md:mt-0 md:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-semibold leading-6 text-gray-900"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-5 w-full text-left">{children}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 md:flex md:flex-row-reverse md:px-4 md:gap-2">
                  <Button
                    color={colorButton}
                    className="w-full md:w-fit py-2.5 px-3"
                    handleOnClick={onClick}
                  >
                    {textButton}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalForm;
