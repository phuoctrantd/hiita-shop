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
import { useQuery } from "react-query";
import { OrderResponse } from "@/lib/types/response";
import { OrderType } from "@/lib/types/order";
import { getImageUrl } from "@/lib/utils/ultil";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  orders: OrderType[];
}

const OrderTab = () => {
  const { data } = useQuery<OrderResponse>(`/user/orders`, {
    keepPreviousData: true,
  });
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, orders, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index &&
          (orders.length > 0 ? (
            <Box my={2}>
              {orders.map((order: OrderType) => (
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
                    {getOrderStatus(Number(order.status))}
                  </Typography>

                  {order.product_variants.map((product, index) => (
                    <Grid container key={index} spacing={1}>
                      <Grid item xs={isMobile ? 3.5 : 2.5}>
                        <img
                          src={getImageUrl(product.product_variant.image_url)}
                          alt="product"
                          height={isMobile ? 85 : 130}
                          width={isMobile ? 85 : 130}
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </Grid>
                      <Grid item xs={isMobile ? 4 : 4.5}>
                        <Typography fontSize={16} fontWeight={600}>
                          {product.product.name}
                        </Typography>
                        <Typography fontSize={14} fontWeight={500}>
                          {product.product_variant.name}
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
                          X{product.quantity}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={isMobile ? 3.5 : 3}
                        display={"flex"}
                        alignItems={"end"}
                        justifyContent={"end"}
                      >
                        <Typography fontSize={18} fontWeight={600}>
                          {formatPrice(
                            product.product_variant.promotional_price ||
                              product.product_variant.price
                          )}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider sx={{ backgroundColor: white[200], my: 2 }} />
                      </Grid>
                    </Grid>
                  ))}
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
                        {order.product_variants.length}
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
                        {order.code}
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
                      {formatPrice(order.price)}
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
  function getOrderStatus(status: number): string {
    switch (status) {
      case 1:
        return "Đơn hàng đang chờ xử lý";
      case 2:
        return "Đơn hàng đang được giao";
      case 3:
        return "Đơn hàng đã hoàn thành";
      case 4:
        return "Đơn hàng đã bị hủy";
      default:
        return "Trạng thái đơn hàng không xác định";
    }
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const dataOrder = data ? data.data : [];
  const allOrders = dataOrder;
  const pendingOrders = dataOrder.filter((order) => order.status === 1);
  const deliveringOrders = dataOrder.filter((order) => order.status === 2);
  const completedOrders = dataOrder.filter((order) => order.status === 3);
  const cancelledOrders = dataOrder.filter((order) => order.status === 4);

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
          orders={allOrders}
        ></CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={1}
          orders={pendingOrders}
        ></CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={2}
          orders={deliveringOrders}
        ></CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={3}
          orders={completedOrders}
        ></CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={4}
          orders={cancelledOrders}
        ></CustomTabPanel>
      </Box>
    </>
  );
};

export default OrderTab;
