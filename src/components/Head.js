import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-xl">
      <div className="flex col-span-1">
        <img
          className="h-8 p-1 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
        />

        <img
          className="h-8 mx-2"
          src="https://icon-library.com/images/youtube-app-icon-transparent/youtube-app-icon-transparent-25.jpg"
        />
        <h1 className="font-bold text-xl">MyTube</h1>
      </div>
      <div className="col-span-10 px-10 ">
        <input
          className="w-1/2 rounded-l-full border border-gray-400 p-2"
          type="text"
        />
        <button className="rounded-r-full border border-gray-400 px-3 py-2 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
