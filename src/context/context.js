import { createContext } from "react";

export default createContext({
    pageNumber: 0,
    onPageNumber: () => { },
    drawerOpen: false,
    setDrawerOpen: () => { }
})