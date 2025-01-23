import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

  const chatMessage = useSelector((store) => store.chat.messages);

  const sendMessage = () => {
    dispatch(
      addMessage({
        name: "Flash",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // dispatch(
      //   addMessage({
      //     name: generateRandomName(),
      //     message: generateRandomMessage(),
      //   })
      // );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="w-full h-[315px] ml-2 p-2 border border-black bg-slate-100 rounded-lg  overflow-y-scroll flex flex-col-reverse">
        Live Chat
        <div>
          {chatMessage.map((c, i) => {
            return <ChatMessage key={i} name={c.name} message={c.message} />;
          })}
        </div>
      </div>
      <div className="w-96 p-2 ml-2 border border-black rounded-md">
        <input
          className="px-2 w-80 rounded-md bg-gray-200 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="w-10" onClick={() => sendMessage()}>
          ▶️
        </button>
      </div>
    </>
  );
};

export default LiveChat;
