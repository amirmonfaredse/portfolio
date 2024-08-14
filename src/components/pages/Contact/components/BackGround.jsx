import { Box } from "@mui/material";
import { Suspense, useContext } from "react";
import Loading from "../../../utils/Loading";
import context from "../../../../context/context";

const BackGround = ({ children }) => {
  const { themeMode } = useContext(context);
  return (
    <Suspense fallback={<Loading />}>
      <Box
        sx={{
          height: { xs: "auto", lg: "100%" },
          backgroundColor: themeMode ? "foreground.main" : "comment.main",
          backgroundImage: `background-color: #282a36;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23bd93f9' fill-opacity='0.36'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");`,
        }}
      >
        {children}
      </Box>
    </Suspense>
  );
};
export default BackGround;
