import React from "react";
import {
  Grid,
  Typography,
  styled,
  Stack,
  Box,
  Menu as MuiMenu,
  MenuItem,
} from "@mui/material";
import { red, white } from "@/styles";
import { MENU_DATA } from "@/lib/contansts";
import Link from "next/link";

import { useRouter } from "next/router";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";
import HoverPopover from "material-ui-popup-state/HoverPopover";

const Menu = () => {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid container sx={{ textAlign: "center" }}>
        {MENU_DATA.map((item, index) => (
          <Grid item xs={1.7} key={index}>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <Link href={item.link} {...bindHover(popupState)}>
                    <TextMenu>{item.label}</TextMenu>
                  </Link>
                  {item.subMenu && (
                    <HoverPopover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      {<Box width={250}>123</Box>}
                    </HoverPopover>
                  )}
                </div>
              )}
            </PopupState>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Menu;

const TextMenu = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  fontWeight: 600,
  color: red[100],
  cursor: "pointer",
  "&:hover": {
    textShadow: "0px 0px 5px #E51E41",
  },
}));
