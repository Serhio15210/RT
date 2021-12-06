import React from 'react';
import razrab from './image-removebg-preview.png'
import './Contacts.css'
import bondar from './photo_2021-04-17_02-03-46-removebg-preview.png'
import Footer from "../Footer/Footer";

const Contacts = () => {
    return (

        <div className="contactContainer  ">

            <div className="contactCard">
                <div className="contactContent"  >
                    <h2 style={{color: "white"}}>Маливанчук Сергей</h2>
                    <p style={{color: "white"}}>LAI-195</p>
                </div>
                <img src={razrab}/>
            </div>
            <div className="contactCard" id="contact2">
                <div className="contactContent  "  >
                    <h2 style={{color: "white"}}>Бондарь Владислав</h2>
                    <p style={{color: "white"}}>AI-195</p>
                </div>
                <img src={bondar}/>
            </div>

        </div>


    );
};

export default Contacts;