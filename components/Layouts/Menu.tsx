import React from "react";
import {
  Grid,
  Typography,
  styled,
  Stack,
  Box,
  Menu as MuiMenu,
  MenuItem,
  Divider,
  makeStyles,
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
                      <Box p={1.25}>
                        {item.subMenu.map((item, indexSubitem) => (
                          <React.Fragment key={indexSubitem}>
                            <Box
                              sx={{
                                cursor: "pointer",
                                color: red[100],
                                position: "relative",
                                "&:before": {
                                  content: "''",
                                  position: "absolute",
                                  width: "0",
                                  height: "1px",
                                  bottom: "-1px",
                                  left: "0",
                                  transform: "translate(0%,0%)",
                                  backgroundColor: red[100],
                                  transformOrigin: "center",
                                  visibility: "hidden",
                                  transition: "all 0.3s ease-in-out",
                                },
                                "&:hover:before": {
                                  visibility: "visible",
                                  width: "100%",
                                },
                              }}
                              width={200}
                              color={red[100]}
                              p={0.8}
                            >
                              <Typography fontSize={15} fontWeight={600}>
                                {item.label}
                              </Typography>
                            </Box>
                            <Divider
                              sx={{
                                backgroundColor: "#f1eaea",
                              }}
                            />
                          </React.Fragment>
                        ))}
                      </Box>
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
