import React from "react";
import '../../style/footer.css';
import { NavLink } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-links">
                <ul>
                    <NavLink to={"/aboutus"}>About Us</NavLink>
                    <NavLink to={"/contactus"}>Contact Us</NavLink>
                    <NavLink to={"/termsandcondition"}>Terms & Conditions</NavLink>
                    <NavLink to={"/privacypolicy"}>Privacy Policy</NavLink>
                    <NavLink to={"/faq"}>FAQs</NavLink>
                </ul>
            </div>
            <div className="footer-info">
                <p>Email:- <a>AyurHealth123@gmail.com</a> </p> <div style={{ height: 10 }} />
                <p>Contact No:- +916354522329</p>
                
            </div>
            <div className="footer-info">
                <p>&copy; 2024 AyurHealth. All right reserved.</p>
            </div>
        </footer>
    )
}
export default Footer;