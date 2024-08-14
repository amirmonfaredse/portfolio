import { Button, Card, Link } from "@mui/material";
import { Telegram, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { Suspense, useContext } from "react";
import Loading from "../../../utils/Loading";
import context from "../../../../context/context";

const Socials = () => {
  const { themeMode } = useContext(context);
  return (
    <Suspense fallback={<Loading />}>
      <Card
        sx={{
          width: {
            xs: 400,
            lg: 100,
          },
          height: {
            xs: 100,
            lg: 400,
          },
          bgcolor: themeMode ? "background.main" : "transparent",
          borderRadius: 30,
          p: 5,
          gap: 3,
          display: "flex",
          alignItems: "center",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          justifyContent: "center",
        }}
      >
        <Link href="https://t.me/amirrezamnf" rel="noreferrer" target="_blank">
          <Button variant="text" color="purple" sx={{ width: 100, height: 50 }}>
            <Telegram fontSize="large" />
          </Button>
        </Link>
        <Link
          href="https://www.instagram.com/a.reza.m.s/"
          rel="noreferrer"
          target="_blank"
        >
          <Button variant="text" color="red" sx={{ width: 100, height: 50 }}>
            <Instagram fontSize="large" />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
          <Button variant="text" color="orange" sx={{ width: 100, height: 50 }}>
            <LinkedIn fontSize="large" />
          </Button>
        </Link>
        <Link
          href="https://github.com/amirmonfaredse"
          rel="noreferrer"
          target="_blank"
        >
          <Button variant="text" color="green" sx={{ width: 100, height: 50 }}>
            <GitHub fontSize="large" />
          </Button>
        </Link>
      </Card>
    </Suspense>
  );
};
export default Socials;
