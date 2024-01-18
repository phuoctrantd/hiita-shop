import Page from "@/components/Page";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import { black, red, white } from "@/styles";
import Image from "next/image";
import PhoneIcon from "@/public/images/phone_icon_1.svg";
import { TextField } from "@/components/TextField";
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const validation = z.object({
    name: z
      .string()
      .min(1, "Họ và tên là bắt buộc")
      .max(30, "Họ và tên không được quá 30 ký tự"),
    email: z.string().min(1, "Email là bắt buộc").email("Email không hợp lệ"),
    content: z
      .string()
      .min(1, "Nội dung là bắt buộc")
      .max(500, "Nội dung không được quá 500 ký tự"),
  });
  type ContactForm = z.infer<typeof validation>;
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    defaultValues: {
      name: "",
      email: "",
      content: "",
    },
    resolver: zodResolver(validation),
  });
  const onSubmit: SubmitHandler<ContactForm> = async (value) => {
    try {
    } catch (e) {
      return;
    }
  };
  return (
    <Page title="Liên hệ">
      <Box mb={5}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5968388002093!2d105.84495187597095!3d21.048811580605523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb41a570d9f%3A0x18ab156fcca86b51!2zNTIgUC4gVMOibiDhuqRwLCBQaMO6YyB4w6EsIEJhIMSQw6xuaCwgSMOgIE7hu5lpIDExMTE2LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1705556361059!5m2!1svi!2s"
          style={{ border: "0", width: "100%", height: "500px" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={isMobile ? 12 : 5}>
          <Stack direction={"column"} spacing={2}>
            <Stack
              direction={"row"}
              spacing={1}
              p={isMobile ? "10px" : "10px 10px 10px 28px"}
              sx={{ backgroundColor: "#f7f7f7" }}
              alignItems="center"
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: red[100],
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "36px",
                  width: "36px",
                }}
              >
                <PlaceIcon sx={{ color: white[100] }} />
              </Box>
              <Box>
                <TextTitle>Địa chỉ:</TextTitle>
                <TextContent>52 Tân Ấp, Q. Ba Đình, Hà Nội</TextContent>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              spacing={1}
              p={isMobile ? "10px" : "10px 10px 10px 28px"}
              sx={{ backgroundColor: "#f7f7f7" }}
              alignItems="center"
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: red[100],
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "36px",
                  width: "36px",
                }}
              >
                <QuestionMarkOutlinedIcon sx={{ color: white[100] }} />
              </Box>
              <Box>
                <TextTitle>Gửi thắc mắc:</TextTitle>
                <TextContent>hiita.vn@gmail.com</TextContent>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              spacing={1}
              p={isMobile ? "10px" : "10px 10px 10px 28px"}
              sx={{ backgroundColor: "#f7f7f7" }}
              alignItems="center"
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: red[100],
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "36px",
                  width: "36px",
                }}
              >
                <img
                  src={PhoneIcon.src}
                  alt="icon_phone"
                  width="20"
                  height="20"
                />
              </Box>
              <Box>
                <TextTitle>Điện thoại:</TextTitle>
                <TextContent>0818836383 - 0389606663 </TextContent>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={isMobile ? 12 : 7}>
          <form autoComplete="new-contact" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <Stack
                direction={isMobile ? "column" : "row"}
                spacing={isMobile ? 2 : 1}
                alignItems="center"
              >
                <Box sx={{ width: isMobile ? "100%" : "50%" }}>
                  <TextLabel>Họ và tên</TextLabel>
                  <TextField
                    name="name"
                    placeholder="Họ và tên"
                    control={control}
                  />
                </Box>
                <Box sx={{ width: isMobile ? "100%" : "50%" }}>
                  <TextLabel>Email</TextLabel>
                  <TextField
                    name="email"
                    placeholder="Email"
                    control={control}
                  />
                </Box>
              </Stack>
              <Box sx={{ width: "100%" }}>
                <TextLabel>Nội dung</TextLabel>
                <TextField
                  name="content"
                  placeholder="Nội dung"
                  control={control}
                />
              </Box>
              <Box>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: red[100],
                    padding: "10px 20px",
                    mt: 1,
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: red[100],
                      boxShadow: `0 0 10px ${red[100]}`,
                    },
                  }}
                >
                  <Typography fontSize={14} fontWeight={500} color={white[100]}>
                    Gửi liên hệ
                  </Typography>
                </Button>
              </Box>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Contact;

export const TextTitle = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  color: black,
}));

export const TextContent = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  color: black,
}));
export const TextLabel = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  color: black,
  marginBottom: 5,
  "&::after": {
    content: "'*'",
    color: red[100],
  },
}));
