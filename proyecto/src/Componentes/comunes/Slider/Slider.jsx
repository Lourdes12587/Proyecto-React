import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <div>
         return (
            <Carousel>
                <div>
                    <img src="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
      
    </div>
  )
}

export default Slider
