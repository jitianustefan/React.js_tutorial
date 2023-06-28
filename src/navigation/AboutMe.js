import React from "react";
import ReactPlayer from "react-player";

function AboutMe()
{
    const vidUrl = "https://www.youtube.com/watch?v=rQ8L9tsFG_Y&ab_channel=Psych2Go";
    return (
        <div>
            <h1>About Me</h1>
            <h2>React Player example</h2>
            <ReactPlayer 
                url={vidUrl}
                playing={false}
                volume={0.5}
            />
        </div>
    );
}

export default AboutMe;