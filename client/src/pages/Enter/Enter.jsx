import React, {createContext, useContext} from 'react';
import logo from './bb.png'
import {Button} from "react-bootstrap";
import {AuthContext} from "../../context";
import MyButtons from "../../UI/buttons/MyButtons";
import {Transition, TransitionGroup} from "react-transition-group";
import './Enter.css'

const Enter = () => {

    return (
        <div className="enter">
            <div className="enterDiv"></div>
            <div className="enterDiv"></div>
            <div className="enterDiv"></div>
            <div className="enterDiv"></div>
            <div className="enterDiv">
                <div className="logo"><img src={logo}/></div>
                <p className="logoText">Welcome to ReperioTweet</p>
            </div>


        </div>
    );
};

export default Enter;