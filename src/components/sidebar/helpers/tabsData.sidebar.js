import {
    HomeRounded,
    PersonRounded,
    TextSnippetRounded,
    TerminalRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
} from '@mui/icons-material';

export const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    }
}
export const tabsData = () => {
    const tabsDataArr = [
        { label: "خانه", icon: <HomeRounded sx={{ mr: 2, color: 'success.main' }} />, ...tabProps(0) },
        { label: "درباره من", icon: <PersonRounded sx={{ mr: 2, color: 'success.main' }} />, ...tabProps(1) },
        { label: "رزومه من", icon: <TextSnippetRounded sx={{ mr: 2, color: 'success.main' }} />, ...tabProps(2) },
        { label: "نمونه کار ها", icon: <TerminalRounded sx={{ mr: 2, color: 'success.main' }} />, ...tabProps(3) },
        { label: "نظرات", icon: <MessageRounded sx={{ mr: 2, color: 'success.main' }} />, ...tabProps(4) },
        { label: "ارتباط با من", icon: <ConnectWithoutContactRounded sx={{ mr: 2, color: 'success.main' }} />, ...tabProps(5) },
    ]
    return tabsDataArr
}