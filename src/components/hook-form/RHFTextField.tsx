// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { TextField } from "@mui/material";

// ----------------------------------------------------------------------

export default function RHFTextField({ name, ...other }: any) {
  const { control, getValues } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
