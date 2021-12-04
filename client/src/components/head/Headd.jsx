import React, {useContext} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import logo from "../bb.png";
import {privateComponents, publicComponents} from "../route";
import {AuthContext} from "../../context";
import './Headd.css'
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Headd = () => {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)

    const {user} = useContext(AuthContext )
    const history = useHistory()

    const logOut = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
        // user.setIsAuth(false)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top ">
            <Container>
                <Navbar.Brand href="/home">
                    <img
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto ">

                        {
                            isAuth
                                ?
                                privateComponents.map((route, index) =>

                                    <NavLink to={route.path} className={route.class }
                                             key={index}> {route.text}</NavLink>
                                )
                                :
                                publicComponents.map((route, index) =>

                                    <NavLink to={route.path} className={route.class }
                                             key={index}>{route.text}</NavLink>
                                )


                        }

                    </Nav>

                    {
                        isAuth ? (<div className="default "><NavLink to="/profile" className="barLink"><i className="fas fa-user profile  "
                                                                                      id="profileId"
                                                                                      style={{color: "white"}}/> Profile
                            </NavLink>
                                <Button variant="outline-info " className=" out" onClick={logOut}>Out</Button></div>)
                            : <div>
                                <NavLink to="/login"><LogIn/></NavLink>
                                <NavLink to="/registration"><SignUp/></NavLink>
                            </div>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Headd;