import { useRouter } from "next/router";
import Link from 'next/link';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { dashboardItems, businessAnalysisItems, StaffItems } from '@/Data/UIData';

import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";


const SideBar = () => {

    const {dispatch} = useContext(DarkModeContext);
    
    const router = useRouter();

    return (
        <div className="sidebar">
            <div className="top_space"></div>
            <div className="menu">
                <List component="nav" >
                    <h3 className="title">Dashboard</h3>
                    {
                        dashboardItems.map((item) => (
                            <Link key={item.id} href={item.link} className="link">
                                <li 
                                    className={`nav_item ${router.pathname == item.link ? 'active' : ''}`}
                                >
                                    <span className="icon">{item.icon}</span>
                                    <ListItemText className="text">{item.title}</ListItemText>
                                </li>
                            </Link>
                        ))
                    }
                </List>
            </div>
            <div className="menu">
                <List component="nav" >
                    <h3 className="title">Business Analysis</h3>
                    {
                        businessAnalysisItems.map((item) => (
                            <Link key={item.id} href={item.link} className="link">
                                <li 
                                    className={`nav_item ${router.pathname == item.link ? 'active' : ''}`}
                                >
                                    <span className='icon'>{item.icon}</span>
                                    <ListItemText className="text">{item.title}</ListItemText>
                                </li>
                            </Link>
                        ))
                    }
                </List>
            </div>
            <div className="menu">
                <List component="nav" >
                    <h3 className="title">Staff</h3>
                    {
                        StaffItems.map((item) => (
                            <Link key={item.id} href={item.link} className="link">
                                <li 
                                    className={`nav_item ${router.pathname == item.link ? 'active' : ''}`}
                                >
                                    <span className='icon'>{item.icon}</span>
                                    <ListItemText className="text">{item.title}</ListItemText>
                                </li>
                            </Link>
                        ))
                    }
                </List>
            </div>
            <div className="menu">
                <List component="nav">
                    <h3 className="title">Theme</h3>
                    <div className="theme_container">
                        <div className="theme light" onClick={() => dispatch({type: 'LIGHT'})}></div>
                        <div className="theme dark"  onClick={() => dispatch({type: 'DARK'})}></div>
                    </div>
                </List>
            </div>
        </div>
    )
}

export default SideBar;