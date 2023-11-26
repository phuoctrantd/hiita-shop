import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, Divider, Stack, Typography } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import { red } from "@/styles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { MENU_DATA } from "@/lib/contansts";
interface DrawerContainerProps {
  openMenu: boolean;
  handleCloseMenu: () => void;
}

const DrawerContainer: React.FC<DrawerContainerProps> = ({
  openMenu,
  handleCloseMenu,
}) => {
  return (
    <Drawer
      anchor={"left"}
      open={openMenu}
      onClose={handleCloseMenu}
      PaperProps={{
        sx: { width: "60%", padding: "10px" },
      }}
    >
      <ClickAwayListener onClickAway={handleCloseMenu}>
        <Box>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            onClick={handleCloseMenu}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <DragHandleOutlinedIcon
                sx={{ fontSize: "30px", color: red[100] }}
              />
              <Typography color={red[100]} fontWeight={700}>
                Menu
              </Typography>
            </Stack>
            <Box>
              <CloseOutlinedIcon sx={{ fontSize: "25px", color: red[100] }} />
            </Box>
          </Stack>
          <Divider
            sx={{
              my: "5px",
              backgroundColor: red[100],
              height: "1px",
            }}
          />
          {MENU_DATA.map((item, index) => (
            <React.Fragment key={index}>
              <Stack direction={"column"}>
                <Typography fontSize={14} color={red[100]}>
                  {item.label}
                </Typography>
              </Stack>
              <Divider
                sx={{
                  my: "10px",
                  backgroundColor: red[100],
                  height: "1px",
                }}
              />
            </React.Fragment>
          ))}
        </Box>
      </ClickAwayListener>
    </Drawer>
  );
};

export default DrawerContainer;
