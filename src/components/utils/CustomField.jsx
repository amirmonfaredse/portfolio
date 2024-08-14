import { InputAdornment, TextField } from "@mui/material";
import { useContext } from "react";
import context from "../../context/context";

const CustomField = ({
  type = "text",
  label = "",
  name = "",
  icon,
  ...props
}) => {
  const { themeMode } = useContext(context);
  let colored = themeMode ? "background" : "pink";
  return (
    <TextField
      fullWidth
      type={type}
      label={label}
      name={name}
      variant="outlined"
      size="small"
      color={colored}
      InputProps={{
        endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
      }}
      {...props}
    />
  );
};
export default CustomField;
