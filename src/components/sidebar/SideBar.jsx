import { useState } from "react";

import { Drawer, Fab, Box } from "@mui/material";
import { MenuRounded } from "@mui/icons-material"
import { SidebarContent } from ".";
import { TabsSidebar } from '.'

const SideBar = ({ value, handleChange }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <>
            <Box
                sx={{
                    display: {
                        sx: 'block',
                        md: "none"
                    }
                }}
            >
                <Fab
                    aria-label='sidebar'
                    size="small"
                    sx={{ m: 2, bgcolor: 'success.main', color: 'secondary.main' }}
                    onClick={handleDrawerToggle}
                >
                    <MenuRounded />
                </Fab>

            </Box>
            <SidebarContent value={value} handleChange={handleChange} >
                <TabsSidebar value={value} handleChange={handleChange} handleDrawerToggle={handleDrawerToggle} />
            </SidebarContent>
            <Drawer
                open={drawerOpen}
                variant="temporary"
                onClose={() => setDrawerOpen(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 320,
                        bgcolor: "primary.main"
                    }, display: {
                        xs: 'block',
                        md: 'none'
                    }
                }}
            >
                <SidebarContent value={value} handleChange={handleChange} handleDrawerToggle={handleDrawerToggle} >
                    <TabsSidebar value={value} handleChange={handleChange} handleDrawerToggle={handleDrawerToggle} />
                </SidebarContent>
            </Drawer>
        </>
    )
}
export default SideBar;