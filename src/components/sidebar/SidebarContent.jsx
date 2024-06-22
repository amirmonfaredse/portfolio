
import { Divider, Box, Typography, Avatar } from "@mui/material";
import {
    FavoriteRounded,
    CopyrightRounded
} from '@mui/icons-material'
const SidebarContent = ({ children }) => {
    return (
        <Box sx={{
            justifyContent: 'center',
            textAlign: 'center',
            mt: 2
        }}>
            <Avatar src={require("../../assets/images/AmirrezaMonfared.jpg")}
                sx={{ height: 170, width: 170, margin: '0 auto', display: { xs: 'none', md: 'block' } }} >
                AM
            </Avatar>
            <Typography variant="h6" sx={{ color: "secondary.light" }}>
                امیررضا منفرد
            </Typography>
            <Typography variant="caption" sx={{ color: 'secondary.main' }}>
                برنامه نویس وب
            </Typography>

            <Divider variant="middle" color={'secondary.dark'} sx={{ my: 2, color: "" }} />
            {children}
            <Divider variant="middle" color={'secondary.dark'} sx={{ mt: 2, color: "" }} />


            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                my: 2
            }}>
                <Typography variant="subtitle2" color='info' sx={{ my: 2 }} >
                    طراحی شده با{'   '}
                    <FavoriteRounded
                        sx={{ fontSize: 15, verticalAlign: 'top', color: 'secondary.main' }} />
                </Typography>
                <Typography variant="subtitle2" color='info' >
                    خرداد ماه 1403{'   '}
                    <CopyrightRounded
                        sx={{ fontSize: 15, verticalAlign: 'top', }} />
                </Typography>
            </Box>
        </Box>
    )
}
export default SidebarContent;
