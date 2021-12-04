import React from 'react';
import './About.css'
import banner1 from './it (1).jpg'
import banner2 from './sl1.jpg'
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <>

         <div className="banner1">
            <img src={banner2}   width="120%"   style={{animation:'zoomOut 3s linear infinite'}}/>
             <div className="text-box ">
                 <h1>Lorem ipsum</h1>
                 <span/>
                 <p>dolor sit amet, consectetur adipisicing elit.
                     Aut dicta, distinctio enim ex fuga fugit incidunt iusto molestias nemo pariatur perspiciatis quisquam voluptates.
                     Adipisci, dignissimos expedita magni quasi sequi veritatis</p>
             </div>

         </div>
            <div className="banner2">
                <img src={banner1} width="120%"   style={{animation:'zoomOut 3s linear infinite'}}/>
                <div className="text-box ">
                    <h1>Lorem ipsum</h1>
                    <span/>
                    <p>dolor sit amet, consectetur adipisicing elit.
                        Aut dicta, distinctio enim ex fuga fugit incidunt iusto molestias nemo pariatur perspiciatis quisquam voluptates.
                        Adipisci, dignissimos expedita magni quasi sequi veritatis</p>
                </div>

            </div>
        </>


    );
};

export default About;