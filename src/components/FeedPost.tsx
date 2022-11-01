import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import Image from "next/image";
import { Post } from "../models/Post";

import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  styled,
  Typography,
} from "@mui/material";

interface Props {
  post: Post;
}

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    height: 600,
  },
  // [theme.breakpoints.up("xs")]: {
  //   height: 200,
  // },
}));

export default function FeedPost({ post }: Props) {
  return (
    <Card sx={{ m: 3 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={post.username}
        subheader="September 14, 2016"
      />

      <StyledCardMedia title={post.title}>
        <Box position="relative" height="100%">
          <Image
            src={post.imageUrl}
            objectFit="cover"
            alt={post.title}
            layout="fill"
          />
        </Box>
      </StyledCardMedia>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            checkedIcon={<Favorite sx={{ color: "red" }} />}
            icon={<FavoriteBorder />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
