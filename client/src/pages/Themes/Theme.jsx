import React, {useContext, useState} from 'react';


import {NavLink} from "react-router-dom";
import {themes} from "../../components/route";
import {AuthContext} from "../../context";

const Theme = ({themeArray}) => {

    const [themeMark,setThemeMark]=useState({
        'Sport': false,
        "Business": false,
        "Fashion": false,
        "Medicine": false,
        "Cinema": false,
        "Arts": false,
        "Music": false,
        "IT": false,
        "Games": false,
    })

    const setMark=(theme,bool)=>{
        bool?themeArray.push(theme):themeArray.pop(theme)

        setThemeMark({...themeMark,[theme]:bool})

    }
    return (
        <>

            {themes.map((theme) =>
                <div className={themeMark[theme.text]?'themeChecked':theme.class}  id={theme.id} key={theme.id} onClick={()=>setMark(theme.text,!themeMark[theme.text])} ><span><h2>{theme.text}</h2></span></div>
            )
            }
            {/*<div className="  theme" > <span><h2>Sport</h2></span></div>*/}
            {/*<div className="   theme" id="t2"> <span><h2>Business</h2></span></div>*/}
            {/*<div className="   theme" id="t3"> <span><h2>Fashion</h2></span></div>*/}
        </>
    );
};

export default Theme;