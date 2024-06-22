import { Tab, Tabs } from "@mui/material";
import {
    HomeRounded,
    PersonRounded,
    TextSnippetRounded,
    TerminalRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
} from '@mui/icons-material';



const TabsSidebar = ({ value, handleChange, handleDrawerToggle }) => {
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        }
    }
    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
        >
            <Tab
                label="خانه"
                icon={<HomeRounded sx={{ mr: 2, color: 'success.main' }} />}
                iconPosition="start"
                onClick={handleDrawerToggle}
                {...tabProps(0)}
            />
            <Tab
                label="درباره من"
                icon={<PersonRounded sx={{ mr: 2, color: 'success.main' }} />}
                iconPosition="start"
                onClick={handleDrawerToggle}
                {...tabProps(1)}

            />
            <Tab
                label="رزومه من"
                icon={<TextSnippetRounded sx={{ mr: 2, color: 'success.main' }} />}
                iconPosition="start"
                onClick={handleDrawerToggle}
                {...tabProps(2)}
            />
            <Tab
                label="نمونه کارها"
                icon={<TerminalRounded sx={{ mr: 2, color: 'success.main' }} />}
                iconPosition="start"
                onClick={handleDrawerToggle}

                {...tabProps(3)}
            />
            <Tab
                label="نظرات"
                icon={<MessageRounded sx={{ mr: 2, color: 'success.main' }} />}
                iconPosition="start"
                onClick={handleDrawerToggle}

                {...tabProps(4)}
            />
            <Tab
                label="ارتباط با من"
                icon={<ConnectWithoutContactRounded sx={{ mr: 2, color: 'success.main' }} />}
                iconPosition="start"
                onClick={handleDrawerToggle}
                {...tabProps(5)}
            />
        </Tabs>
    )
}
export default TabsSidebar;