// Dashboard demo
//
// * Design is copied from https://cruip.com/demos/mosaic/
// * Icons are from https://tabler-icons.io
// * We use Headless UI for ARIA support. https://headlessui.com/

import clsx from "clsx";
import Navbar from "./components/Navbar";
import { MenuIcon } from "./components/Icons";
import { Popover, Transition } from "@headlessui/react";

const App = () => {
  return (
    <div id="app" className={clsx("flex")}>
      <Popover>
        <div id="sidebar-container" className={clsx("hidden")}></div>
      </Popover>
      <div id="content-container">
        <div
          id="navbar"
          className={clsx(
            "flex",
            "place-items-center",
            "justify-between",
            "bg-white",
            "w-screen h-16",
            "pl-4 pr-2",
            "drop-shadow-sm"
          )}
        >
          <MenuIcon style={clsx("h-6 w-6", "stroke-gray-400 stroke-2")} />
          <Navbar />
        </div>
        <div id="content" className={clsx("w-screen h-screen", "px-4")}></div>
      </div>
    </div>
  );
};

export default App;
