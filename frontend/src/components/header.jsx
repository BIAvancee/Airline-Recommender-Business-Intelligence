import React from 'react';
import background from "./../assets/Avion06.jpg";

function Header(props) {
    return (
        <header style={{ backgroundImage: `url(${background})` }}>
            <div className="container">
                <div className="intro-text">
                </div>
            </div>
        </header>
    );
}

export default Header;