import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [number, setNumber] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Memoised function

  const prime = useMemo(() => {
    console.log("Calculating prime of ", number);
    return findNthPrime(number);
  }, [number]);

  // normal function

  //   const prime = () => {
  //     console.log("Calculating prime of ", number);
  //     return findNthPrime(number);
  //   };

  return (
    <>
      <div
        className={
          "m-4 p-2 w-96 border border-black " +
          (isDarkTheme && "bg-gray-900 text-white")
        }
      >
        <div className="p-2 m-2 relative ">
          <button
            className="absolute top-0 right-0 shadow-md p-1 m-2 rounded-md bg-green-200 text-black"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            Toggle
          </button>
        </div>

        <input
          className="p-2 m-2 border border-black bg-gray-200 text-black"
          type="number"
          placeholder="Enter Number:"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div>
          <h1 className="p2 m-2 font-bold">Prime Number is: {prime}</h1>
        </div>
      </div>
    </>
  );
};

export default Demo;
