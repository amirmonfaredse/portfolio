import {useRef, useEffect} from "react";

import {Box, Typography} from "@mui/material";

import Typed from "typed.js";

import MainBackground from "../../../assets/images/backgrounds/MainBackground.jpg";

const Home = () => {
    const nameEl = useRef(null);
    const infoEl = useRef(null);
    const strings = [
        "من یک برنامه نویس وب هستم",
        "من یک گوینده و دوبلور هستم",
        "من یک آشپز و باریستا هستم",
    ];

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["[ امیررضا منفرد ]"],
            typeSpeed: 50,
            backSpeed: 60,
            backDelay: 10,
            showCursor: false,
        });
        const typedInfo = new Typed(infoEl.current, {
            strings,
            startDelay: 1600,
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 190,
            loop: true,
            showCursor: false,
        });

        return () => {
            typedName.destroy();
            typedInfo.destroy();
        };
    }, []);

    return (
        <Box
            sx={{
                background: `url(${MainBackground})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                filter: "contrast(100%)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography
                variant="h3"
                ref={nameEl}
                sx={{color: "success.main", p: 2, borderRadius: 2}}
            >
                [ امیررضا منفرد ]
            </Typography>
            <Typography
                variant="h4"
                ref={infoEl}
                sx={{color: "error.main", p: 2, borderRadius: 2}}
            >
                من یک برنامه نویس وب هستم
            </Typography>
        </Box>
    );
};
export default Home;
