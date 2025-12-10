import React,{useState} from "react";
import backgroundImage from "./../assets/video-poster.png";
import backgroundVideo from "./../assets/llanta_inteligente.mp4";
const BackgroundVideo = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
           <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover"
           poster={backgroundImage}>
            <source src={backgroundVideo} type="video/mp4"></source>
            Your browser does not support the video tag.
            </video>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-65 "></div>
        </div>
    );
}
export default BackgroundVideo;