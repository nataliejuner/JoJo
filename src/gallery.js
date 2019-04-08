import React from 'react'
import './jojo.css'
import Header from './header'
import Footer from './footer'
import jojo1 from './images/unnamed.jpg'
import jojo2 from './images/JoJo6.jpg'
import jojo3 from './images/tumblr_o8y0p9bSbX1r1g1gyo1_1280.png'
import jojo4 from './images/tumblr_ny3boi2LKR1r1g1gyo1_1280.png'
import jojo5 from './images/tumblr_o8y0nk5iU81r1g1gyo1_1280.png'
import jojo6 from './images/tumblr_o8y0taxvgE1r1g1gyo1_1280.png'
import jojo7 from './images/tumblr_o14d3mSJMr1r1g1gyo1_640.png'
import jojo8 from './images/tumblr_n1s7vbGLyA1r0nvg1o3_250.gif'
import jojo9 from './images/tumblr_nx2b1yLFgJ1r1g1gyo2_400.png'
import jojo10 from './images/tumblr_nvi9wsSgJa1uu1xjwo2_500.gif'
import jojo11 from './images/94jGNN.gif'
import jojo12 from './images/joanna-jojo-levesque-social-media-04-27-2018-8.jpg'
import jojo13 from './images/joanna-jojo-levesque-performing-at-the-fader-fort-at-the-sxsw-festival-in-austin-march-2014_3.jpg'
import jojo15 from './images/tumblr_oiifbomwAX1qzwoilo2_250.gif'
import jojo16 from './images/tumblr_otykbeQYyh1vvvh56o1_640.jpg'
import jojo17 from './images/tumblr_pnpggmScMn1uu1xjwo1_500.gif'
import jojo18 from './images/tumblr_p0g9ueqVpR1s2yr14o1_1280.jpg'
import jojo19 from './images/584c2bbd81808bae27d2b286c90c03fe.jpg'
import jojo20 from './images/tumblr_pc6emzy1NK1x5p4y7o1_1280.jpg'
import jojo21 from './images/tumblr_onakpn9yWP1spcyopo2_1280.jpg'
import jojo22 from './images/tumblr_pj8ay79faG1y02h3go1_1280.jpg'
import jojo23 from './images/tumblr_p3e0wlF7jL1uu1xjwo3_540.png'
import jojo24 from './images/tumblr_ny3bv0jwBq1r1g1gyo1_1280.png'
import jojo25 from './images/DZ3-V5wVQAAFcxV.jpg'
import jojo26 from './images/mDiCQAOj-_lZA-dy599R1yQ42r0cjTBoOO9puZ4g4jk.jpg'
import jojo27 from './images/3Sg98RCNvpRo1HbLvcbpmDXdianFIwM00bkO4MelPg4.jpg'
import jojo28 from './images/jojo.png'
import jojo29 from './images/8A3bPQZ3XXLac52xL-gt5yqdyMJ8TliREpumIwRvZG8.jpg'
import jojo30 from './images/0120_JoJo1.jpg'
import jojo31 from './images/7YC0EgeJJ69_ERMUwZPrncK-9Xjc-mDvaqQJUHkWO3U.jpg'
import jojo32 from './images/yyh06ufdxa111.jpg'
import jojo33 from './images/F35BCdw8ecxfBz4l5phrzvdUkL6DW1rcuV0qQmuVDBw.jpg'
import jojo34 from './images/image.webp'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: "If Looks Could Kill",
            pageSubtitle: "Take the time to appreciate all JoJo."
        }
    }

    componentDidMount() {
        document.title = "Gallery | JoJo 24/7"
    }

    render() {
        const { pageTitle, pageSubtitle } = this.state;
        return (
            <div className="jojo">
                <Header pageTitle={pageTitle} pageSubtitle={pageSubtitle} />
                <div className="masonry" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200, "gutter": 20 }'>
									<div className="item"><a href={jojo1} target="_blank" data-lightbox="jojo"><img src={jojo1} alt="" /></a></div>
									<div className="item"><a href={jojo2} target="_blank" data-lightbox="jojo"><img src={jojo2} alt="" /></a></div>
									<div className="item"><a href={jojo3} target="_blank" data-lightbox="jojo"><img src={jojo3} alt="" /></a></div>
									<div className="item"><a href={jojo4} target="_blank" data-lightbox="jojo"><img src={jojo4} alt="" /></a></div>
									<div className="item"><a href={jojo5} target="_blank" data-lightbox="jojo"><img src={jojo5} alt="" /></a></div>
									<div className="item"><a href={jojo6} target="_blank" data-lightbox="jojo"><img src={jojo6} alt="" /></a></div>
									<div className="item"><a href={jojo7} target="_blank" data-lightbox="jojo"><img src={jojo7} alt="" /></a></div>
									<div className="item"><a href={jojo8} target="_blank" data-lightbox="jojo"><img src={jojo8} alt="" /></a></div>
									<div className="item"><a href={jojo9} target="_blank" data-lightbox="jojo"><img src={jojo9} alt="" /></a></div>
									<div className="item"><a href={jojo10} target="_blank" data-lightbox="jojo"><img src={jojo10} alt="" /></a></div>
									<div className="item"><a href={jojo11} target="_blank" data-lightbox="jojo"><img src={jojo11} alt="" /></a></div>
									<div className="item"><a href={jojo12} target="_blank" data-lightbox="jojo"><img src={jojo12} alt="" /></a></div>
									<div className="item"><a href={jojo13} target="_blank" data-lightbox="jojo"><img src={jojo13} alt="" /></a></div>
									<div className="item"><a href={jojo15} target="_blank" data-lightbox="jojo"><img src={jojo15} alt="" /></a></div>
									<div className="item"><a href={jojo16} target="_blank" data-lightbox="jojo"><img src={jojo16} alt="" /></a></div>
									<div className="item"><a href={jojo17} target="_blank" data-lightbox="jojo"><img src={jojo17} alt="" /></a></div>
									<div className="item"><a href={jojo18} target="_blank" data-lightbox="jojo"><img src={jojo18} alt="" /></a></div>
									<div className="item"><a href={jojo19} target="_blank" data-lightbox="jojo"><img src={jojo19} alt="" /></a></div>
									<div className="item"><a href={jojo20} target="_blank" data-lightbox="jojo"><img src={jojo20} alt="" /></a></div>
									<div className="item"><a href={jojo21} target="_blank" data-lightbox="jojo"><img src={jojo21} alt="" /></a></div>
									<div className="item"><a href={jojo22} target="_blank" data-lightbox="jojo"><img src={jojo22} alt="" /></a></div>
									<div className="item"><a href={jojo23} target="_blank" data-lightbox="jojo"><img src={jojo23} alt="" /></a></div>
									<div className="item"><a href={jojo24} target="_blank" data-lightbox="jojo"><img src={jojo24} alt="" /></a></div>
									<div className="item"><a href={jojo25} target="_blank" data-lightbox="jojo"><img src={jojo25} alt="" /></a></div>
									<div className="item"><a href={jojo26} target="_blank" data-lightbox="jojo"><img src={jojo26} alt="" /></a></div>
									<div className="item"><a href={jojo27} target="_blank" data-lightbox="jojo"><img src={jojo27} alt="" /></a></div>
									<div className="item"><a href={jojo28} target="_blank" data-lightbox="jojo"><img src={jojo28} alt="" /></a></div>
									<div className="item"><a href={jojo29} target="_blank" data-lightbox="jojo"><img src={jojo29} alt="" /></a></div>
									<div className="item"><a href={jojo30} target="_blank" data-lightbox="jojo"><img src={jojo30} alt="" /></a></div>
									<div className="item"><a href={jojo31} target="_blank" data-lightbox="jojo"><img src={jojo31} alt="" /></a></div>
									<div className="item"><a href={jojo32} target="_blank" data-lightbox="jojo"><img src={jojo32} alt="" /></a></div>
									<div className="item"><a href={jojo33} target="_blank" data-lightbox="jojo"><img src={jojo33} alt="" /></a></div>
									<div className="item"><a href={jojo34} target="_blank" data-lightbox="jojo"><img src={jojo34} alt="" /></a></div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Gallery;
