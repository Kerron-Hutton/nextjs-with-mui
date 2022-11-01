import { Box } from "@mui/material";
import FeedPost from "./FeedPost";

import { Post } from "../models/Post";

const userPosts: Post[] = [
  {
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    title: "Shrimp and Chorizo Paella",
    imageUrl: "https://bit.ly/3vrYZ9z",
    username: "John Brown",
    id: 1,
  },
  {
    description:
      "This shrimp paella recipe is not only healthy but satisfying, too! It has vitamin C from the sweet red pepper, fiber from the rice, and lean protein from the chicken sausage",
    title: "Grilled Chorizo and Shrimp Paella",
    imageUrl: "https://bit.ly/3JiZQiw",
    username: "John Brown",
    id: 2,
  },
  {
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    title: "One Pot Prawn and Chorizo Paella.",
    imageUrl: "https://bit.ly/3JgTOPo",
    username: "John Brown",
    id: 3,
  },
];

export default function Feed() {
  return (
    <Box sx={{ flex: 4 }}>
      {userPosts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </Box>
  );
}
