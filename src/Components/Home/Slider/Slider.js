import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <Carousel autoPlay infiniteLoop swipeable interval={2000}
         showThumbs={false} stopOnHover={false} swipeScrollTolerance={5} 
         transitionTime={500} thumbWidth={100} selectedItem={0} emulateTouch 
         centerMode centerSlidePercentage={60}
         >  
            <div>
                <img src='./images//home.PNG'/>
            </div>
            <div>
                <img src='./images/home1.jpg'/>
            </div>
            <div>
                <img src='./images/home2.jpg' />
            </div>
        </Carousel>
    );
}
export default Slider;