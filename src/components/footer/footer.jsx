import React from 'react';
import logo from "../../assets/LOGO_footer_desktop.png";
import '../../style/header/header.css'
import '../../style/footer/footer.css'

export default function Footer() {



    return (
        <footer>
            <div className='footer__item'>
                <img className="footer__logo" src={logo} alt="logo kasa"></img>
                <p className='credit'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}
