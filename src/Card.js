import React from 'react';
import './Card.css';
import 'tachyons';

const Card = () => {
        return(
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src="" alt="robots" src="http://robohash.org/test?200x200"/>
                <div>
                    <h2>Jane Doe</h2>
                    <p>jane.s@gmail.com</p>
                </div>
            </div>
        );
}

export default Card;