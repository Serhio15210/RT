import React, {useContext, useEffect, useState} from 'react';
import Tabs from "./Tabs";
import {Button, Table} from "react-bootstrap";
import {AuthContext} from "../../context";
import {$host} from "../../http";
import PostService from "../../API/PostService";
import {set} from "mobx";

const Statistics = () => {
    const {user,defaultArray,setDefaultArray}=useContext(AuthContext)
    let def=[]
    const [d,setD]=useState([])
    const [themeMark,setThemeMark]=useState([
        'Sport',
        "Business",
        "Fashion",
        "Medicine",
        "Cinema",
        "Arts",
        "Music",
        "IT",
        "Games"
    ])
    const getDefault=async () => {
        const response = await PostService.getDef().then((response) => {
           setD(response.data)

        });

        console.log(d)

    }
    const getNum=(theme)=>{

        return d.filter(post=>post.text.toLowerCase().includes(theme.toLowerCase())).length
    }


    return (
        <>

        <Table striped bordered hover variant="dark" style={{position:"relative",display:"inline-table",justifyContent:"center",alignContent:"center",width:1000,top:100,left:250}}>
            <thead>

            <tr className=" ">
                <th>#</th>
                <th>Categories</th>
                <th>Posts</th>

            </tr>
            </thead>
            <tbody>
            {themeMark.map((theme,index)=>

                <tr id={index}>
                    <td>{index+1}</td>
                    <td>{theme}</td>
                    <td>{getNum(theme)}</td>
                </tr>
            )}
            <Button onClick={getDefault} style={{position:"relative",display:"inline-block",justifyContent:"center",left:450,top:30,width:100,height:50,color:"white"}}> Update</Button>
            {/*<tr>*/}
            {/*    <td>1</td>*/}
            {/*    <td>Mark</td>*/}
            {/*    <td>Otto</td>*/}
            {/*    <td>@mdo</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
            {/*    <td>2</td>*/}
            {/*    <td>Jacob</td>*/}
            {/*    <td>Thornton</td>*/}
            {/*    <td>@fat</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
            {/*    <td>3</td>*/}
            {/*    <td colSpan="2">Larry the Bird</td>*/}
            {/*    <td>@twitter</td>*/}
            {/*</tr>*/}
            </tbody>

        </Table>
</>
    );
};

export default Statistics;