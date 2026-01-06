import React from 'react';
import Marquee from './Marquee';

const Reviews = () => {
    return (
        <div>
            <Marquee direction="left" speed={30} reverse={true} pauseOnHover={true}>
                <h1>Hello</h1>
            </Marquee>
            
        </div>
    );
};

export default Reviews;