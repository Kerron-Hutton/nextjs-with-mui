import {
  Add,
  DateRange,
  EmojiEmotions,
  Image as ImageIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Add2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalState = () => setIsModalOpen((prev) => !prev);

  const StyledModal = styled(Modal)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  }));

  const StyledTooltip = styled(Tooltip)(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
      left: "calc(100% - 15px)",
    },
    [theme.breakpoints.up("md")]: {
      left: 30,
    },
    position: "fixed",
    bottom: 20,
  }));

  return (
    <>
      <StyledTooltip onClick={handleModalState} title="Add">
        <Fab color="primary">
          <Add />
        </Fab>
      </StyledTooltip>

      <StyledModal open={isModalOpen} onClose={handleModalState}>
        <Box width={400} bgcolor="background.default" p={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>

          <Box display="flex" alignItems="center" gap={10} mb={10}>
            <Avatar
              src="https://material-ui.com/static/images/avatar/1.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography
              fontWeight={500}
              variant="subtitle1"
              color="text.primary"
            >
              John Doe
            </Typography>
          </Box>

          <TextField
            placeholder="What's on your mind"
            sx={{ width: "100%" }}
            variant="standard"
            multiline
            rows={4}
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <ImageIcon color="secondary" />
            <EmojiEmotions color="success" />
            <EmojiEmotions color="error" />
          </Stack>

          <ButtonGroup variant="contained" fullWidth>
            <Button>Post</Button>
            <Button sx={{ width: 100 }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}
