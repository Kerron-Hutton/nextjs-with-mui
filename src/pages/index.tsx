import { Box, Grid } from "@mui/material";
import Add2 from "../components/Add";
import Feed from "../components/Feed";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

export default function Home() {
  return (
    <Box>
      <Grid container bgcolor="background.default" color="text.primary">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
        <Add2 />
      </Grid>
    </Box>
  );
}
