import React from "react";

const ImgRender = ({
    imgSrc,
    stringFinder,
    onClick,
}) => {
    
    return (
        <img 
            src={imgSrc} alt='one of the random images'
            data-value={stringFinder(imgSrc)}
            onClick={onClick}/>
    )
}


export default ImgRender