import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const Layout = ({ children }) => {

  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "layout dark" : "layout"}>
      <SideBar />
      <div className="main">
        <TopBar />
        {children}
      </div>
    </div>
  )
}

export default Layout;