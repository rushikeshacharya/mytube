import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-5 shadow-lg w-52 divide-y pt-5">
      <div className="pb-2">
        <ul>
          <li>
            {" "}
            <Link to="/"> 🏠 Home </Link>
          </li>
          <li className="mt-2">🎥 Shorts</li>
          <li className="mt-2">🔖 Subscriptions</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold pt-3 pb-1">You</h1>
        <ul className="pb-2">
          <li>🀄 History</li>
          <li className="mt-2">▶️ Playlist</li>
          <li className="mt-2">📺 Your Videos</li>
          <li className="mt-2">⌚ Watch Later</li>
          <li className="mt-2">👍 Liked Videos</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold pt-3">Subscriptions</h1>
      </div>
    </div>
  );
};

export default Sidebar;
