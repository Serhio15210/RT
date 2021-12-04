import React, {useContext, useEffect, useState} from 'react';
import MyButtons from "../../UI/buttons/MyButtons";
import './Registration.css'
import Themes from "../Themes/Themes";
import {Link, useLocation} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../context";
import Footer from "../Footer/Footer";
import {Form} from "react-bootstrap";
import {useInput} from "../../hooks/useInput";
import {useValidation} from "../../hooks/useValidation";
import {red} from "@material-ui/core/colors";
import {login, registration} from "../../http/UserAPI";
import {observer} from "mobx-react-lite";


const Registration =() => {
    const {user}=useContext(AuthContext)
    const firstName = useInput('', {isEmpty: true, minLength: 3})
    const lastName = useInput('', {minLength: 3})
    const email = useInput('', {isEmpty: true, minLength: 8, isEmail: true})
    const phone = useInput('', {isPhoneValid: true})
    const country = useInput('')
    const nick = useInput('', {isEmpty: true, minLength: 3})
    const password = useInput('', {isEmpty: true})
    const repeatedPassword = useInput('', {isEmpty: true})
    const location = useLocation()
    const history=useHistory()

    const click = async()=>{
        try {
            let data;
            data = await registration(firstName.value,email.value,nick.value, password.value);
            console.log(data)
            user.setUser(user)
            user.setIsAuth(true)

        } catch (e) {
            alert(e.response.data.message)


        }

    }
    const {setSignUp, setIsAuth} = useContext(AuthContext)
    const login = async event => {
        try {
            let data;
            data = await registration(email.value, password.value, nick.value);
            console.log(data)
            user.setUser(user)
            user.setIsAuth(true)
            event.preventDefault()
            setIsAuth(true)
            setSignUp(true)
            localStorage.setItem('auth', 'true')
            history.push('/themes')
        } catch (e) {
            alert(e.response.data.message)


        }

    }

    return (
        <div className="fullContainer">
            <div className="container-fluid registration">

                <Form className="form-horizontal reg" onSubmit={login}>
                    <span className="heading">Registration</span>
                    {(firstName.isDirty && firstName.minLengthError && !firstName.isEmpty) &&
                    <p style={{color: "red"}}>Name should be as min 3 letters</p>}

                    <div className="form-group  ">

                        <input type="name" className="form-control" id="inputName"
                               value={firstName.value} onChange={e => firstName.onChange(e)} onBlur={e => firstName.onBlur(e)}
                               placeholder={firstName.isDirty && firstName.isEmpty ? "Name could not be empty *" : `Name *`}/>
                        <i className="fa fa-user" style={firstName.isDirty && firstName.isEmpty ? {color: "red"} : {}}/>

                    </div>
                    {(lastName.isDirty && lastName.minLengthError && lastName.value) &&
                    <p style={{color: "red"}}>Surname should be as min 3 letters</p>}
                    <div className="form-group"><input type="name" className="form-control" id="inputSurName"
                                                       value={lastName.value} onChange={e => lastName.onChange(e)}
                                                       onBlur={e => lastName.onBlur(e)}
                                                       placeholder="Surname"/>
                        <i className="fa fa-user"/></div>

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
                    {(nick.isDirty && nick.minLengthError && !nick.isEmpty) &&
                    <p style={{color: "red"}}>NickName should be as min 3 letters</p>}
                    <div className="form-group"><input type="name" className="form-control" id="inputNick"
                                                       value={nick.value} onChange={e => nick.onChange(e)}
                                                       onBlur={e => nick.onBlur(e)}
                                                       placeholder={nick.isDirty && nick.isEmpty ? "Nickname could not be empty *" : "Create nickname *"}/>
                        <i className="fa fa-user" style={nick.isDirty && nick.isEmpty ? {color: "red"} : {}}/>
                    </div>

                    {(password.isDirty && password.validPasswordError && !password.isEmpty) &&
                    <p style={{color: "red"}}>Password should be between 8 and 15 characters which contain at least one
                        lowercase letter, one uppercase letter, one numeric digit, and one special character</p>}
                    <div className="form-group help">
                        <input type="password" className="form-control" id="inputPassword"
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
                                                            id="inputPassword"
                                                            placeholder={repeatedPassword.isDirty && repeatedPassword.isEmpty ? "Repeated Password could not be empty" : "Repeat Password"}/>
                        <i className="fa fa-lock"
                           style={repeatedPassword.isDirty && repeatedPassword.isEmpty ? {color: "red"} : {}}/>
                    </div>


                    <button type="submit"
                        // disabled={!email.inputValid || !name.inputValid || !nick.inputValid || !password.inputValid || !repeatedPassword.inputValid }
                            className="btn btn-default auth-button">
                         Authorisation
                    </button>

                </Form>
            </div>


        </div>
    );
};


export default Registration;