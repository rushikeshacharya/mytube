import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);

  console.log("Rendering....");
  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase x
        </button>
        <span className="">X = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="">Y = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            ref.current += 1;
          }}
        >
          Increase Z
        </button>
        <span className="">Z = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
