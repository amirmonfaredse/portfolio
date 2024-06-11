import { cloneElement } from "react";
import { AppBar, Button, Toolbar, useScrollTrigger } from "@mui/material";

const Header = () => {
    function ElevationScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            disableHysteresis: false,
            threshold: 0,

        });

        return cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }


    return (
        <>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>
                        <Button variant="contained" color="primary">کلیک کن</Button>
                        <Button variant="contained" color="secondary">کلیک کن</Button>
                        <Button variant="contained" color="success">کلیک کن</Button>
                        <Button variant="contained" color="error">کلیک کن</Button>
                        <Button variant="contained" color="info">کلیک کن</Button>
                        <Button variant="contained" color="common">کلیک کن</Button>

                    </Toolbar>
                </AppBar>

            </ElevationScroll>

        </>
    )
}
export default Header