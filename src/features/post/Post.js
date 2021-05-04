import React from "react";
import { useDispatch } from "react-redux";
import "./post.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { PicCarousel } from "../../utils/picCarousel/PicCarousel";
import "../../../node_modules/video-react/dist/video-react.css";
import ReactHlsPlayer from "react-hls-player";

import { setGallery } from "./postSlice";

//Function that we use to format the text posts.
function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");

    return doc.documentElement.textContent;
}

export function Post(props) {
    const dispatch = useDispatch();
    if (props.data.secure_media && props.data.secure_media.reddit_video) {
        return (
            <div className="post post_video">
                <div className="info">
                    <div className="info-item points">
                        <ArrowUpwardIcon />
                        <p>{props.data.score}</p>
                    </div>
                    <br />
                    <div className="info-item children">
                        <ChatBubbleIcon />
                        <p>{props.data.num_comments}</p>
                    </div>
                </div>
                <div className="contents">
                    <div className="info-item metadata">
                        <p><span className="rslash">r/</span>{props.data.subreddit}</p>
                        <p><span className="uslash">u/</span>{props.data.author}</p>
                    </div>
                    <h2 className="title-text">{props.data.title}</h2>
                    <ReactHlsPlayer src={props.data.secure_media.reddit_video.hls_url} autoplay={false} controls={true} className="video-container"/>
                </div>
            </div>
        );
    } else if(props.data.secure_media && props.data.secure_media.oembed) {
        return (
            <div className="post post_gif">
                <div className="info">
                    <div className="info-item points">
                        <ArrowUpwardIcon />
                        <p>{props.data.score}</p>
                    </div>
                    <br />
                    <div className="info-item children">
                        <ChatBubbleIcon />
                        <p>{props.data.num_comments}</p>
                    </div>
                </div>
                <div className="contents">
                    <div className="info-item metadata">
                        <p><span className="rslash">r/</span>{props.data.subreddit}</p>
                        <p><span className="uslash">u/</span>{props.data.author}</p>
                    </div>
                    <h2>{props.data.title}</h2>
                    <div className="embedded_media" dangerouslySetInnerHTML={{__html: htmlDecode(props.data.secure_media.oembed.html)}}>
                    </div>
                </div>
            </div>
        )
    }

    if (props.data.post_hint === "image") {
        return (
            <div className="post post_image">
                <div className="info">
                    <div className="info-item points">
                        <ArrowUpwardIcon />
                        <p>{props.data.score}</p>
                    </div>
                    <br />
                    <div className="info-item children">
                        <ChatBubbleIcon />
                        <p>{props.data.num_comments}</p>
                    </div>
                </div>
                <div className="contents">
                    <div className="info-item metadata">
                        <p><span className="rslash">r/</span>{props.data.subreddit}</p>
                        <p><span className="uslash">u/</span>{props.data.author}</p>
                    </div>
                    <h2>{props.data.title}</h2>
                    <img
                        className="image"
                        alt="Post Content"
                        src={props.data.url}
                    />
                </div>
            </div>
        );
    }

    if (props.data.gallery_data) {
        return (
            <div className="post post_carousel">
                <div className="info">
                    <div className="info-item points">
                        <ArrowUpwardIcon />
                        <p>{props.data.score}</p>
                    </div>
                    <br />
                    <div className="info-item children">
                        <ChatBubbleIcon />
                        <p>{props.data.num_comments}</p>
                    </div>
                </div>
                <div className="contents">
                    <div className="info-item metadata">
                        <p><span className="rslash">r/</span>{props.data.subreddit}</p>
                        <p><span className="uslash">u/</span>{props.data.author}</p>
                    </div>
                    <h2>{props.data.title}</h2>
                    <PicCarousel
                        className="carousel"
                        pics={props.data.gallery_data.items}
                    />
                </div>
            </div>
        );
    }

    if (props.data.selftext === "") {
        return (
            <div className="post">
                <div className="info">
                    <div className="info-item points">
                        <ArrowUpwardIcon />
                        <p>{props.data.score}</p>
                    </div>
                    <br />
                    <div className="info-item children">
                        <ChatBubbleIcon />
                        <p>{props.data.num_comments}</p>
                    </div>
                </div>
                <div className="contents">
                    <div className="info-item metadata">
                        <p><span className="rslash">r/</span>{props.data.subreddit}</p>
                        <p><span className="uslash">u/</span>{props.data.author}</p>
                    </div>
                    <h2>{props.data.title}</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="post">
            <div className="info">
                <div className="info-item points">
                    <ArrowUpwardIcon />
                    <p>{props.data.score}</p>
                </div>
                <br />
                <div className="info-item children">
                    <ChatBubbleIcon />
                    <p>{props.data.num_comments}</p>
                </div>
            </div>
            <div className="contents">
                <div className="info-item metadata">
                    <p><span className="rslash">r/</span>{props.data.subreddit}</p>
                    <p><span className="uslash">u/</span>{props.data.author}</p>
                </div>
                <h4>{props.data.title}</h4>
                <div
                    className="selftext"
                    dangerouslySetInnerHTML={{
                        __html: htmlDecode(props.data.selftext_html),
                    }}
                ></div>
            </div>
        </div>
    );
}
