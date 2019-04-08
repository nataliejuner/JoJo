import React from 'react'
import './jojo.css'
import Header from './header'
import Footer from './footer'


class Madlib extends React.Component {

    componentDidMount() {
        document.title = "Madlib | JoJo 24/7"
    }

    render() {
        return (
            <div className="madlib">
                <Header />
                Im MaDlIbS
                <Footer />
            </div>
        )
    }
}

export default Madlib;
