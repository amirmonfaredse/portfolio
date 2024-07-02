import {Drawer} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {useMediaQuery} from "@mui/material";
import theme from "../base/theme/theme";
import {useContext} from "react";
import context from "../../context/context";
import {Sidebar} from "./";

const SidebarViewManager = () => {
    const isDrawerNeeded = useMediaQuery(theme.breakpoints.down("md"));
    const {onDrawerToggler, drawerOpen} = useContext(context);
    return (
        <>
            {isDrawerNeeded ? (
                <Drawer
                    open={drawerOpen}
                    variant="temporary"
                    onClose={onDrawerToggler}
                    sx={{
                        "& .MuiDrawer-paper": {
                            width: 320,
                            bgcolor: "primary.main",
                        },
                        display: {
                            xs: "block",
                            md: "none",
                        },
                    }}
                >
                    <Sidebar/>
                </Drawer>
            ) : (
                <Grid
                    xs={0}
                    sm={0}
                    md={3}
                    lg={2}
                    xl={2}
                    sx={{
                        backgroundColor: "primary.main",
                        height: "100vh",
                        overflowY: "auto",
                        overflowX: "hidden",
                    }}
                >
                    <Sidebar/>
                </Grid>
            )}
        </>
    );
};
export default SidebarViewManager;
