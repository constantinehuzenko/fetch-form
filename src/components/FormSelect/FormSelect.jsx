import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, InputLabel, Select } from "@mui/material";
import { conditionalSpinner } from "../../common/utils";
import "./formSelect.css";

export const FormSelect = ({ name, label, control, loading, children }) => {
  const spinner = conditionalSpinner(
    loading,
    "IconComponent",
    "spinner-wrapper",
    "24px"
  );

  return (
    <Controller
      name={name}
      rules={{
        required: true,
      }}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth margin="normal">
          <InputLabel>{label}</InputLabel>
          <Select
            {...field}
            {...spinner}
            placeholder={label}
            label={label}
            defaultValue=""
            error={error ? true : false}
            disabled={loading}
          >
            {children}
          </Select>

          {error && (
            <FormHelperText error={true}>*${label} is Required</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
