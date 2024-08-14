import { Box } from "@mui/material";
import { Suspense, useContext } from "react";
import Loading from "../utils/Loading";
import context from "../../context/context";

const Page = (props) => {
  const { children, pageNumber, index, ...others } = props;
  const { themeMode } = useContext(context);
  return (
    <div
      role="tabpanel"
      hidden={pageNumber !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {pageNumber === index && (
        <Suspense fallback={<Loading />}>
          <Box
            calssName="Page"
            sx={{
              height: "100vh",
              overflowY: "auto",
              bgcolor: themeMode ? "foreground.main" : "currentLine.main",
              position: "relative",
            }}
          >
            {children}
          </Box>
        </Suspense>
      )}
    </div>
  );
};

export default Page;
