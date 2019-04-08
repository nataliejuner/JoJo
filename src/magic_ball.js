import React from 'react'
import './jojo.css'
import Header from './header'
import Footer from './footer'


class Magicball extends React.Component {

    componentDidMount() {
        document.title = "Magic 8 Ball | JoJo 24/7"
    }

    render() {
        return (
            <div className="jojo">
                <Header />
                iM mAgIc8BaLl
                <Footer />
            </div>
        )
    }
}

export default Magicball;
