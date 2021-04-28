import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { PostContainer } from './containers/postContainer/PostContainer'
import { getLocalData } from './containers/postContainer/postContainerSlice';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getLocalData());
  }, [dispatch])

  return (
    <div className="App">
      <PostContainer />
    </div>
  );
}

export default App;
