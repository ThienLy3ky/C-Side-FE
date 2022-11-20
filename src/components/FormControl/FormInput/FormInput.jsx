import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
export default function FormInput({ name, ...props }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          error={!!errors[name]}
          helperText={!!errors[name] ? errors[name].message : ""}
        />
      )}
    />
  );
}
