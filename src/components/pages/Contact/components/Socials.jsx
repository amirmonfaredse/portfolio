import { Button, Card, Link } from "@mui/material";
import { Telegram, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { cardSx1 } from "../data/sxData";

const Socials = () => {
  return (
    <Card sx={cardSx1}>
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
  );
};
export default Socials;
