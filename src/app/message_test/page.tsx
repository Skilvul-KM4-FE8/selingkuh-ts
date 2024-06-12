"use client";
import { messageTest } from "@/api/mesage_test";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import Swal from "sweetalert2";
import io from "socket.io-client";
import { useMemo } from "react";

const MessageTest: FC = () => {
  const socket = useMemo(() => io({ path: "/api/socketio" }), []);
  const [message, setMessage] = useState<string>("");

  const queryClient = useQueryClient();

  const fetchMessages = async () => {
    // Tambahkan kode untuk mengambil pesan dari server
    const response = await fetch("/api/getmessages");
    const data = await response.json();
    console.log(data);
    return data;
    // return []
  };

  const { data: messages = [] } = useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages,
    initialData: [],
  });

  const mutation = useMutation({
    mutationFn: (message: string) => {
      return new Promise<void>((resolve) => {
        socket.emit("message", message, () => {
          resolve();
        });
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
      // fetchMessages();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  useEffect(() => {
    socket.on("message", async (message: string) => {
      await queryClient.setQueryData(["messages"], (old: any) => [...old, message]);
    });

    return () => {
      socket.off("message");
    };
  }, [socket]);

  const sendMessage = (e: any) => {
    e.preventDefault();
    mutation.mutate(message);
    setMessage("");
  };

  return (
    <div className="container-screen py-5 min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto border-indigo-500 border-2 rounded-lg bg-white shadow-lg flex flex-col h-[80vh] w-full max-w-2xl">
        <p className="text-xl py-5 text-center font-bold">Chat Test</p>
        <div className="chat-container flex flex-col flex-grow overflow-y-auto p-5">
          {messages.map((msg: any, index: any) => (
            <div key={index} className="chat bg-gradient-to-r from-indigo-500 to-blue-500 py-3 px-5 rounded-tr-xl rounded-bl-xl text-white mb-3 self-start">
              {msg.content}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage}>
          <div className="input-message w-full p-3 bg-white border-t-2 border-indigo-500">
            <div className="flex w-full">
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-l-lg border-indigo-500 border-2 w-full py-2 px-4 focus:outline-none focus:border-blue-500" placeholder="Type a message..." />
              <button onClick={sendMessage} className="bg-indigo-500 text-white rounded-r-lg px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageTest;
