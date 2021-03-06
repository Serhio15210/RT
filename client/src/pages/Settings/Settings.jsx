import React, {useContext, useEffect, useState} from 'react';
import './EditProfile.css'
import {Link, NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../../context";
import icon from "../MyProfile/profile-picture-circle-hd-removebg-preview.png";

import {$authHost, $host} from "../../http";
import {useInput} from "../../hooks/useInput";

import {Button} from "react-bootstrap";


const Settings = () => {

    const {avatar, setAvatar, isAuth, setIsAuth,user,themeArray,setThemeArray} = useContext(AuthContext)
    const [modal, setModal] = useState(false)
    const name = useInput('', {minLength: 3})
    const surname = useInput('', {minLength: 3})
    const email = useInput('', {isEmpty: true, minLength: 8, isEmail: true})
    const phone = useInput('', {isPhoneValid: true})
    const country = useInput('', {isEmpty: true, minLength: 3})
    const nickname = useInput('', {isEmpty: true, minLength: 3})
    const password = useInput('', {isEmpty: true, isValidPassword: true})
    const repeatedPassword = useInput('', {isEmpty: true, isValidPassword: true})
    const [isEditModal, setEditModal] = useState(false)
    const history = useHistory()
    let updateArray=[]

    const edit = async () => {
        try {
            let data;
            data = await $authHost.put('auth/update',{name:name.value,surname:surname.value,email:email.value,phone:phone.value,country:country.value,nickname:nickname.value,password:password.value,themes:themeArray});
            console.log(data)
            alert(data ? 'Edit success' : 'Edit canceled')

        } catch (e) {
            alert(e.response.data.message)
        }
    }
    const deleteAccount = async () => {
        try {
            let data;
            data = await $authHost.delete('auth/delete');
            console.log(data)
            if (data) {

                localStorage.removeItem("token")
                localStorage.removeItem("themeArray")
                localStorage.removeItem("auth")

            }else {
                alert('Deleting canceled')
            }
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (

        <div className="editContainer">
            <div className="editHead">
                <p> Edit profile </p>

                <div className="iconChecked">
                    {avatar ? <img src={`${avatar}`} alt='avatar'/> : <img src={icon} alt='avatar'/>
                    }
                    <span>
                        Edit photo
                        <i onClick={e => setModal(true)} className="fas fa-camera"
                           style={{fontSize: '30px', cursor: "pointer"}}/>
                        <br/>
                        <br/>
                        Delete photo
                        <i className="fas fa-trash-alt" onClick={e => setAvatar(icon)}
                           style={{fontSize: '30px', cursor: "pointer"}}/>
                    </span>

                </div>
                <Button type={"reset"}
                        style={{position: "relative", top: "80px", left: "120px", width: "200px", background: "red"}}
                         onClick={deleteAccount}><h3>Delete account</h3></Button>


            </div>
            <ul className="editContent">
                <li style={{listStyleType: "none"}}>
                    {(name.isDirty && name.minLengthError) &&
                    <p style={{color: "red"}}>Name should be as min 3 letters</p>}
                    <div className="editItems">
                        <input type="name" id="inputName" value={name.value} onChange={e => name.onChange(e)}
                               onBlur={e => name.onBlur(e)} placeholder={"Name:" + user.name}/>
                    </div>
                </li>
                <li style={{listStyleType: "none"}}>
                    {(surname.isDirty && surname.minLengthError && surname.value) &&
                    <p style={{color: "red"}}>Surname should be as min 3 letters</p>}
                    <div className="editItems">
                        <input type="name" id="inputName" value={surname.value} onChange={e => surname.onChange(e)}
                               onBlur={e => surname.onBlur(e)}
                               placeholder={"Surname"}/>
                    </div>
                </li>
                <li style={{listStyleType: "none"}}>
                    {(country.isDirty && country.minLengthError && country.value) &&
                    <p style={{color: "red"}}>Country should be as min 3 letters</p>}
                    <div className="editItems">
                        <input type="country" id="inputCountry" value={country.value}
                               onChange={e => country.onChange(e)}
                               onBlur={e => country.onBlur(e)}
                               placeholder={"Country"}/>
                    </div>
                </li>
                <li style={{listStyleType: "none"}}>
                    {(phone.isDirty && phone.validPhoneError && phone.value) &&
                    <p style={{color: "red"}}>Wrong phone type</p>}
                    <div className="editItems">
                        <input type="phone" id="inputPhone" value={phone.value} onChange={e => phone.onChange(e)}
                               onBlur={e => phone.onBlur(e)}
                               placeholder={user.phone ? "Phone:" + user.phone : "Phone"}/>
                    </div>
                </li>

                <li style={{listStyleType: "none"}}>
                    {/*{(email.isDirty && email.emailError && !email.isEmpty) &&*/}
                    {/*<p style={{color: "red"}}>Wrong type of email</p>}*/}
                    <div className="editItems">
                        <input type="email" id="inputEmail" value={email.value} onChange={e => email.onChange(e)}
                               onBlur={e => email.onBlur(e)} placeholder={"Email:" + user.email}/>
                    </div>
                </li>
                <li style={{listStyleType: "none"}}>
                    {(nickname.isDirty && nickname.minLengthError && !nickname.isEmpty) &&
                    <p style={{color: "red"}}>NickName should be as min 3 letters</p>}
                    <div className="editItems">
                        <input type="name" id="inputNick" value={nickname.value} onChange={e => nickname.onChange(e)}
                               onBlur={e => nickname.onBlur(e)} placeholder={"Nickname:" + user.nickname}/>
                    </div>
                </li>
                <li style={{listStyleType: "none"}}>
                    {/*{(password.isDirty && password.validPasswordError && !password.isEmpty) &&*/}
                    {/*<p style={{color: "red"}}>Password should be between 8 and 15 characters which contain at least one*/}
                    {/*    lowercase letter, one uppercase letter, one numeric digit, and one special character</p>}*/}
                    {/*<div className="editItems">*/}
                    {/*    <input type="password" id="inputPassword" value={password.value}*/}
                    {/*           onChange={e => password.onChange(e)}*/}
                    {/*           onBlur={e => password.onBlur(e)} placeholder="Password"/>*/}
                    {/*</div>*/}
                </li>
                <li style={{listStyleType: "none"}}>
                    {/*{(password.isDirty && repeatedPassword.value !== password.value) &&*/}
                    {/*<p style={{color: "red"}}>Password mismatch</p>}*/}
                    {/*<div className="editItems">*/}
                    {/*    <input type="password" id="inputPassword" value={repeatedPassword.value}*/}
                    {/*           onChange={e => repeatedPassword.onChange(e)}*/}
                    {/*           onBlur={e => repeatedPassword.onBlur(e)} placeholder="Repeat password"/>*/}
                    {/*</div>*/}
                    <div className="editItems" id="nav">
                        <NavLink to='/themes' className="changeThemes">Change ThemeList</NavLink>
                        <Button  className="changeThemes" onClick={()=>{
                            setThemeArray([])
                            alert("Themes was cleared.Press `Save` ")
                        }

                        }>Reset ThemeList</Button>
                    </div>
                </li>
                <div className="editButtons">
                    <NavLink to='/profile' className="linkCancel">Cancel</NavLink>
                    <NavLink to='/home' onClick={edit} className="linkSave">Save</NavLink>
                </div>
            </ul>


        </div>
    )

};

export default Settings;