import React from 'react';
import { useSelector, /*useDispatch*/ } from 'react-redux';

import { Post } from '../../features/post/Post';
import './postContainer.css'

export function PostContainer (props) {
    // const dispatch = useDispatch();
    const { isLoading, hasError, posts } = useSelector((state) => state.postContainer)

    if(isLoading){
        return(
            <h3>Loading...</h3>
        )
    } else if(hasError){
        return(
            <h1>Error loading posts, please try again later :(</h1>
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