import { useState } from "react";
import { SunIcon } from "./components/Icons";

const App = () => {
  return (
    <main className="">
      <header className="bg-veryDarkGrayishBlue">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-white">TODO</h1>
          <SunIcon />
        </div>
      </header>
    </main>
  );
};

export default App;
