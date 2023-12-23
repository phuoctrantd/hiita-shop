import {
  Box,
  Button,
  ClickAwayListener,
  Dialog,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { DialogBase } from "./DialogBase";
import { TextField } from "../TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { black, gray, red, white } from "@/styles";
import toast from "react-hot-toast";
import { useAtom } from "jotai";
import { login } from "@/lib/routes/auth";
import { useAuth } from "@/lib/provider/AuthProvider";

interface LoginProps {
  open: boolean;
  close: () => void;
  handleOpenRegister: () => void;
}
const Login: React.FC<LoginProps> = ({ open, close, handleOpenRegister }) => {
  const validation = z.object({
    user_name: z
      .string()
      .min(1, "Tên đăng nhập là bắt buộc")
      .max(30, "Tên đăng nhập không được quá 30 ký tự"),
    password: z
      .string()
      .min(1, "Mật khẩu là bắt buộc")
      .max(30, "Mật khẩu không được quá 30 ký tự"),
  });
  type LoginForm = z.infer<typeof validation>;
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      user_name: "",
      password: "",
    },
    resolver: zodResolver(validation),
  });
  const { setAccessToken, setUser, user } = useAuth();
  const onSubmit: SubmitHandler<LoginForm> = async (value) => {
    try {
      const res = await login(value);
      setAccessToken(res.data.token);
      if (res.data.user) {
        setUser(res.data.user);
      }
      toast.success("Đăng nhập thành công");
      handleClose();
    } catch (e) {
      toast.error("Tài khoản hoặc mật khẩu không đúng");
      return;
    }
  };
  const handleClose = () => {
    close();
    reset();
  };
  React.useEffect(() => {
    reset();
  }, [open]);
  return (
    <DialogBase
      open={open}
      handleClose={handleClose}
      title="đăng nhập"
      handleRegisterClick={handleOpenRegister}
    >
      <form
        style={{ width: "100%", height: "100%" }}
        autoComplete="new-login"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack
          direction={"column"}
          spacing={2}
          sx={{ marginBottom: "20px !important" }}
        >
          <TextField
            name="user_name"
            placeholder="Tên đăng nhập"
            control={control}
          />
          <TextField
            name="password"
            placeholder="Mật khẩu"
            control={control}
            type="password"
          />
        </Stack>

        <Button
          type="submit"
          fullWidth
          sx={{
            borderRadius: "10px",
            color: white[100],
            backgroundColor: red[100],
            fontSize: 16,
            fontWeight: 600,
            "&:hover": {
              color: white[100],
              backgroundColor: red[100],
              boxShadow: `0 0 10px ${red[100]}`,
            },
          }}
        >
          Đăng nhập
        </Button>
      </form>
    </DialogBase>
  );
};

export default Login;
