import React, {useContext, useState} from 'react';
import {themes} from "../../components/route";
import {AuthContext} from "../../context";

const FavoriteThemes = () => {
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
    const {user} =useContext(AuthContext)
    return (
        <div>
            {user.themes.map((theme) =>
                <div className={themeMark[theme.text]?'themeChecked':theme.class}  id={theme.id} key={theme.id} ><span><h2>{theme.text}</h2></span></div>
            )}
        </div>
    );
};

export default FavoriteThemes;