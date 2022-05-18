import { useState } from "react";
import { MoonIcon, SunIcon } from "./components/Icons";
import "./assets/images/bg-mobile-light.jpg";
import TaskList from "./components/TaskList";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => setDarkTheme(!darkTheme);

  return (
    <div className={darkTheme && `dark`}>
      <div className="dark:md:bg-moblie-desktop-dark h-screen w-screen bg-veryLightGrayishBlue bg-mobile-light bg-contain bg-no-repeat font-josefin dark:bg-veryDarkBlue dark:bg-mobile-dark md:bg-desktop-light">
        <header className="w-full px-10 pb-5 pt-12">
          <div className="flex items-center justify-between">
            <h1 className=" text-3xl tracking-[0.8rem] text-white">TODO</h1>
            {darkTheme ? (
              <SunIcon toggleTheme={toggleTheme} />
            ) : (
              <MoonIcon toggleTheme={toggleTheme} />
            )}
          </div>
        </header>
        <TaskList darkTheme={darkTheme} />
      </div>
    </div>
  );
};

export default App;
