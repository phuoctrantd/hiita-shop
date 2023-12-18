import { red } from "@/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  TextFieldProps as MuiTextFieldProps,
  TextField as MuiTextField,
  styled,
  InputAdornment,
  IconButton,
  InputBaseProps,
  SxProps,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { FieldError, useController, UseControllerProps } from "react-hook-form";

export type AddControlProps = {
  helperText?: string;
  label?: string;
  fieldError?: FieldError | boolean;
  required?: boolean;
};
export type TextFieldProps<T> = InputBaseProps &
  MuiTextFieldProps &
  AddControlProps &
  //@ts-ignore
  UseControllerProps<T>;

const RawTextField = styled(MuiTextField)(({ theme }) => ({
  maxHeight: 40,
  borderRadius: "10px",
  border: `1px solid ${red[100]}`,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiOutlinedInput-input": {
    fontSize: "14px !important",
    padding: "10px",
  },
}));

function TextField<T>({
  name,
  size = "small",
  control,
  required,
  label,
  type,
  ...props
}: TextFieldProps<T>) {
  const {
    field: { onChange, ref, value, ...inputProps },
    fieldState: { error },
    //@ts-ignore
  } = useController({ name, control });

  return (
    <>
      <RawTextField
        error={!!error}
        fullWidth
        size={size}
        required={required}
        label={label}
        helperText={error?.message}
        FormHelperTextProps={{ sx: { mx: 0 } }}
        inputProps={{
          autoComplete: "off",
          ...inputProps,
        }}
        onChange={(e) => {
          onChange(e);
        }}
        value={type === "number" ? value : value || ""}
        inputRef={ref}
        {...props}
      />
      {error && <div style={{ height: "5px" }} />}
    </>
  );
}

export { TextField };
