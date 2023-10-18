import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Select(props) {
  const { data, selected, setSelected, placeholder, className, width } = props;
  return (
    <Menu as="div" className={`relative inline-block text-left ${width}`}>
      <div>
        <Menu.Button
          className={`inline-flex ${className} justify-between gap-x-1.5 rounded-md bg-white px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
        >
          <h6>
            {selected == "all" && placeholder}
            {selected != "all" &&
              data.find((item) => item.id == selected).name.substring(0, 27)}
            {selected != "all" &&
              data.find((item) => item.id == selected).name.length > 27 &&
              "..."}
          </h6>
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
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
          className={`absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="py-1">
            <Menu.Item>
              <h6
                className={classNames(
                  selected == "all"
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700",
                  "block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 md:text-gray-900"
                )}
                onClick={() => setSelected("all")}
              >
                {placeholder}
              </h6>
            </Menu.Item>
            {data &&
              data.map((item, index) => {
                return (
                  <Menu.Item key={index}>
                    <h6
                      className={classNames(
                        item.id == selected
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 md:text-gray-900"
                      )}
                      onClick={() => setSelected(item.id)}
                    >
                      {item.name}
                    </h6>
                  </Menu.Item>
                );
              })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
