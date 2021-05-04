import React from 'react';
import { useSelector } from 'react-redux';

import { Post } from '../../features/post/Post';
import './postContainer.css'

export function PostContainer (props) {
    const { isLoading, hasError, posts } = useSelector((state) => state.postContainer)



    if(isLoading){
        return(
            <div className="nonpost-container">
                <h3>Loading...</h3>
            </div>
        )
    } else if(hasError){
        return(
            <div className="nonpost-container">
                <h1>Error loading posts, please try again later :(</h1>
            </div>
        )
    }

    return (
        <div className="PostContainer">
            {posts.map((post, i) => {
                return <Post key={i} data={posts[i].data}/>
            })}
        </div>
    )
}