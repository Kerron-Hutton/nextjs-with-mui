import { SvgIconComponent } from "@mui/icons-material";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface Props {
  Icon: SvgIconComponent;
  text: string;
}

export default function LeftSidebarItems({ text, Icon }: Props) {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href="#">
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
