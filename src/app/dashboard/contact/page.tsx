import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Card } from "../../../components/ui/card";

export default function Contact() {
  return (
    <>
      <div className="mt-5">
        <div className="text-xl mb-2">Your Contact </div>
        <div>
          <Card>
            <div className="flex p-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <div>Name</div>
                <div className="text-sm font-extralight">Last Chat</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
