
import {
    Route,
    Routes,
  } from "react-router-dom";

import Home from  "../pages/Home"
import RestaurantList from "../pages/RestaurantList";
import Users from "../pages/Users"


const Layout = ({children}) => {
    return (<>
        {children}
        </>
    )
}

export default Layout;