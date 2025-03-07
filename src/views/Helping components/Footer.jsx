import * as React from 'react';
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagramBlack.png";
import linkedIn from "../../assets/icons/linkedinBlack.png";
import X from "../../assets/icons/twitter.png";
import youtube from "../../assets/icons/youtube.png";
import { useNavigate } from "react-router-dom";



function Footer(){

    const year = new Date().getFullYear();
    const navigate = useNavigate();
    return (
    <div className="footer">
        <p></p>
        <div className="footerIcons">
            <div className="single-icons">
                <a target="_blank" href="https://www.facebook.com/login/"><img src={facebook} height="35px"/></a>
            </div>
           <div className="single-icons">
                <a target="_blank" href="https://www.instagram.com/"><img src={instagram} height="35px" /></a>
           </div>
           <div className="single-icons">
                <a target="_blank" href="https://www.linkedin.com/in/matejmandir1/"><img src={linkedIn} height="35px" /></a>
           </div>
           <div className="single-icons">
                <a target="_blank" href="https://x.com/"><img src={X} height="35px" /></a>
           </div>
           <div className="single-icons">
                <a target="_blank" href="https://www.youtube.com/"><img src={youtube} height="35px" /></a>
           </div>
        </div>
        <div className="bottomOne"></div>
        <div className="footerLinks">
            <a onClick={() => navigate("/Profile")}>About Me</a>
            <a onClick={() => navigate("/Home")}>Home</a>
            <a onClick={() => navigate("/Earth")}>News</a>
            <a>Contact Me</a>
        </div>
        <div className="bottomTwo"><p>Copyright ⓒ {year} Matej Mandir 30.07.2024</p></div>
    </div>)
}

export default Footer;