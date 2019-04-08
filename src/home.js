import React from 'react'
import './jojo.css'
import Header from './header'
import Footer from './footer'


class JoJo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: "Fact: JoJo is Life",
            pageSubtitle: "Seriously though, she is queen."
        }
    }

    componentDidMount() {
        document.title = "Home | JoJo 24/7"
    }

    render() {
        const { pageTitle, pageSubtitle } = this.state;

        return (
            <div className="jojo">
                <Header pageTitle={pageTitle} pageSubtitle={pageSubtitle} />
                    <p>Yes, this is literally a site with a theme of JoJo Levesque. I made this to channel the early 2000's asthetic and to be extra, but mainly it's for my friend, Elite. He just really wanted a site all about one of his favorite artists, JoJo.</p>
                    <p> Since you're here you might as well listen to her albums and download all of them. She graced us with remakes of her two albums, High Road and JoJo, which are such bops, and also the Mad Love album is 100/10.</p>
                    <p><i className="fas fa-arrow-circle-down"></i> Below, You can follow JoJo on social media! <i className="fas fa-arrow-circle-down"></i></p>
                    {/* <p> Also, listen to her most recent MV from Youtube.</p> */}
                    {/* Social Media Buttons */}
                    <div className="social">
                      <a href="https://www.facebook.com/JoJo/"><i className="fab fa-facebook"></i></a>
                      <a href="https://twitter.com/iamjojo"><i className="fab fa-twitter"></i></a>
                      <a href="https://www.youtube.com/user/jojoofficialonline"><i className="fab fa-youtube"></i></a>
                      <a href="https://www.instagram.com/iamjojo/"><i className="fab fa-instagram"></i></a>
                    </div>
                    {/* youtube player*/}
                    {/* <div className="videoWrapper">
											<iframe width="560" height="315" src="https://www.youtube.com/embed/pScpXs7Ysdg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="video" title="video" />
                    </div> */}
                    <p> YOU CAN CHOOSE YOUR MUSIC PLATFORM AND STREAM...LIKE RIGHT NOW!! </p>
                    <p> <i className="fas fa-arrow-circle-down"></i> Just follow the icons below! <i className="fas fa-arrow-circle-down"></i></p>
                    {/* streaming links*/}
                    <div className="streaming">
                      <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/artist/jojo/5519840" className="stream"><i className="fab fa-apple"></i></a>
                      <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/5xuNBZoM7z1Vv8IQ6uM0p6" className="stream"><i className="fab fa-spotify"></i></a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/JoJo/e/B000APPAO6/ref=dp_byline_cont_music_1" className="stream"><i className="fab fa-amazon"></i></a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/jojoofficialonline" className="stream"><i className="fab fa-youtube"></i></a>
                      <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/music/artist/JoJo?id=Awwrrvlqbrwunzdhy26wptg54le" className="stream"><i className="fab fa-google-play"></i></a>
                     </div>

                <Footer />
            </div>
        )
    }
}

export default JoJo;
