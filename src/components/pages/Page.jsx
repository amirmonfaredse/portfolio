import { Box } from "@mui/material";

const Page = (props) => {
  const { children, pageNumber, index, ...others } = props;
  return (
    <div
      role="tabpanel"
      hidden={pageNumber !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {pageNumber === index && (
        <Box
          calssName="Page"
          sx={{
            height: "100vh",
            overflowY: "auto",
            bgcolor: "currentLine.main",
            position : 'relative'
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

export default Page;
