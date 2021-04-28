import React from "react";
import "./post.css";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

//Function that we use to format the text posts.
function htmlDecode(input) {

    var doc = new DOMParser().parseFromString(input, "text/html");
    
    return doc.documentElement.textContent;   
}

export function Post(props) {
    if (props.data.selftext === "") {
        return (
            <div className="post">
                <div className="info">
                    <div className="info-item">
                        <ArrowUpwardIcon />
                        <p>{props.data.score}</p>
                    </div>
                    <br />
                    <div className="info-item">
                        <ChatBubbleIcon />
                        <p>{props.data.num_comments}</p>
                    </div>
                </div>
                <div className="contents">
                    <h2>{props.data.title}</h2>
                    
                </div>
            </div>
        );
    }   
        
    return (
        <div className="post">
            <div className="info">
                <div className="info-item">
                    <ArrowUpwardIcon />
                    <p>{props.data.score}</p>
                </div>
                <br />
                <div className="info-item">
                    <ChatBubbleIcon />
                    <p>{props.data.num_comments}</p>
                </div>
            </div>
            <div className="contents">
                <h4>{props.data.title}</h4>
                <div className="selftext" dangerouslySetInnerHTML={{__html: htmlDecode(props.data.selftext_html)}}></div>
            </div>
        </div>
    );
}
