import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "../../../components/ui/avatar";
import LearnSocket from "@/app/learn_socket/page";

export default function Chat() {
  return (
    <>
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
