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
                <h2>“WAY OF LIFE”</h2>
                    <p>
                      <p>The foundation of this school was laid on 18 th June 2018.This school runs under the aegis of Silochana Shikshan Samiti.</p>
                      <p>Having classes from nursery to class 9 th and it follows the CBSE curriculum &amp; syllabus.</p>
                      <p>With an excellent infrastructure it promises to impart quality education
to all the young minds. Having excellent faculty from across the state to provide individualized care and support to their students. To
innovate the minds of newly admitted ,they plan and encourage the
students to participate in their own learning process.</p>
                      <p>They plan various activities for infants to boast up the confidence and
gradually prepare them for the upcoming challenges of their life.
Instead of learning, they also encourage and support the talented souls
towards their respective interests.
They believe in encouraging the students to find their way of life.</p>
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