import React, {useContext, useState} from 'react';
import "./Themes.css"
import {Transition} from 'react-transition-group';
import {NavLink} from "react-router-dom";
import Theme from "./Theme";
import {AuthContext} from "../../context";

const Themes = () => {
    const [skip, setSkip] = useState(false)
    const {themeArray} = useContext(AuthContext)
    const setSkipButton=()=>{
        setSkip(true)
        themeArray.length=0
    }
    return (
        <div className="themes">
            <div className="themeHead "><h1>Choose a topic that interests you </h1>

                <NavLink to="/home" className="skipLink mt-2">
                    <i style={{textDecoration: 'underline'}} onClick={setSkipButton}>Skip</i>
                </NavLink>

            </div>
            <Theme themeArray={themeArray}/>
            {/*<div className="themeBlock1" id="tb1">*/}
            {/*    <div className="  theme" > <span><h2>Sport</h2></span></div>*/}
            {/*    <div className="   theme" id="t2"> <span><h2>Business</h2></span></div>*/}
            {/*    <div className="   theme" id="t3"> <span><h2>Fashion</h2></span></div>*/}
            {/*</div>*/}
            {/*<div className="themeBlock1">*/}
            {/*    <div className="   theme" id="t4"> <span><h2>Medicine</h2></span></div>*/}
            {/*    <div className="   theme" id="t5"> <span><h2>Cinema</h2></span></div>*/}
            {/*    <div className="   theme" id="t6"> <span><h2>Arts</h2></span></div>*/}
            {/*</div>*/}

            {/*<div className="themeBlock1" id="tb3">*/}
            {/*    <div className="   theme" id="t7"> <span><h2>Music</h2></span></div>*/}
            {/*    <div className="   theme" id="t8"> <span><h2>IT</h2></span></div>*/}
            {/*    <div className="   theme" id="t9"> <span><h2>Games</h2></span></div>*/}
            {/*</div>*/}
            <NavLink to="/home" className="continueLink  ">
                <i style={{textDecoration: 'underline'}}>Continue</i>
            </NavLink>

        </div>
    );
};

export default Themes;