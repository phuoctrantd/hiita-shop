import React, { FC } from "react";
import Image from "next/image";
import fruit_category from "@/public/images/fruit_category.png";
import fruit_demo from "@/public/images/fruit_demo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Box, Typography, styled, Grid } from "@mui/material";
import { white } from "@/styles";

interface TabProps {
  fruitTab?: boolean;
}
const TabContainer: React.FC<TabProps> = ({ fruitTab }) => {
  return (
    <>
      <Grid container sx={{ textAlign: "center" }}>
        <Grid
          item
          xs={2.9}
          sx={{ display: fruitTab ? "flex" : "none", alignItems: "end" }}
        >
          <Image src={fruit_category} alt="fruit_category" width={270} />
        </Grid>
        <Grid item xs={fruitTab ? 9 : 12}>
          <SwiperStyled>
            <Swiper
              navigation={true}
              slidesPerView={fruitTab ? 4 : 5}
              modules={[Navigation, Autoplay]}
              spaceBetween={8}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
            >
              <SwiperSlide>
                <Box
                  position="relative"
                  sx={{
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Image
                    src={fruit_demo}
                    alt="fruit_demo"
                    height={221}
                    width={192}
                  />
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
                <Box
                  position="relative"
                  sx={{
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Image
                    src={fruit_demo}
                    alt="fruit_demo"
                    height={221}
                    width={192}
                  />
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
                <Box
                  position="relative"
                  sx={{
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Image
                    src={fruit_demo}
                    alt="fruit_demo"
                    height={221}
                    width={192}
                  />
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
                <Box
                  position="relative"
                  sx={{
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Image
                    src={fruit_demo}
                    alt="fruit_demo"
                    height={221}
                    width={192}
                  />
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
                <Box
                  position="relative"
                  sx={{
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Image
                    src={fruit_demo}
                    alt="fruit_demo"
                    height={221}
                    width={192}
                  />
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
                <Box
                  position="relative"
                  sx={{
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Image
                    src={fruit_demo}
                    alt="fruit_demo"
                    height={221}
                    width={192}
                  />
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

export default TabContainer;
export const SwiperStyled = styled("div")(() => ({
  " --swiper-navigation-color": white[100],
}));
