import {
  Dialog,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Logo from "@/public/images/hiita-logo.png";
import { black, red } from "@/styles";
type Props = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  title: string;
  handleRegisterClick?: () => void;
  handleOpenLogin?: () => void;
};

const DialogBase: React.FC<Props> = ({
  open,
  handleClose,
  children,
  title,
  handleRegisterClick,
  handleOpenLogin,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: "dialog-contain",
        }}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "20px",
          },
        }}
      >
        <Stack
          direction="column"
          height={"100%"}
          width={"100%"}
          alignItems={"center"}
          spacing={2}
          p={"50px 64px 32px 64px"}
        >
          <img src={Logo.src} alt="logo" width={260} height={100} />
          <Typography
            fontSize={30}
            fontWeight={700}
            textTransform={"uppercase"}
            color={red[100]}
          >
            {title}
          </Typography>
          {children}
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={1}
            alignItems={"center"}
          >
            <Typography fontSize={14} fontWeight={600} color={black}>
              {title === "đăng nhập"
                ? "Không phải thành viên?"
                : "Bạn đã có tài khoản?"}
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={600}
              color={red[100]}
              sx={{ cursor: "pointer" }}
              onClick={
                title === "đăng nhập" ? handleRegisterClick : handleOpenLogin
              }
            >
              {title === "đăng nhập" ? "ĐĂNG KÝ NGAY" : "ĐĂNG NHẬP"}
            </Typography>
          </Stack>
        </Stack>
      </Dialog>
    </div>
  );
};

export { DialogBase };
