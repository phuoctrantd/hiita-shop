import { Box, Button, ClickAwayListener, Dialog, Stack } from "@mui/material";
import React from "react";
import { DialogBase } from "./DialogBase";
import { TextField } from "../TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { black, gray, red, white } from "@/styles";
interface RegisterProps {
  open: boolean;
  close: () => void;
  handleOpenLogin: () => void;
}
const Register: React.FC<RegisterProps> = ({
  open,
  close,
  handleOpenLogin,
}) => {
  const validation = z.object({
    email: z
      .string()
      .min(1, "Email là bắt buộc")
      .max(30, "Email không được quá 30 ký tự")
      .email({ message: "Email không hợp lệ" }),
    name: z
      .string()
      .min(1, "Tên là bắt buộc")
      .max(30, "Tên không được quá 30 ký tự"),
    password: z
      .string()
      .min(1, "Mật khẩu là bắt buộc")
      .max(30, "Mật khẩu không được quá 30 ký tự"),
  });
  type RegisterForm = z.infer<typeof validation>;
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterForm>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    resolver: zodResolver(validation),
  });
  const onSubmit: SubmitHandler<RegisterForm> = async (value) => {
    try {
      console.log(value);
      reset();
    } catch (e) {
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
      title="đăng ký"
      handleOpenLogin={handleOpenLogin}
    >
      <form
        style={{ width: "100%", height: "100%" }}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack
          direction={"column"}
          spacing={2}
          sx={{ marginBottom: "20px !important" }}
        >
          <TextField name="email" placeholder="Email" control={control} />
          <TextField name="name" placeholder="Họ tên" control={control} />
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
          Đăng ký
        </Button>
      </form>
    </DialogBase>
  );
};

export default Register;
