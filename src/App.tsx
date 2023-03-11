// Dashboard demo
//
// * Design is copied from https://cruip.com/demos/mosaic/
// * Icons are from https://tabler-icons.io
// * We use Headless UI for ARIA support. https://headlessui.com/

import { useState } from "react";
import clsx from "clsx";

import {
  MenuIcon,
  SearchIcon,
  MessageIcon,
  ExclamationIcon,
  BrandLogoIcon,
  ChevDownIcon,
} from "./Icons";

import { Menu } from "@headlessui/react";

const AccountMenu = () => {
  return (
    <div
      id="account-menu"
      className={clsx(
        "grid grid-rows-2",
        "absolute right-0 top-10",
        "h-36 w-48",
        "bg-white",
        "drop-shadow-md",
        "border-gray-50",
        "border-[1px]",
        "rounded-sm"
      )}
    >
      <div
        className={clsx("py-2 px-4", "h-fit", "border-gray-50 border-b-[1px]")}
      >
        <p>Bannmei Inc.,</p>
        <p className={clsx("italic", "text-gray-200 text-sm")}>Administrator</p>
      </div>
      <div className={clsx("px-4", "flex flex-col gap-1")}>
        <a href="#" className={clsx("block", "text-violet")}>
          Settings
        </a>
        <a href="#" className={clsx("block", "text-violet")}>
          Sign out
        </a>
      </div>
    </div>
  );
};

const App = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  return (
    <div id="app" className={clsx("flex")}>
      <div id="sidebar-container" className={clsx("hidden")}></div>
      <div id="content-container">
        <div
          id="navbar"
          className={clsx(
            "flex",
            "place-items-center",
            "justify-between",
            "bg-white",
            "w-screen h-16",
            "px-4",
            "drop-shadow-sm"
          )}
        >
          <MenuIcon style={clsx("h-6 w-6", "stroke-gray-400 stroke-2")} />
          <div
            id="top-menu"
            className={clsx("flex place-items-center", "gap-1", "pr-2")}
          >
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
            <div
              id="account-menu-button"
              onClick={() => setAccountMenuOpen(!accountMenuOpen)}
              className={clsx("flex", "relative", "place-items-center")}
            >
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
              {accountMenuOpen ? <AccountMenu /> : <></>}
            </div>
          </div>
        </div>
        <div id="content" className={clsx("w-screen h-screen", "px-4")}></div>
      </div>
    </div>
  );
};

export default App;
