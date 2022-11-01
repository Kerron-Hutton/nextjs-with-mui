import { Conversation } from "../models/Conversation";

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

interface Props {
  conversation: Conversation;
}

export default function RightSidebarConversation({ conversation }: Props) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={conversation.username} src={conversation.avatarUrl} />
      </ListItemAvatar>

      <ListItemText
        primary={conversation.title}
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              color="text.primary"
              component="span"
              variant="body2"
            >
              {conversation.username}
            </Typography>
            {` - ${conversation.message}`}
          </>
        }
      />
    </ListItem>
  );
}
