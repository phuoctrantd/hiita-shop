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
import { MENU_DATA, generateSlug } from "@/lib/contansts";
import Link from "next/link";

import { useRouter } from "next/router";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import { useAtom } from "jotai";
import { useQuery } from "react-query";
import { categoriesState } from "@/lib/hooks/categoriesState";
import { CategoryResponse } from "@/lib/types/response";

const Menu = () => {
  const router = useRouter();
  const { pathname } = router;
  const { data } = useQuery<CategoryResponse>(`/categories`, {
    keepPreviousData: true,
  });
  const [categories, setCategories] = useAtom(categoriesState);
  React.useEffect(() => {
    if (data) {
      setCategories(data.data);
    }
  }, [data]);
  return (
    <>
      <Grid container sx={{ textAlign: "center", justifyContent: "center" }}>
        {MENU_DATA.map((item, index) => (
          <Grid item xs={1.7} key={index}>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <Link href={item.link} {...bindHover(popupState)}>
                    <TextMenu
                      sx={{
                        textShadow:
                          pathname === item.link && pathname !== "/"
                            ? "0px 0px 5px #E51E41"
                            : "none",
                      }}
                    >
                      {item.label}
                    </TextMenu>
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
                        {categories.map((item, indexSubitem) => (
                          <React.Fragment key={indexSubitem}>
                            <Link
                              href={`/collections/${generateSlug(
                                item.name,
                                item.id
                              )}`}
                            >
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
                                  {item.name}
                                </Typography>
                              </Box>
                            </Link>
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
