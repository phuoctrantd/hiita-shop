import AccountTab from "@/components/Account/AccountTab";
import OrderTab from "@/components/Account/OrderTab";
import Page from "@/components/Page";
import { useAuth } from "@/lib/provider/AuthProvider";
import { red, white } from "@/styles";
import {
  Avatar,
  Box,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NextPage } from "next";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const Account: NextPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { user } = useAuth();
  return (
    <>
      <Page title="Thông tin cá nhân">
        <Grid container spacing={3}>
          <Grid item xs={isMobile ? 12 : 3}>
            <Box sx={{ border: `1px solid ${red[100]}`, borderRadius: "12px" }}>
              <Stack
                direction="row"
                spacing={1}
                p={"10px 20px 10px 16px"}
                alignItems={"center"}
                justifyContent={isMobile ? "center" : "unset"}
                mb={isMobile ? 2 : "unset"}
              >
                <Avatar sx={{ backgroundColor: red[100], color: white[100] }}>
                  {user?.name?.charAt(0)}
                </Avatar>
                <Typography fontSize={16} fontWeight={500}>
                  {user?.name}
                </Typography>
              </Stack>
              <Tabs
                orientation={isMobile ? "horizontal" : "vertical"}
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={{
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                  "& .Mui-selected": {
                    backgroundColor: red[100],
                    color: `${white[100]} !important`,
                  },
                  "& .MuiTab-root": {
                    fontSize: 14,
                    fontWeight: 500,
                    alignItems: isMobile ? "center" : "flex-start",
                    borderRadius: isMobile
                      ? value === 1
                        ? "0 0 10px 0"
                        : "0 0 0 10px"
                      : value === 1
                        ? "0 0 10px 10px"
                        : "unset",
                    color: red[100],
                    width: isMobile ? "50%" : " 100%",
                  },
                }}
              >
                <Tab label="Thông tin cá nhân" />
                <Tab label="Đơn hàng" />
              </Tabs>
            </Box>
          </Grid>
          <Grid item xs={isMobile ? 12 : 9}>
            <TabPanel value={value} index={0}>
              <AccountTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <OrderTab />
            </TabPanel>
          </Grid>
        </Grid>
      </Page>
    </>
  );
};

export default Account;
