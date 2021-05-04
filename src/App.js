import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { PostContainer } from './containers/postContainer/PostContainer';
import { Filter } from './features/filter/Filter';
import { getLocalData, getRedditData } from './containers/postContainer/postContainerSlice';
import { DevNotes } from './features/devNotes/DevNotes';

function App() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.currentFilter)
  // const url = `https://www.reddit.com/${filter}.json`
  // useEffect(() => {
  //   dispatch(getRedditData(url))
  // }, [dispatch])

  return (
    <div className="App">
      <PostContainer />
      {/* <div className="sideBar"> */}
        <Filter />
        {/* <DevNotes /> */}
      {/* </div> */}
    </div>
  );
}

export default App;
