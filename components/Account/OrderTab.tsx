import { black, red, white } from "@/styles";
import {
  Box,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import ProductFruit1 from "@/public/images/products/product1.png";
import { formatPrice } from "@/lib/contansts";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  order: any;
}

const OrderTab = () => {
  const dataOrder = [
    {
      id: 1,
      order_id: 1,
      status: "PENDING",
      product_id: 1,
      product_variant_id: 1,
      quantity: 1,
      unit_price: 2,
      total_price: 3,
      created_at: null,
      updated_at: null,
      product: {
        id: 1,
        name: "nhan sam",
        price: 111111111,
        promotional_price: 111111,
        code: "1111",
        status: 1,
        is_publish: 1,
        type: 1,
        category_id: 1,
        country_id: 1,
        variant_type_id: 1,
        image_url: null,
        description: "111111111111111111111111111111111111",
        created_at: null,
        updated_at: null,
        min_price: 0,
        max_price: 0,
      },
      product_variant: {
        id: 1,
        name: "1",
        product_id: 1,
        price: 1111,
        promotional_price: 111111,
        status: 1,
        box_size: "1",
        code: "1111111",
        image_url: "123123",
        created_at: null,
        updated_at: null,
      },
    },
    {
      id: 2,
      order_id: 1,
      status: "PENDING",
      product_id: 1,
      product_variant_id: 1,
      quantity: 1,
      unit_price: 2,
      total_price: 3,
      created_at: null,
      updated_at: null,
      product: {
        id: 1,
        name: "nhan sam",
        price: 111111111,
        promotional_price: 111111,
        code: "1111",
        status: 1,
        is_publish: 1,
        type: 1,
        category_id: 1,
        country_id: 1,
        variant_type_id: 1,
        image_url: null,
        description: "111111111111111111111111111111111111",
        created_at: null,
        updated_at: null,
        min_price: 0,
        max_price: 0,
      },
      product_variant: {
        id: 1,
        name: "1",
        product_id: 1,
        price: 1111,
        promotional_price: 111111,
        status: 1,
        box_size: "1",
        code: "1111111",
        image_url: "123123",
        created_at: null,
        updated_at: null,
      },
    },
  ];
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, order, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index &&
          (order.length > 0 ? (
            <Box my={2}>
              {order.map((order: any) => (
                <Box
                  key={order.id}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={2}
                  sx={{
                    padding: "20px",
                    border: `1px solid ${red[100]}`,
                    borderRadius: "12px",
                    mb: 2,
                  }}
                >
                  <Typography fontSize={18} fontWeight={700} color={red[100]}>
                    {getOrderStatus(order.status)}
                  </Typography>

                  <Grid container>
                    <Grid item xs={isMobile ? 3 : 2.5}>
                      <Image
                        src={ProductFruit1}
                        alt="product"
                        height={isMobile ? 85 : 130}
                        width={isMobile ? 85 : 130}
                      />
                    </Grid>
                    <Grid item xs={isMobile ? 4.5 : 5.5}>
                      <Typography fontSize={16} fontWeight={600}>
                        Dâu tây nhật bản
                      </Typography>
                      <Typography fontSize={14} fontWeight={500}>
                        1kg
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={isMobile ? 1 : 2}
                      display={"flex"}
                      alignItems={"end"}
                      justifyContent={"center"}
                    >
                      <Typography fontSize={18} fontWeight={600}>
                        X1
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={isMobile ? 3.5 : 2}
                      display={"flex"}
                      alignItems={"end"}
                      justifyContent={"end"}
                    >
                      <Typography fontSize={18} fontWeight={600}>
                        {formatPrice(111111111)}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider sx={{ backgroundColor: white[200], my: 2 }} />
                    </Grid>
                  </Grid>

                  <Stack direction={"column"} spacing={2}>
                    <Stack direction={"row"} spacing={0.5}>
                      <Typography
                        fontSize={14}
                        fontWeight={500}
                        lineHeight={"10px"}
                      >
                        Có
                      </Typography>
                      <Typography
                        fontSize={18}
                        fontWeight={600}
                        color={red[100]}
                        lineHeight={"10px"}
                      >
                        2
                      </Typography>
                      <Typography
                        fontSize={18}
                        fontWeight={600}
                        color={black}
                        lineHeight={"10px"}
                      >
                        sản phẩm
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={0.5}>
                      <Typography
                        fontSize={14}
                        fontWeight={500}
                        lineHeight={"10px"}
                      >
                        Mã đơn :
                      </Typography>
                      <Typography
                        fontSize={14}
                        fontWeight={700}
                        lineHeight={"10px"}
                      >
                        #1102345
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    alignItems={"end"}
                    justifyContent={"end"}
                  >
                    <Typography fontSize={14} fontWeight={500}>
                      Tổng tiền:
                    </Typography>
                    <Typography fontSize={16} fontWeight={700} color={red[100]}>
                      {formatPrice(11111111)}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </Box>
          ) : (
            <Typography
              my={2}
              fontSize={16}
              fontWeight={600}
              color={red[100]}
              textAlign={"center"}
            >
              Không có đơn hàng nào
            </Typography>
          ))}
      </div>
    );
  }
  function getOrderStatus(status: string): string {
    switch (status) {
      case "PENDING":
        return "Đơn hàng đang chờ xử lý";
      case "DELIVERING":
        return "Đơn hàng đang được giao";
      case "COMPLETED":
        return "Đơn hàng đã hoàn thành";
      case "CANCELLED":
        return "Đơn hàng đã bị hủy";
      default:
        return "Trạng thái đơn hàng không xác định";
    }
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const allOrders = dataOrder;
  const pendingOrders = dataOrder.filter((order) => order.status === "PENDING");
  const deliveringOrders = dataOrder.filter(
    (order) => order.status === "DELIVERING"
  );
  const completedOrders = dataOrder.filter(
    (order) => order.status === "COMPLETED"
  );
  const cancelledOrders = dataOrder.filter(
    (order) => order.status === "CANCELLED"
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            centered={isMobile ? false : true}
            variant={isMobile ? "scrollable" : "standard"}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              "& .MuiTab-root": {
                fontSize: 14,
                fontWeight: 600,
                color: black,
                "&.Mui-selected": {
                  color: `${red[100]} !important}`,
                },
              },
            }}
          >
            <Tab label="Tất cả" />
            <Tab label="Chờ xác nhận" />
            <Tab label="Đang giao hàng" />
            <Tab label="Đã hoàn thành" />
            <Tab label="Đã hủy" />
          </Tabs>
        </Box>
        <CustomTabPanel
          value={value}
          index={0}
          order={allOrders}
        ></CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={1}
          order={pendingOrders}
        ></CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={2}
          order={deliveringOrders}
        ></CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={3}
          order={completedOrders}
        ></CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={4}
          order={cancelledOrders}
        ></CustomTabPanel>
      </Box>
    </>
  );
};

export default OrderTab;
