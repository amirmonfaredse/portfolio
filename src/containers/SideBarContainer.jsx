
import Grid from "@mui/material/Unstable_Grid2"

const SideBarContainer = ({ children }) => {
    return (
        <Grid
            xs={0} sm={0} md={3} lg={2} xl={2}
            sx={{ backgroundColor: 'primary.main' }}
        >
            {children}
        </Grid>
    )
}
export default SideBarContainer;