import { Controller } from "react-hook-form";
import { TextField } from '@mui/material';

export const FormTextInput = ({ name, control, rules, type, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          margin="normal"
          type={type}
          label={label}
          error={error ? true : false}
          helperText={error ? error.message : ""}
          aria-invalid={error ? "true" : "false"}
        />
      )}
    />
  );
};
