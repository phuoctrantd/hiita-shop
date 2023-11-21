import React from "react";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import { Grid, Typography, styled, Stack, Box } from "@mui/material";
import { red, white } from "@/styles";
import { MENU_DATA, MENU_DATA_CATEGORY } from "@/lib/contansts";
import Link from "next/link";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import PopupState, { bindPopover, bindHover } from "material-ui-popup-state";
import Image from "next/image";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", gap: "10px" }}
                  {...bindHover(popupState)}
                >
                  <DragHandleOutlinedIcon
                    sx={{ fontSize: 35, color: red, cursor: "pointer" }}
                  />
                  <TextMenu>Danh mục sản phẩm</TextMenu>
                </Stack>
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
                  <Box width={250}>
                    {MENU_DATA_CATEGORY.map((item, index) => (
                      <Link key={index} href={item.link}>
                        <Stack
                          direction={"row"}
                          spacing={2}
                          p={2}
                          sx={{
                            cursor: "pointer",
                            color: red,
                            "&:hover": {
                              backgroundColor: red,
                              color: white[100],
                            },
                          }}
                        >
                          <Image
                            src={item.icon}
                            alt="icon"
                            width="20"
                            height="20"
                          />
                          <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                            {item.label}
                          </Typography>
                        </Stack>
                      </Link>
                    ))}
                  </Box>
                </HoverPopover>
              </div>
            )}
          </PopupState>
        </Grid>
        {MENU_DATA.map((item, index) => (
          <Grid
            item
            xs={item.grid}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: item.id === 7 ? "flex-end" : "flex-start",
            }}
            key={index}
          >
            <Link href={item.link}>
              <TextMenu>{item.label}</TextMenu>
            </Link>
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
  color: red,
  cursor: "pointer",
  "&:hover": {
    textShadow: "0px 0px 5px #E51E41",
  },
}));
