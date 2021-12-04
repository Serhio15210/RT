import React, {useContext, useState} from 'react';
import Home from "../home/Home";
import './MyProfile.css'
import {NavLink} from "react-bootstrap";
import { FaBeer } from 'react-icons/fa';
import {Link} from "react-router-dom";
import Footer from "../Footer/Footer";
import {AuthContext} from "../../context";
import icon from "./profile-picture-circle-hd-removebg-preview.png"
const MyProfile = () => {

    const {themeArray,avatar,setAvatar}=useContext(AuthContext)
    const [isSettingsPushed,setSettingsPushed]=useState(false)

    return (

        <div>
            <div className="header">
                <div className="settings  "><Link to="/settings">
                    <i className="fas fa-cog" />
                </Link></div>

            </div>
            <div className="icon">
                {avatar?<img src={`${avatar}`} alt='avatar'/>:<img src={icon} alt='avatar'/>
                }

            </div>
            <h1 className="name">Name</h1>
            <div className="description">
                <p id="nick"><i className="fas fa-user-circle"/>Nick</p>
                <p id="join"><i className="far fa-calendar-alt"/>Joined...</p>
                <Link id="following" to="/favoriteThemes">Following[{themeArray.length}]</Link>
            </div>

        </div>
    );
};

export default MyProfile;