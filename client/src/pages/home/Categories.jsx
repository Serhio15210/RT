import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom"
import {Button} from "bootstrap";
import './Home.css'
import {AuthContext} from "../../context";
import {$authHost, $host} from "../../http";
import {useHistory} from "react-router-dom";

const Categories = ({posts, setPosts}) => {
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
    const history = useHistory()
    const oldPosts=posts
    let newArray = Array.from(themeArray);
    const [user, setUser] = useState([])
    const [themeMark, setThemeMark] = useState({
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
    const getThemes = async () => {
        const {data} = await $authHost.get(`auth/user_one`, {themes: themeArray})

        return data
    }
    useEffect(() => {
       getThemes().then(data=>console.log(data))



    }, [])


    // if (bool){
    //     const response=array.filter(post => {return post.text.toLowerCase().includes(theme)})
    //
    //     setArray(response)
    // }
    const sortedPosts = async (theme, bool) => {
        setThemeMark({...themeMark, [theme]: bool})
        if (bool===true){
            const response=await $host.get(`auth/twitter_api?tag=` + theme)

            setPosts(response.data.data)
        }else {
            setPosts(oldPosts)
        }
    }


    return (

        <Container className="categories container-fluid   ">

            <h1 className=" d-flex justify-content-center lef " style={{color: "white"}}>Categories</h1>

            <Row className="regContainer  ">

                <Col md="5">


                    {/*{ JSON.parse(user.themes)!== 0 ?  JSON.parse(user.themes).map((theme, index) =>*/}
                    {newArray.map((theme, index) =>
                        <ListGroup className="mt-3 listCategory"> <ListGroup.Item className={themeMark[theme] ?
                            "chooseChek fas fa-check " : "choose "} style={
                            {boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',textAlign:"center"}}
                                                                                  onClick={() => sortedPosts(theme, !themeMark[theme])}><i
                            className="fas fa-hashtag"/> {theme}</ListGroup.Item>
                        </ListGroup>)
                    //     : <NavLink style={{
                    //     textDecoration: "none",
                    //     border: "3px solid white",
                    //     borderRadius: 30,
                    //     position: "relative",
                    //     top: 50
                    // }} className="addThemes" to="/themes">Add Tags</NavLink>
                    }


                </Col>

            </Row>
        </Container>


    );
};

export default Categories;