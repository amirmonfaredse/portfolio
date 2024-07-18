import { Chip, Divider, Typography } from "@mui/material";

const CustomDivider = ({
  icon = null,
  title = "unTitled",
  bgColor = "purple.main",
  color = "green.main",
  textAlign = "center",
}) => {
  return (
    <Divider textAlign={textAlign}>
      <Chip
        sx={{ p: 3, color: color, bgcolor: bgColor }}
        icon={icon}
        label={
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            {title}
          </Typography>
        }
      />
    </Divider>
  );
};
export default CustomDivider;
