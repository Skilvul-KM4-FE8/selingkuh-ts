import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "../../../components/ui/avatar";
import LearnSocket from "@/app/learn_socket/page";
import Navbar from "@/components/layout/Navbar";

export default function Chat() {
  return (
    <>
      <Navbar />
      <div>
        <Avatar>
          <AvatarImage src="" alt="Avatar" />
        </Avatar>
      </div>
      <div>
        <LearnSocket />
      </div>
    </>
  );
}
