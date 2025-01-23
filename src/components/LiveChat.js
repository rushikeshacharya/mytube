import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API Polling...", generateRandomMessage());
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[315px] ml-2 p-2 border border-black bg-slate-100 rounded-lg  overflow-y-scroll flex flex-col-reverse">
      Live Chat
      {chatMessage.map((c, i) => {
        return <ChatMessage key={i} name={c.name} message={c.message} />;
      })}
    </div>
  );
};

export default LiveChat;
