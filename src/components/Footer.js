import React from 'react'
import { TiLocation } from "react-icons/ti";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import '../assets/css/Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className='footer sticky-bottom'>
            <footer className="p-3 text-center" id="contact">
                <h3 className="text-uppercase fw-bold mb-4">
                    Contact
                </h3>
                <h5 className="mb-3"><TiLocation /> Chhapi </h5>
                <h5 className="mb-3"><MdMail /> automart92@gmail.com </h5>
                <h5><FaPhoneAlt /> +91 99987 09619 </h5>
                <h5><FaPhoneAlt style={{ color: "#0d2a4f" }} /> +91 70464 87016 </h5>
            </footer >
            <div className="license-container">
                <div className="license text-center p-4">
                    © 2021 Copyright: <Link className="text-reset fw-bold" to="/">Auto Mart</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer

