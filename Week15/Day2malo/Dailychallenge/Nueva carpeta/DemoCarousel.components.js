import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./DemoCarousel.component.css";
import { Carousel } from 'react-responsive-carousel';

export function DemoCarousel() {
    return(
        <div className="container">
            <Carousel autoPlay={true} interval={3000} infiniteLoop={true} stopOnHover={true}>
                <div>
                    <img src="1.jpg" alt="pic1" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="2.jpg" alt="pic2" />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src="3.jpg" alt="pic3" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src="4.jpg" alt="pic4" />
                    <p className="legend">Las Vegas</p>
                </div>
            </Carousel>
        </div>
    )
}