import clsx from "clsx";
import {
  SearchIcon,
  MessageIcon,
  ExclamationIcon,
  BrandLogoIcon,
  ChevDownIcon,
} from "./Icons";

import { Menu, Transition } from "@headlessui/react";

const Navbar = () => {
  return (
    <div id="top-menu" className={clsx("flex items-center", "gap-1")}>
      <SearchIcon
        style={clsx(
          "h-8 w-8",
          "p-2",
          "stroke-gray-400 fill-white",
          "stroke-2",
          "bg-gray-50",
          "rounded-full"
        )}
      />
      <MessageIcon
        style={clsx(
          "h-8 w-8",
          "p-2",
          "stroke-gray-400 fill-white",
          "stroke-2",
          "bg-gray-50",
          "rounded-full"
        )}
      />
      <ExclamationIcon
        style={clsx(
          "h-8 w-8",
          "p-2",
          "stroke-gray-400 fill-white",
          "stroke-2",
          "bg-gray-50",
          "rounded-full"
        )}
      />
      <hr
        className={clsx(
          "w-[1px]",
          "h-4",
          "border-gray-50 border-l-[1px]",
          "mx-2"
        )}
      />
      <Menu as="div" className={clsx("relative")}>
        <Menu.Button className="block">
          <div className={clsx("flex", "items-center")}>
            <BrandLogoIcon
              style={clsx(
                "h-8 w-8",
                "p-1 mr-2",
                "stroke-gray-400",
                "bg-gray-400",
                "rounded-full"
              )}
            />
            <span className={clsx("font-normal text-sm text-gray-500")}>
              Banmei Inc.,
            </span>
            <ChevDownIcon
              style={clsx(
                "w-4 h-4",
                "stroke-gray-400 fill-white stroke-2",
                "ml-1"
              )}
            />
          </div>
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-50 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-50 opacity-0"
        >
          <Menu.Items>
            <div
              id="account-menu"
              className={clsx(
                "grid grid-rows-2",
                "absolute right-0",
                "h-36 w-48",
                "bg-white",
                "drop-shadow-md",
                "border-gray-50",
                "border-[1px]",
                "rounded-sm"
              )}
            >
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={clsx(
                      "py-2 px-4",
                      "h-fit",
                      "border-gray-50 border-b-[1px]",
                      active && "bg-gray-50"
                    )}
                  >
                    <p>Bannmei Inc.,</p>
                    <p className={clsx("italic", "text-gray-200 text-sm")}>
                      Administrator
                    </p>
                  </a>
                )}
              </Menu.Item>
              <div className={clsx("flex flex-col gap-1")}>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={clsx(
                        "block",
                        "text-violet",
                        "px-4",
                        active && "bg-gray-50"
                      )}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={clsx(
                        "block",
                        "text-violet",
                        "px-4",
                        active && "bg-gray-50"
                      )}
                    >
                      Sign out
                    </a>
                  )}
                </Menu.Item>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Navbar;
