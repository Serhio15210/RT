import React from 'react';
import classes from './Loader.module.css'
import {BeatLoader} from "react-spinners";

const Loader = () => {
    return (
        <BeatLoader loading color='black' size={25} >

        </BeatLoader>
    );
};

export default Loader;