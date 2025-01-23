import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import { GET_VIDEO_BY_ID, GOOGLE_API_KEY } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

export const WatchPage = () => {
  const [params] = useSearchParams();

  const getVideo = async () => {
    const data = await fetch(
      GET_VIDEO_BY_ID + params.get("v") + `&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    // setVideos(json.items);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideo();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div>
          <iframe
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/" + params.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};
