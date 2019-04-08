import React from 'react'
import { Link } from "react-router-dom";
import hero from './images/jojo-label-thatgrapejuice.jpg'
class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="brand" style={{ backgroundImage: 'url(' + hero + ')' }}>
                    <h1 className="page-title">{this.props.pageTitle}</h1>
                    <h2 className="page-subtitle">{this.props.pageSubtitle}</h2>
                </div>
                <nav>
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/gallery" className="nav-item">JoJo Gallery</Link>
                    {/* <Link to="/madlib" className="nav-item">JoJo Madlibs</Link> */}
                    {/* <Link to="/magic8ball" className="nav-item">Magic 8 Ball</Link> */}
                </nav>
            </header>
        )
    }
}

export default Header;
