import React from "react";
import Image from "next/image";
import fruit_category from "@/public/images/fruit_category.png";
import fruit_demo from "@/public/images/fruit_demo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box, Typography, styled, Grid } from "@mui/material";
import { white } from "@/styles";
import { SwiperStyled } from "./FruitTab";
const GinsengTab = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} px={7}>
          <SwiperStyled>
            <Swiper
              navigation={true}
              slidesPerView={5}
              modules={[Navigation]}
              spaceBetween={10}
            >
              <SwiperSlide>
                <Box position="relative">
                  <Image src={fruit_demo} alt="fruit_demo" />
                  <Box
                    sx={{
                      backgroundColor: "rgba(229, 30, 65, 0.60);",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "25%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: white[100],
                        fontSize: 14,
                        fontWeight: 500,
                        textAlign: "center",
                        pt: 0.6,
                      }}
                    >
                      Cam Osaka
                    </Typography>

                    <Typography
                      sx={{
                        color: white[100],
                        fontSize: 14,
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      1.399.000 VNĐ
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box position="relative">
                  <Image src={fruit_demo} alt="fruit_demo" />
                  <Box
                    sx={{
                      backgroundColor: "rgba(229, 30, 65, 0.60);",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "25%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: white[100],
                        fontSize: 14,
                        fontWeight: 500,
                        textAlign: "center",
                        pt: 0.6,
                      }}
                    >
                      Cam Osaka
                    </Typography>

                    <Typography
                      sx={{
                        color: white[100],
                        fontSize: 14,
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      1.399.000 VNĐ
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box position="relative">
                  <Image src={fruit_demo} alt="fruit_demo" />
                  <Box
                    sx={{
                      backgroundColor: "rgba(229, 30, 65, 0.60);",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "25%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: white[100],
                        fontSize: 14,
                        fontWeight: 500,
                        textAlign: "center",
                        pt: 0.6,
                      }}
                    >
                      Cam Osaka
                    </Typography>

                    <Typography
                      sx={{
                        color: white[100],
                        fontSize: 14,
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      1.399.000 VNĐ
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box position="relative">
                  <Image src={fruit_demo} alt="fruit_demo" />
                  <Box
                    sx={{
                      backgroundColor: "rgba(229, 30, 65, 0.60);",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "25%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: white[100],
                        fontSize: 14,
                        fontWeight: 500,
                        textAlign: "center",
                        pt: 0.6,
                      }}
                    >
                      Cam Osaka
                    </Typography>

                    <Typography
                      sx={{
                        color: white[100],
                        fontSize: 14,
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      1.399.000 VNĐ
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box position="relative">
                  <Image src={fruit_demo} alt="fruit_demo" />
                  <Box
                    sx={{
                      backgroundColor: "rgba(229, 30, 65, 0.60);",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "25%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: white[100],
                        fontSize: 14,
                        fontWeight: 500,
                        textAlign: "center",
                        pt: 0.6,
                      }}
                    >
                      Cam Osaka
                    </Typography>

                    <Typography
                      sx={{
                        color: white[100],
                        fontSize: 14,
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      1.399.000 VNĐ
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            </Swiper>
          </SwiperStyled>
        </Grid>
      </Grid>
    </>
  );
};

export default GinsengTab;
