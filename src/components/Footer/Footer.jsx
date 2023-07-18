import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <nav>
                    <a className="footer-link" href="/">Home</a>
                    <a className="footer-link" href="/Products">Productos</a>
                    <a className="footer-link" href="/">Contacto</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
