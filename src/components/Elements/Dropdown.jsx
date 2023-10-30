import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useLogin } from "../hooks/useLogin";
import { Navigate } from "react-router-dom";
import * as changeCase from "change-case";
import { useEffect } from "react";
import { Logout } from "../hooks/useLogout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ className }) {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState(false);

  const infoPribadi = useLogin(setLogin);
  useEffect(() => {
    if (infoPribadi) {
      setName(changeCase.capitalCase(infoPribadi?.data?.name));
    }
  }, [infoPribadi]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      {login && <Navigate to="/login" replace={true} />}
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1 text-sm md:text-base font-semibold shadow-sm cursor-pointer">
          {name}
          <ChevronDownIcon
            className={`-mr-1 h-5 w-5 ${className}`}
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${className}`}
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}
                  onClick={() => Logout(setLogin)}
                >
                  Logout
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
