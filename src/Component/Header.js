import React from 'react';
import './Header.css';

const Header = () => {
   return(
    <>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#" id="bar">Portfolio</a>
            </div>
            <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="https://github.com/naveen143-maker" target="_blank" id="bar"><i className="fa-brands fa-github"></i>Github</a></li>
                <li><a href="https://www.linkedin.com/in/gajjala-naveen-kumar-reddy-674979192" target="_blank" id="bar"><i class="fa-brands fa-linkedin"></i>LinkedIn</a></li>
                <li><a href="https://www.instagram.com" target="_blank" id="bar"><i class="fa-brands fa-instagram"></i>Instram</a></li>
                <li><a href="https://www.whatsapp.com/" target="_blank" id="bar"><i class="fa-brands fa-whatsapp"></i>Contact us</a></li>
            </ul>
            <form className="navbar-form navbar-left" action="/action_page.php">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" name="search"/>
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </nav>
    </>
   )
}

export default Header;