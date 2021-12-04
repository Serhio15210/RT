import React from "react";
import {Typography} from "@material-ui/core";
import {FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter} from "react-icons/all";
import {Link} from "react-router-dom";
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="inner-footer">
                <div className="social-links">
                    <ul>
                        <li className="social-items"> <a href="*" className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}><FaFacebook/></a></li>
                        <li className="social-items"> <a href="*" className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}><FaTwitter/></a></li>
                        <li className="social-items"> <a href="*" className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}><FaInstagram/></a></li>
                        <li className="social-items"> <a href="*" className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}><FaTelegram/></a></li>

                    </ul>
                </div>
                <div className="quick-links">
                    <ul>
                        <li className="quick-items">
                            <a href="*">Home</a>
                            <a href="*">Tutorials</a>
                            <a href="*">Services</a>
                            <a href="*">About us</a>
                        </li>
                    </ul>
                </div>
                <div className="outer-footer">
                    Copyright ©2021 All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
//<footer  className="bg-black text-white pt-5 pb-4 ">
    //     <div className="container text-center text-md-left">
    //         <div className="row text-center text-md-center">
    //             <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
    //                 <h5 className="text-uppercase mb-4 " style={{color:"deepskyblue"}}>Company name</h5>
    //                 <p>ReperioTweet</p>
    //             </div>
    //             <div className="col-md-2 col-lg-2  col-xl-2 mx-auto mt-3">
    //                 <h5 className="text-uppercase mb-4  " style={{color:"deepskyblue"}}>Products</h5>
    //                     <p><a href="*" className="text-white" style={{textDecoration:"none"}}>1</a></p>
    //                     <p><a href="*" className="text-white" style={{textDecoration:"none"}}>2 </a></p>
    //                     <p><a href="*" className="text-white" style={{textDecoration:"none"}}>3</a></p>
    //
    //             </div>
    //
    //             <div className="col-md-2 col-lg-2  col-xl-2 mx-auto mt-3">
    //                 <h5 className="text-uppercase mb-4 font-weight-bold "style={{color:"deepskyblue"}}>Links</h5>
    //                 <p><a href="*" className="text-white" style={{textDecoration:"none"}}>Link1</a></p>
    //                 <p><a href="*" className="text-white" style={{textDecoration:"none"}}>Link2</a></p>
    //                 <p><a href="*" className="text-white" style={{textDecoration:"none"}}>Help</a></p>
    //
    //
    //             </div>
    //             <div className="col-md-4 col-lg-2  col-xl-2 mx-auto mt-3">
    //                 <h5 className="text-uppercase mb-4 font-weight-bold "style={{color:"deepskyblue"}}>Contact</h5>
    //                 <p><i className="fas fa-home mr-3"/>Odessa,Ukraine</p>
    //                 <p><i className="fas fa-envelope mr-3"/>malivanchuk.17@gmail.com</p>
    //                 <p><i className="fas fa-phone mr-3"/>+380 977 021 100</p>
    //                 <p><i className="fas fa-phone mr-3"/>+380 95 565 77 78</p>
    //             </div>
    //         </div>
    //         <div className="mb-4">
    //             <div className="row align-items-center">
    //                 <div className="col-md-7 col-lg-5">
    //                     <p style={{color:"deepskyblue"}}>Copyright ©2021 All rights reserved by</p>
    //                 </div>
    //             </div>
    //         <div className="col-md-5 col-lg-4">
    //             <div className="text-center text-md-right">
    //                 <ul className="list-unstyled list-inline">
    //                     <li className="list-inline-item">
    //                         <a href="*" className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}>
    //                             <FaFacebook/>
    //                         </a>
    //                     </li>
    //                     <li className="list-inline-item">
    //                         <a href="*" className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}>
    //                             <FaTwitter/>
    //                         </a>
    //                     </li>
    //                     <li className="list-inline-item">
    //                         <a href="*" className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}>
    //                             <FaInstagram/>
    //                         </a>
    //                     </li>
    //                     <li className="list-inline-item">
    //                         <a href="*" className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}>
    //                             <FaTelegram/>
    //                         </a>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //         </div>
    //     </div>
    //
    // </footer>