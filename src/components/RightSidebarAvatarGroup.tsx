import { Avatar as AvatarIcon, AvatarGroup } from "@mui/material";
import { Avatar } from "../models/Avatar";

interface Props {
  avatars: Avatar[];
}

export default function RightSidebarAvatarGroup({ avatars }: Props) {
  return (
    <AvatarGroup>
      {avatars.map((avatar, index) => (
        <AvatarIcon key={index} alt={avatar.username} src={avatar.url} />
        // <AvatarIcon key={index} alt={avatar.username}>
        //   <Image src={avatar.url} layout="fill" alt="" />
        // </AvatarIcon>
      ))}
    </AvatarGroup>
  );
}
