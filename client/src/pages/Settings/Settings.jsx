import React, {useContext, useState} from 'react';
import './EditProfile.css'
import {Link, NavLink} from "react-router-dom";
import {AuthContext} from "../../context";
import icon from "../MyProfile/profile-picture-circle-hd-removebg-preview.png";
import EditPhoto from "./EditPhoto";

const Settings = () => {
    const {avatar,setAvatar}=useContext(AuthContext)
    const [modal,setModal]=useState(false)
    return (

        <div className="editContainer">
            <div className="editHead">
                <p> Edit profile </p>

                    <div className="iconChecked"  >
                        {avatar?<img src={`${avatar}`} alt='avatar' />:<img src={icon} alt='avatar'  />
                        }
                    <span>
                        Edit photo
                        <i onClick={e=>setModal(true)} className="fas fa-camera" style={{fontSize:'30px',cursor:"pointer"}}/>
                        <br/>
                        <br/>
                        Delete photo
                        <i className="fas fa-trash-alt" onClick={e=>setAvatar(icon)} style={{fontSize:'30px',cursor:"pointer"}}/>
                    </span>

                    </div>

            </div>
            <ul className="editContent">
                <li style={{listStyleType: "none"}}>
                    <div className="editItems">
                        <input type="name" id="inputName" placeholder="Name"/>
                    </div>
                </li>
                <li style={{listStyleType: "none"}}>
                    <div className="editItems">
                        <input type="name" id="inputName" placeholder="SurName"/>
                    </div>
                </li>
                <li style={{listStyleType: "none"}}>
                    <div className="editItems">
                        <input type="country" id="inputCountry" placeholder="Country"/>
                    </div>
                </li>
                <li style={{listStyleType: "none"}}>
                    <div className="editItems">
                        <input type="phone" id="inputPhone" placeholder="Phone"/>
                    </div>
                </li>
                <li style={{listStyleType: "none"}}>
                    <div className="editItems">
                        <input type="email" id="inputEmail" placeholder="E-mail"/>
                    </div>
                </li>
                <li style={{listStyleType: "none"}}>
                    <div className="editItems">
                        <input type="name" id="inputNick" placeholder="Nick"/>
                    </div>
                </li>
                <li style={{listStyleType: "none"}}>
                    <div className="editItems">
                        <input type="password" id="inputPassword" placeholder="Password"/>
                    </div>
                </li>
                <li style={{listStyleType: "none"}}>
                    <div className="editItems">
                        <input type="password" id="inputPassword" placeholder="Repeat password"/>
                    </div>
                    <div className="editItems" id="nav">
                        <NavLink to='/themes' className="changeThemes">Change ThemeList</NavLink>
                    </div>
                </li>
                <div className="editButtons">
                    <NavLink to='/profile' className="linkCancel">Cancel</NavLink>
                    <NavLink to='/home' className="linkSave">Save</NavLink>
                </div>
            </ul>
            <EditPhoto modal={modal} setModal={setModal}/>

        </div>
    );
};

export default Settings;