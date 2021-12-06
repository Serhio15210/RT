import React from 'react';
import './About.css'
import banner1 from './it (1).jpg'
import banner2 from './sl1.jpg'
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <>

         {/*<div className="banner1">*/}
         {/*   <img src={banner2}   width="120%"   style={{animation:'zoomOut 3s linear infinite'}}/>*/}
         {/*    <div className="text-box ">*/}
         {/*        <h1>Lorem ipsum</h1>*/}
         {/*        <span/>*/}
         {/*        <p>Вас приветствует ReperioTweet!</p>*/}
         {/*    </div>*/}

         {/*</div>*/}
         {/*   <div className="banner2">*/}
         {/*       <img src={banner1} width="120%"   style={{animation:'zoomOut 3s linear infinite'}}/>*/}
         {/*       <div className="text-box ">*/}
         {/*           <h1>Lorem ipsum</h1>*/}
         {/*           <span/>*/}
         {/*           <p>dolor sit amet, consectetur adipisicing elit.*/}
         {/*               Aut dicta, distinctio enim ex fuga fugit incidunt iusto molestias nemo pariatur perspiciatis quisquam voluptates.*/}
         {/*               Adipisci, dignissimos expedita magni quasi sequi veritatis</p>*/}
         {/*       </div>*/}

         {/*   </div>*/}
            <div id="slider">
                <input type="radio" name="slider" id="slide1" checked={true}/>
                <input type="radio" name="slider" id="slide2" />
                <input type="radio" name="slider" id="slide3" />
                <input type="radio" name="slider" id="slide4"/>
                <div id="slides">
                    <div id="overflow">
                        <div className="inner">
                            <div className="slide slide_1">
                                <div className="slide-content">
                                    <h2>Вас прветсттвует ReperioTweet!</h2>
                                    <p>Content for Slide1</p>
                                </div>
                            </div>
                            <div className="slide slide_1">
                                <div className="slide-content">
                                    <h2>Slide 2</h2>
                                    <p>Content for Slide1</p>
                                </div>
                            </div>
                            <div className="slide slide_1">
                                <div className="slide-content">
                                    <h2>Slide 3</h2>
                                    <p>Content for Slide1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="controls">
                    <label for="slide1"/>
                    <label for="slide2"/>
                    <label for="slide3"/>
                    <label for="slide4"/>
                </div>
                <div id="bullets">
                    <label htmlFor="slide1"/>
                    <label htmlFor="slide2"/>
                    <label htmlFor="slide3"/>
                    <label htmlFor="slide4"/>
                </div>
            </div>
        </>


    );
};

export default About;