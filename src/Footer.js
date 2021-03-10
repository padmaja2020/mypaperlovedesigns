import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className = "footer">
            <div className = "footer__copyright">&copy; mypaperlove</div>
            <div className = "footer__social">
                <div><a href = "https://www.facebook.com/Mypaperlove2021" target = "_blank" className = "footer__options"><i class="fab fa-facebook-f"></i></a></div>
         
                <div><a href = "https://twitter.com/mypaperlove2021" target = "_blank" className = "footer__options"><i class="fab fa-twitter" ></i></a></div>
                <div><a href = "https://www.instagram.com/mypaperlove2021/" target = "_blank" className = "footer__options"><i class="fab fa-instagram"></i></a></div>
                <div><a href = "https://in.pinterest.com/mypaperlove2021/" target = "_blank" className = "footer__options"><i class="fab fa-pinterest-p"></i></a></div>
            </div>
        </div>
    )
}

export default Footer
