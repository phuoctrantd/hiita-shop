import { Box, Stack, IconButton } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { red } from "@/styles";

interface SlideImageProps {
  images: Array<StaticImageData>;
}

const SlideImage: React.FC<SlideImageProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChooseImage = (index: number) => {
    setCurrentIndex(index);
    scrollIntoView(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    scrollIntoView((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    scrollIntoView((currentIndex - 1 + images.length) % images.length);
  };

  const scrollIntoView = (index: number) => {
    const imageElement = document.getElementById(`image-${index}`);
    if (imageElement) {
      imageElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "auto", position: "relative" }}>
        <Image
          src={images[currentIndex]}
          alt="product"
          style={{
            width: "100%",
            height: "500px",
          }}
        />
      </Box>
      <Box position={"relative"}>
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 30, color: red[100] }} />
        </IconButton>
        <Stack
          direction={"row"}
          spacing={1}
          sx={{
            overflow: "auto",
            mt: 2,
            "&::-webkit-scrollbar": {
              width: 0,
            },
          }}
        >
          {images.map((image, index) => (
            <Image
              id={`image-${index}`}
              onClick={() => handleChooseImage(index)}
              key={index}
              src={image}
              alt="product"
              style={{
                cursor: "pointer",
                width: "100%",
                height: "100px",
                border:
                  index === currentIndex ? `2px solid  ${red[100]}` : "none",
              }}
            />
          ))}
        </Stack>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: 30, color: red[100] }} />
        </IconButton>
      </Box>
    </>
  );
};

export default SlideImage;
