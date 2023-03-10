// Dashboard demo
//
// * Design is copied from https://cruip.com/demos/mosaic/
// * Icons are from https://tabler-icons.io

import clsx from "clsx";

import {
  MenuIcon,
  SearchIcon,
  MessageIcon,
  ExclamationIcon,
  BrandLogoIcon,
  ChevDownIcon,
} from "./Icons";

const App = () => {
  return (
    <div id="app" className={clsx("flex", "font-inter")}>
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
                "p-1",
                "stroke-gray-400 fill-white",
                "stroke-2",
                "bg-gray-50",
                "rounded-full"
              )}
            />
            <MessageIcon
              style={clsx(
                "h-8 w-8",
                "p-1",
                "stroke-gray-400 fill-white",
                "stroke-2",
                "bg-gray-50",
                "rounded-full"
              )}
            />
            <ExclamationIcon
              style={clsx(
                "h-8 w-8",
                "p-1",
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
              id="account-menu"
              className={clsx("flex", "place-items-center")}
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
              <ChevDownIcon style="w-4 h-4 stroke-gray-400 fill-white" />
            </div>
          </div>
        </div>
        <div
          id="content"
          className={clsx("bg-gray-50", "w-screen h-screen", "px-4")}
        ></div>
      </div>
    </div>
  );
};

export default App;
