import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './home.css'
import Notice from '../../components/noticeboard/noticeboard'
import Footer from '../../components/footer/footer';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function Home () {
    return (
        <div className="pageWrapper">
            <div className="cWrapper">
                <Carousel responsive={responsive} autoPlay={true}>
                    <div><img alt="test" src={require("./sliderImg/slider_4.jpg")} /></div>
                    <div><img alt="test" src={require("./sliderImg/slider_1.jpg")} /></div>
                    <div><img alt="test" src={require("./sliderImg/slider_2.jpg")} /></div>
                    <div><img alt="test" src={require("./sliderImg/slider_3.jpg")} /></div>
                    {/* <div><img alt="test" src={require("./sliderImg/logo192.png")} /></div> */}
                </Carousel>
            </div>
            <div className="belowC">
                <div className="aboutContent">
                    <h2>About Us</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="noticeWrapper">
                  <Notice />
                </div>
                <div className="Footer">
                  <Footer />
                </div>
            </div>
        </div>
    )
}