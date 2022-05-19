import React from "react";

const FilterMenu = ({ inList, setFilter }) => {
  return (
    <div
      className={`${
        inList
          ? "hidden justify-center gap-3 rounded-lg  px-10  md:flex"
          : "flex  w-full justify-around rounded-lg py-3 px-24 md:hidden"
      } bg-white text-sm text-gray-600 dark:bg-veryDarkDesaturatedBlue md:text-base`}
    >
      <div>
        <input
          className="hidden"
          type="radio"
          id="all"
          value="all"
          name="filter"
          onChange={(e) => setFilter(e.target.value)}
        />
        <label
          className=" cursor-pointer hover:font-bold hover:text-brightBlue"
          htmlFor="all"
        >
          All
        </label>
      </div>
      <div>
        <input
          className="hidden"
          onChange={(e) => setFilter(e.target.value)}
          type="radio"
          id="active"
          value="active"
          name="filter"
        />
        <label
          className=" cursor-pointer hover:font-bold hover:text-brightBlue"
          htmlFor="active"
        >
          Active
        </label>
      </div>
      <div>
        <input
          className="hidden"
          onChange={(e) => setFilter(e.target.value)}
          type="radio"
          id="completed"
          value="completed"
          name="filter"
        />
        <label
          className=" cursor-pointer hover:font-bold hover:text-brightBlue"
          htmlFor="completed"
        >
          Completed
        </label>
      </div>
    </div>
  );
};

export default FilterMenu;
