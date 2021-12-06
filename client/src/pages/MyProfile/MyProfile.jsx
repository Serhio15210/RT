import React, {useContext, useEffect, useState} from 'react';
import Home from "../home/Home";
import './MyProfile.css'
import {NavLink} from "react-bootstrap";
import { FaBeer } from 'react-icons/fa';
import {Link, useParams} from "react-router-dom";
import Footer from "../Footer/Footer";
import {AuthContext} from "../../context";
import icon from "./profile-picture-circle-hd-removebg-preview.png"
import {$authHost, $host} from "../../http";
import jwtDecode from "jwt-decode";
import data from "bootstrap/js/src/dom/data";
const MyProfile =  () => {


    const [isSettingsPushed, setSettingsPushed] = useState(false)
    const {themeArray, avatar, setAvatar} = useContext(AuthContext)
    const[user,setUser]=useState([])

    const userOne = async () => {
        const {data} = await $authHost.get(`auth/user_one`)
        return data
    }
    useEffect(()=>{
        userOne().then(data=>setUser(data)
         )
    },[])
    return (
        <div>
            <div className="header">
                <div className="settings"><Link to="/settings" >
                    <i className="fas fa-cog"/>
                </Link></div>
            </div>
            <div className="icon">
                {avatar ? <img src={`${avatar}`} alt='avatar'/> : <img src={icon} alt='avatar'/>
                }
            </div>

            <div className="description">
                <h1 className="name">{user.name}</h1>
                <p id="nick"><i className="fas fa-user-circle "/>{user.nickname}</p>
                <p id="join"><i className="far fa-email"/>{user.email}</p>
                <Link id="following" to="/favoriteThemes" >Following[{themeArray.length}]</Link>
            </div>

        </div>
    );
};

export default MyProfile;