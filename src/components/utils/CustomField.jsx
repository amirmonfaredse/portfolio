import { InputAdornment, TextField } from "@mui/material";

const CustomField = ({
  type = "text",
  label = "",
  name = "",
  icon,
  ...props
}) => {
  return (
    <TextField
      fullWidth
      type={type}
      label={label}
      name={name}
      variant="outlined"
      size="small"
      color="purple"
      InputProps={{
        endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
      }}
      {...props}
    />
  );
};
export default CustomField;
