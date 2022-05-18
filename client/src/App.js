import { useState } from "react";
import { MoonIcon, SunIcon } from "./components/Icons";
import "./assets/images/bg-mobile-light.jpg";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="dark">
      <div className="h-screen w-screen bg-veryLightGrayishBlue bg-mobile-light bg-contain bg-no-repeat font-josefin dark:bg-veryDarkBlue dark:bg-mobile-dark md:bg-desktop-light">
        <header className="w-full px-10 pb-5 pt-12">
          <div className="flex items-center justify-between">
            <h1 className=" text-3xl tracking-[0.8rem] text-white">TODO</h1>
            <MoonIcon />
          </div>
        </header>
        <TaskList />
      </div>
    </div>
  );
};

export default App;
