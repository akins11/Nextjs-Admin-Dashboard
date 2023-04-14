import React from 'react';
import Image from 'next/image';

import { AiFillAppstore } from 'react-icons/ai';
import { FiGlobe } from  'react-icons/fi';
import { BiMessageSquareDetail, BiMessageAltError } from 'react-icons/bi';
import { CgMoon } from 'react-icons/cg';

import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const TopBar = () => {

    const {dispatch} = useContext(DarkModeContext);

    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="brand">
                        <span className="logo"><b className="bold">dib</b> Footies</span>
                    </div>
                </div>
                <div className="right">
                    <div className="icon_container">
                        <FiGlobe className='icon' />
                    </div>
                    <div className="icon_container">
                        <BiMessageSquareDetail className='icon' />
                        <span className="icon_badge">3</span>
                    </div>
                    <div className="icon_container">
                        <BiMessageAltError className='icon' />
                        <span className="icon_badge">2</span>
                    </div>
                    <div className="icon_container">
                        <CgMoon className='icon' onClick={() => dispatch({type: 'TOGGLE'})} />
                    </div>
                    <div>
                        <Image 
                            src="/profile1.png" 
                            alt="profile-img" 
                            className='avatar' 
                            width={40} 
                            height={40}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;