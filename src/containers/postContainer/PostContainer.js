import React from 'react';
import { useSelector } from 'react-redux';

import { Post } from '../../features/post/Post';
import './postContainer.css'

import ReactLoading from 'react-loading';

export function PostContainer (props) {
    // const dispatch = useDispatch();
    const { isLoading, hasError, posts, showPosts } = useSelector((state) => state.postContainer)
    const currentFilter = useSelector((state) => state.filter);

    if(isLoading){
        return(
            <div className="nonpost-container">
                <ReactLoading className="loader" type='bars' color='#519fcf' height={'15%'} width={'10%'} />
            </div>
        )
    } else if(hasError){
        return(
            <div className="nonpost-container">
                <h1>Error loading posts, please try again later :(</h1>
            </div>
        )
    }

    if(currentFilter.currentFilter === 'new' && !showPosts){
        return (
            <div className="nonpost-container">
                <Post newWarn={true} />
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