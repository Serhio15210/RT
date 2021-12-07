import React, {useContext, useEffect, useState} from 'react';
import './Registration.css'
import {Link, NavLink, useLocation} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../context";

import {Form} from "react-bootstrap";
import {useInput} from "../../hooks/useInput";
import {useValidation} from "../../hooks/useValidation";
import {red} from "@material-ui/core/colors";
import {login, registration} from "../../http/UserAPI";
import Themes from "../Themes/Themes";



const Registration = () => {
    const {user} = useContext(AuthContext)
    const name = useInput('', {isEmpty: true, minLength: 3})
    const surname = useInput('', {minLength: 3})
    const email = useInput('', {isEmpty: true, minLength: 8, isEmail: true})
    const phone = useInput('', {isPhoneValid: true})
    const country = useInput('', {isEmpty:true,minLength: 3})
    const nickname = useInput('', {isEmpty: true, minLength: 3})
    const password = useInput('', {isEmpty: true, isValidPassword: true})
    const repeatedPassword = useInput('', {isEmpty: true, isValidPassword: true})
    const [themes,setThemes]=useState([])
    const location = useLocation()
    const history = useHistory()

    const click =  () => {

            let data;
            data =  registration(name.value, email.value, nickname.value, password.value, surname.value, phone.value, country.value,themes);
            console.log(data)
            setIsAuth(true)
            localStorage.setItem('auth', 'true')
    }
    const {isSignUp, setIsAuth,setSignUp} = useContext(AuthContext)


    return (

        <div className="fullContainer">
            <div className="container-fluid registration">

                <Form className="form-horizontal reg">
                    <span className="heading">Registration</span>
                    {(name.isDirty && name.minLengthError && !name.isEmpty) &&
                    <p style={{color: "red"}}>Name should be as min 3 letters</p>}

                    <div className="form-group  ">

                        <input type="name" className="form-control" id="inputName"
                               value={name.value} onChange={e =>name.onChange(e)}
                               onBlur={e => name.onBlur(e)}
                               placeholder={name.isDirty && name.isEmpty ? "Name could not be empty *" : `Name *`}/>
                        <i className="fa fa-user" style={name.isDirty && name.isEmpty ? {color: "red"} : {}}/>

                    </div>
                    {(surname.isDirty && surname.minLengthError && surname.value) &&
                    <p style={{color: "red"}}>Surname should be as min 3 letters</p>}
                    <div className="form-group"><input type="name" className="form-control" id="inputSurName"
                                                       value={surname.value} onChange={e => surname.onChange(e)}
                                                       onBlur={e => surname.onBlur(e)}
                                                       placeholder="Surname"/>
                        <i className="fa fa-user"/></div>
                    {(country.isDirty && country.minLengthError && country.value) &&
                    <p style={{color: "red"}}>Country should be as min 3 letters</p>}
                    <div className="form-group"><input type="country" className="form-control" id="inputCountry"
                                                       value={country.value} onChange={e => country.onChange(e)}
                                                       onBlur={e => country.onBlur(e)}
                                                       placeholder="Country"/>
                        <i className="fas fa-globe"/></div>
                    {(phone.isDirty && phone.validPhoneError && phone.value) &&
                    <p style={{color: "red"}}>Wrong phone type</p>}
                    <div className="form-group"><input type="phone" className="form-control" id="inputPhone"
                                                       value={phone.value} onChange={e => phone.onChange(e)}
                                                       onBlur={e => phone.onBlur(e)} placeholder="Phone"/>
                        <i className="fas fa-phone"/></div>
                    {(email.isDirty && email.emailError && !email.isEmpty) &&
                    <p style={{color: "red"}}>Wrong type of email</p>}
                    <div className="form-group">
                        <input type="email" className="form-control" id="inputEmail"
                               value={email.value} onChange={e => email.onChange(e)}
                               onBlur={e => email.onBlur(e)}
                               placeholder={(email.isDirty && email.isEmpty) ? "Email could not be empty *" : "E-mail *"}/>
                        <i className="fas fa-envelope-square"
                           style={(email.isDirty && email.isEmpty) || (email.isDirty && email.emailError) ? {color: "red"} : {}}/>
                    </div>
                    {(nickname.isDirty && nickname.minLengthError && !nickname.isEmpty) &&
                    <p style={{color: "red"}}>NickName should be as min 3 letters</p>}
                    <div className="form-group"><input type="name" className="form-control" id="inputNick"
                                                       value={nickname.value} onChange={e => nickname.onChange(e)}
                                                       onBlur={e => nickname.onBlur(e)}
                                                       placeholder={nickname.isDirty && nickname.isEmpty ? "Nickname could not be empty *" : "Create nickname *"}/>
                        <i className="fa fa-user" style={nickname.isDirty && nickname.isEmpty ? {color: "red"} : {}}/>
                    </div>

                    {(password.isDirty && password.validPasswordError && !password.isEmpty) &&
                    <p style={{color: "red"}}>Password should be between 8 and 15 characters which contain at least one
                        lowercase letter, one uppercase letter, one numeric digit, and one special character</p>}
                    <div className="form-group help">
                        <input type="password" className="form-control" id="Password"
                               value={password.value} onChange={e => password.onChange(e)}
                               onBlur={e => password.onBlur(e)}
                               placeholder={password.isDirty && password.isEmpty ? "Password could not be empty *" : "Password *"}/>
                        <i className="fa fa-lock"
                           style={password.isDirty && password.isEmpty ? {color: "red"} : {}}/>

                    </div>
                    {(password.isDirty && repeatedPassword.value !== password.value) &&
                    <p style={{color: "red"}}>Password mismatch</p>}
                    <div className="form-group help"><input type="password" className="form-control"
                                                            value={repeatedPassword.value}
                                                            onChange={e => repeatedPassword.onChange(e)}
                                                            onBlur={e => repeatedPassword.onBlur(e)}
                                                            id="inputRepeatPassword"
                                                            placeholder={repeatedPassword.isDirty && repeatedPassword.isEmpty ? "Repeated Password could not be empty" : "Repeat Password"}/>
                        <i className="fa fa-lock"
                           style={repeatedPassword.isDirty && repeatedPassword.isEmpty ? {color: "red"} : {}}/>
                    </div>
                    {/*<div className="form-group help">*/}
                    {/*    <input type="text" className="form-control" id="inputPassword"*/}
                    {/*           value={themes.value} onChange={e => themes.push(e.target.value)}*/}
                    {/*           onBlur={e => themes.onBlur(e)}*/}
                    {/*           placeholder=""/>*/}

                    {/*</div>*/}

                    <button
                        disabled={!email.inputValid|| !name.inputValid  || !nickname.inputValid  || !password.inputValid }
                            className="btn btn-default auth-button" onClick={click}>
                        Authorisation
                    </button>

                </Form>
            </div>


        </div>
    );
};


export default Registration;