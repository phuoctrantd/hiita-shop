import React from "react";
import Drawer from "@mui/material/Drawer";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import { red } from "@/styles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { MENU_DATA, generateSlug } from "@/lib/contansts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useAtom } from "jotai";
import { categoriesState } from "@/lib/hooks/categoriesState";
interface DrawerContainerProps {
  openMenu: boolean;
  handleCloseMenu: () => void;
}

const DrawerContainer: React.FC<DrawerContainerProps> = ({
  openMenu,
  handleCloseMenu,
}) => {
  const [categories, setCategories] = useAtom(categoriesState);
  return (
    <Drawer
      anchor={"left"}
      open={openMenu}
      onClose={handleCloseMenu}
      PaperProps={{
        sx: { width: "70%", padding: "10px" },
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
              {item.subMenu ? (
                <Accordion
                  elevation={0}
                  sx={{
                    "&:before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: red[100] }} />}
                    sx={{
                      p: 0,
                      "& .MuiAccordionSummary-content": {
                        m: "0px !important",
                      },
                      minHeight: "0px !important",
                    }}
                  >
                    <Link href={item.link}>
                      <Typography
                        fontSize={14}
                        color={red[100]}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleCloseMenu();
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Link>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 0 }}>
                    <Divider
                      sx={{
                        my: "5px",
                        backgroundColor: red[100],
                        height: "1px",
                      }}
                    />
                    {categories.map((item, index) => (
                      <Box key={index} pl={2} onClick={handleCloseMenu}>
                        <Link
                          href={`/collections/${generateSlug(
                            item.name,
                            item.id
                          )}`}
                        >
                          <Typography fontSize={13} color={red[100]}>
                            {item.name}
                          </Typography>
                          <Divider
                            sx={{
                              my: "5px",
                              backgroundColor: red[100],
                              height: "1px",
                            }}
                          />
                        </Link>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ) : (
                <Link href={item.link} onClick={handleCloseMenu}>
                  <Typography fontSize={14} color={red[100]}>
                    {item.label}
                  </Typography>
                </Link>
              )}

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
