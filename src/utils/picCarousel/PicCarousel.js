import React, { useState } from 'react';
import './picCarousel.css';


export function PicCarousel(props) {
    const [currentPic, setCurrentPic] = useState(0);
    function nextPic(){
        setCurrentPic(currentPic + 1);
    }

    function previousPic(){
        setCurrentPic(currentPic - 1);
    }

    return(
        <div className="PicCarousel">
            <div className="controls">
                {currentPic === 0 ? <button disabled>🚫</button>: <button onClick={() => previousPic()}>👈</button>}
                {currentPic === props.pics.length - 1 ? <button disabled>🚫</button> : <button onClick={() => nextPic()}>👉</button>}
            </div>
            <img className="shown-img" src={`https://i.redd.it/${props.pics[currentPic].media_id}.jpg`} alt="Carousel" />
        </div>
    )
}