"use client";
import { FC, useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const LearnSocket: FC = () => {
  const socket = useMemo(() => io({ path: "/api/learnsocket", addTrailingSlash:false }), []);
  const [message, setMessage] = useState<string>("");
  const [allChats, setAllChats] = useState<string[]>([]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  useEffect(() => {
    const messageListener = (message: string) => {
      setAllChats((prevChats) => [...prevChats, message]);
    };

    socket.on("message", messageListener);

    // Fungsi pembersihan
    return () => {
      socket.off("message", messageListener);
    };
  }, [socket]);

  return (
    <>
      <div className="container-screen flex justify-center items-center px-[10vh] py-[5vh] bg-gray-100">
        <div className="container max-w-2xl mx-auto border-2 border-gradient-to-r from-indigo-500 to-blue-500 bg-white rounded-lg">
          <h4 className="text-center text-[20px] font-bold">Socket Test</h4>
          <div className="container mx-auto h-[80vh] p-2 flex flex-col gap-2 overflow-y-auto flex-grow">
            {allChats.map((chat) => (
              <div className="chat-bubble self-start px-5 text-white py-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-ss-lg rounded-se-lg rounded-ee-lg">{chat}</div>
            ))}
          </div>
          <form onSubmit={handleSendMessage}>
            <div className="container-screen flex w-full py-2 ">
              <div className="flex w-full bg-white border-t-2 border-indigo-500 p-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Masukan pesan"
                  className="w-full p-2 rounded-l-lg border-indigo-500 border-2 focus:ring-indigo-500 active:outline-double active:ring-2"
                />
                <button type="submit" className=" p-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-r-lg">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LearnSocket;
