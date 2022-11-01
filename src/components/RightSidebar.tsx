import { Box, ImageList, ImageListItem, List, Typography } from "@mui/material";
import Image from "next/image";

import { Avatar } from "../models/Avatar";
import { Conversation } from "../models/Conversation";

import RightSidebarAvatarGroup from "./RightSidebarAvatarGroup";
import RightSidebarConversation from "./RightSidebarConversation";

const avatars: Avatar[] = [
  {
    url: "https://material-ui.com/static/images/avatar/1.jpg",
    username: "Remy Sharp",
  },
  {
    url: "https://material-ui.com/static/images/avatar/1.jpg",
    username: "Remy Sharp",
  },
  {
    url: "https://material-ui.com/static/images/avatar/3.jpg",
    username: "Cindy Baker",
  },
  {
    url: "https://material-ui.com/static/images/avatar/6.jpg",
    username: "Trevor Henderson",
  },
  {
    url: "https://material-ui.com/static/images/avatar/7.jpg",
    username: "Trevor Henderson",
  },
  {
    url: "https://material-ui.com/static/images/avatar/8.jpg",
    username: "Trevor Henderson",
  },
  {
    url: "https://material-ui.com/static/images/avatar/7.jpg",
    username: "Trevor Henderson",
  },
];

const newPhotos = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
];

const conversations: Conversation[] = [
  {
    avatarUrl: "https://material-ui.com/static/images/avatar/1.jpg",
    message: "I'll be in your neighborhood doing errands this…",
    username: "Ali Connors",
    title: "Brunch this weekend?",
    id: 1,
  },
  {
    avatarUrl: "https://material-ui.com/static/images/avatar/2.jpg",
    message: "Wish I could come, but I'm out of town this…",
    username: "Scott, Alex, Jennifer",
    title: "Summer BBQ",
    id: 2,
  },
  {
    avatarUrl: "https://material-ui.com/static/images/avatar/3.jpg",
    message: "Do you have Paris recommendations? Have you ever…",
    username: "Sandra Adams",
    title: "Oui Oui",
    id: 3,
  },
];

export default function RightSidebar() {
  return (
    <Box flex={2} pr={7.5}>
      <Box position="fixed" width="100%">
        <Box display="flex" flexDirection="column" alignItems="start">
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>

          <RightSidebarAvatarGroup avatars={avatars} />
        </Box>

        <Box>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest Photos
          </Typography>

          <ImageList cols={3} rowHeight={100} gap={5} sx={{ maxWidth: 360 }}>
            {newPhotos.map((item, index) => (
              <ImageListItem key={index}>
                <Image src={item.img} alt={item.title} layout="fill" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Box>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest Conversations
          </Typography>

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {conversations.map((conversation) => (
              <RightSidebarConversation
                conversation={conversation}
                key={conversation.id}
              />
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
