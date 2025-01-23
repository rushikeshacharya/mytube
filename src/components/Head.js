import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { Link } from "react-router-dom";
import { SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../store/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const searchCache = useSelector((store) => store.search);
  console.log("Search Cache", searchCache);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="rounded-r-full border border-gray-400 px-3 py-2 bg-gray-100">
          🔍
        </button>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[26.5rem] shadow-lg rounded-lg border">
            <ul>
              {suggestions.map((s, index) => {
                return (
                  <li
                    key={index}
                    className="py-2 px-3 shadow-sm hover:bg-gray-100"
                  >
                    🔍 {s}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
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
