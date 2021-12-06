import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import {AuthContext} from "./context";
import Header from "./components/Header";
import AppRouter from "./components/route/AppRouter";

import {observer} from "mobx-react-lite";
import {BeatLoader} from "react-spinners";
import Authorisation from "./pages/Authorisation/Authorisation";


const App = observer(() => {

    const [isLoading, setLoading] = useState(true)
    const[isAuth,setIsAuth]=useState(false)
    const[isSignUp,setSignUp]=useState(false)
    const [avatar,setAvatar]=useState(null)
    const themeArray=[]
        useEffect(()=>{
            if (localStorage.getItem('auth')&&localStorage.getItem('token')){
                setIsAuth(true)
                localStorage.getItem('themeArray')&&themeArray.push(localStorage.getItem('themeArray'))

                console.log(themeArray)
            }
            setLoading(false)
        },[])
    // useEffect(() => {
    //     check().then(data => {
    //         console.log(data)
    //         user.setUser(true)
    //         user.setIsAuth(true)
    //
    //     }).finally(() => setLoading(false))
    //
    // }, [])
    if (isLoading) {
       return <BeatLoader loading color='black' size={25} />
    }
    return (

        <AuthContext.Provider value={{
            isAuth,setIsAuth,isLoading,isSignUp,setSignUp,themeArray,avatar,setAvatar
        }}>
        <BrowserRouter >

            <AppRouter/>
            <Header/>
        </BrowserRouter>
        </AuthContext.Provider>



    );
})
export default App;
