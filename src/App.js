import React from 'react';
import Header from "./components/Header";
import PostList from "./components/PostList";

import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <PostList/>
      </div>
    </>
  )
}

export default App;