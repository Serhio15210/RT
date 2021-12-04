import React, {useContext, useState} from 'react';
import MyButtons from "../../UI/buttons/MyButtons";
import {AuthContext} from "../../context";
import './Authorisation.css'
import Footer from "../Footer/Footer";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import ModalHelp from "./ModalHelp";
import {Button, Form, Row} from "react-bootstrap";
import {useInput} from "../../hooks/useInput";
import {login, loginAccount} from "../../http/UserAPI";
import {Card, Container, FormControl} from "@material-ui/core";
import {observer} from "mobx-react-lite";

const Authorisation = () => {
    const {isAuth,setIsAuth}=useContext(AuthContext)
    const location=useLocation()
    const history=useHistory()
    const {user,store}=useContext(AuthContext)
    const password = useInput('',{isEmpty:true})
    const email = useInput('',{isEmpty:true})
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [modal,setModal]=useState(false)


    const click = async () => {

        try {
            let data;
            data = await loginAccount(email, password);
            setIsAuth(true)
            localStorage.setItem('auth','true')

        } catch (e) {
            alert(e.response.data.message)
        }

    }

    // const login=async event => {
    //     try {
    //
    //         user.setUser(user)
    //         user.setIsAuth(true)
    //         event.preventDefault();
    //         setIsAuth(true);
    //         localStorage.setItem('auth', 'true')
    //     } catch (e) {
    //         alert(e.response.data.message)
    //
    //     }
    // }

    return (
    <div className="authContainer align-items-center">
        <div className="row" id="authRow">

            <div className="col-md-offset-3 col-md-3">
                <form className="form-horizontal">
                    <span className="heading">Log In</span>
                    <div className="form-group">
                        <input type="email" className="form-control" id="inputEmail" onBlur={e=>email.onBlur(e)} onChange={e=>email.onChange(e)} placeholder= "E-mail"/>
                        <i className="fas fa-envelope-square"
                           style={email.isDirty && email.isEmpty ? {color: "red"} : {}}/>
                    </div>
                    <div className="form-group help">
                        <input type="password" className="form-control" id="inputPassword"  onBlur={e=>password.onBlur(e)} onChange={e=>password.onChange(e) } placeholder="Password"/>
                        <i className="fa fa-lock"
                           style={password.isDirty && password.isEmpty ? {color: "red"} : {}}/>

                    </div>
                    <div className="form-group" >
                        <div className="main-checkbox">
                            <input type="checkbox" value="none" id="checkbox1" name="check"/>
                            <label htmlFor="checkbox1"/>
                        </div>

                        <span className="text">Remember me</span>

                        <button type="submit" className="btn btn-default"  onClick={click} disabled={!password.inputValid||!email.inputValid}>ENTER</button>
                        <Button  className="forgot " onClick={e=>setModal(true)}>Forgot your password?</Button>
                        <ModalHelp modal={modal} setModalWindow={setModal}/>
                    </div>
                </form>
            </div>
        </div>

    </div>

    );
};

export default Authorisation;