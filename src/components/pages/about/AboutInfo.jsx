import { Typography } from '@mui/material'

import { ArrowLeftRounded } from '@mui/icons-material';
const AboutInfo = ({ children }) => {
    return (

        <>
            < Typography
                color='success.main'
                textAlign="left"
                sx={{ mt: 2 }}
                variant='body1'
            >
                {children}
                <ArrowLeftRounded sx={{ verticalAlign: "bottom", color: 'primary.main' }} />
            </Typography>
        </>
    )
}
export default AboutInfo;