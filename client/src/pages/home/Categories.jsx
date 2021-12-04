import React, {useContext, useState} from 'react';
import {Card, Col, Container, ListGroup, NavLink, Row} from "react-bootstrap";
import {Button} from "bootstrap";
import './Home.css'
import {AuthContext} from "../../context";

const Categories = () => {
    // const [sportMark, setSportMark] = useState(false)
    // const [politicsMark, setPoliticsMark] = useState(false)
    // const [fashionMark, setFashionMark] = useState(false)
    // const [businessMark, setBusinessMark] = useState(false)
    // const [cinemaMark, setCinemaMark] = useState(false)
    // const [musicMark, setMusicMark] = useState(false)
    // const [itMark, setITMark] = useState(false)
    // const [medicineMark, setMedicineMark] = useState(false)
    // const [gamesMark, setGamesMark] = useState(false)
    const {themeArray} = useContext(AuthContext)
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
        setThemeMark({...themeMark,[theme]:bool})

    }
    return (
        <Container className="categories container-fluid ">

            <h1 className=" d-flex justify-content-center lef " style={{color: "white"}}>Categories</h1>
            <Row className="regContainer ">

                <Col md="5" >

                    <ListGroup variant="flush categoryPointer ">
                        {/*<ListGroup.Item className={sportMark ?*/}
                        {/*    "choose fas fa-check bg-black ":"choose"}  onClick={()=>setSportMark(!sportMark)}><i className="fas fa-futbol "/>{themeArray[0]}</ListGroup.Item>*/}
                        {/*<ListGroup.Item className={politicsMark ?*/}
                        {/*    "choose fas fa-check bg-black":"choose"} onClick={()=>setPoliticsMark(!politicsMark)}><i className="fas fa-landmark"/> Politics</ListGroup.Item>*/}
                        {/*<ListGroup.Item className={fashionMark ?*/}
                        {/*    "choose fas fa-check bg-black":"choose"} onClick={()=>setFashionMark(!fashionMark)}><i className="fas fa-tshirt"/> Fashion</ListGroup.Item>*/}
                        {themeArray.map((theme, index) =>
                            <ListGroup.Item className={themeMark[theme] ?
                                "chooseChek fas fa-check " : "choose "} style={themeMark[theme] ?
                                {color:'mediumvioletred'} : null} onClick={() => setMark(theme,!themeMark[theme])}><i
                                className="fas fa-hashtag"/> {theme}</ListGroup.Item>
                        )}

                    </ListGroup>

                </Col>
                {/*<Col md="4" className="regContainer ">*/}


                {/*        <ListGroup variant="flush categoryPointer" >*/}
                {/*            <ListGroup.Item className={businessMark ?*/}
                {/*                "choose fas fa-check bg-black":"choose "} onClick={()=>setBusinessMark(!businessMark)}><i className="fas fa-handshake"/> Business</ListGroup.Item>*/}
                {/*            <ListGroup.Item className={cinemaMark ?*/}
                {/*                "choose fas fa-check bg-black":"choose"} onClick={()=>setCinemaMark(!cinemaMark)}><i className="fas fa-film"/> Cinema</ListGroup.Item>*/}
                {/*            <ListGroup.Item className={musicMark ?*/}
                {/*                "choose fas fa-check bg-black":"choose"} onClick={()=>setMusicMark(!musicMark)}><i className="fas fa-music"/> Music</ListGroup.Item>*/}
                {/*        </ListGroup>*/}
                {/*</Col>*/}
                {/*<Col md="4" className="regContainer my-3">*/}

                {/*        <ListGroup variant="flush categoryPointer" >*/}
                {/*            <ListGroup.Item className={itMark ?*/}
                {/*                "choose fas fa-check bg-black":"choose"} onClick={()=>setITMark(!itMark)}><i className="fas fa-laptop-code "/> IT</ListGroup.Item>*/}
                {/*            <ListGroup.Item className={medicineMark ?*/}
                {/*                "choose fas fa-check bg-black":"choose"} onClick={()=>setMedicineMark(!medicineMark)}><i className="fas fa-clinic-medical"/> Medicine</ListGroup.Item>*/}
                {/*            <ListGroup.Item className={gamesMark ?*/}
                {/*                "choose fas fa-check bg-black":"choose"} onClick={()=>setGamesMark(!gamesMark)}><i className="fas fa-gamepad"/> Games</ListGroup.Item>*/}
                {/*        </ListGroup>*/}
                {/*</Col>*/}
            </Row>
        </Container>
    );
};

export default Categories;