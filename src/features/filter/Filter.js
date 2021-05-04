import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './filter.css';
import { switchFilter } from './filterSlice';
import { getRedditData } from '../../containers/postContainer/postContainerSlice';


export function Filter(props) {
    const dispatch = useDispatch();
    const { currentFilter } = useSelector((state) => state.filter)
    console.log(currentFilter)
    useEffect(() => {
        const url = `https://www.reddit.com/${currentFilter}.json`
        dispatch(getRedditData(url))
    })
    return(
        <div className="filter">
            <div className='buttons'>
                <button className={currentFilter === 'hot' ? 'active' : 'inactive'} onClick={() => dispatch(switchFilter({filter:'hot'}))}>Hot</button>
                <button className={currentFilter === 'new' ? 'active' : 'inactive'} onClick={() => dispatch(switchFilter({filter: 'new'}))}>New</button>
                <button className={currentFilter === 'best' ? 'active' : 'inactive'} onClick={() => dispatch(switchFilter({filter: 'best'}))}>Best</button>
            </div>
            <div className='text'>
                <h3>This project is still a work in progress, here are some of the things to be added in the future:</h3>
                <ul>
                    <li>Loading more posts when a user's scroll reaches the bottom of the page</li>
                    <li>Search bar to filter by subreddit</li>
                    <li>Interface to browse comments on posts</li>
                    <li>Improved mobile experience</li>
                </ul>
                <p class="myNote">Made with ❤️ by Quinn Sweeney</p>
            </div>
        </div>
    )
}