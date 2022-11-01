import { Box, List } from "@mui/material";

import LeftSidebarItems from "./LeftSidebarItems";

import {
  AccountBox,
  Article,
  Group,
  Home,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

export default function LeftSidebar() {
  return (
    <Box sx={{ flex: 1 }}>
      <Box position="fixed">
        <List>
          <LeftSidebarItems Icon={Home} text="Home" />

          <LeftSidebarItems Icon={Article} text="Pages" />

          <LeftSidebarItems Icon={Group} text="Groups" />

          <LeftSidebarItems Icon={Storefront} text="Market" />

          <LeftSidebarItems Icon={Person} text="Friends" />

          <LeftSidebarItems Icon={Settings} text="Settings" />

          <LeftSidebarItems Icon={AccountBox} text="Profile" />
        </List>
      </Box>
    </Box>
  );
}
