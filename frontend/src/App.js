import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css'
import CreatePost from './pages/CreatePost';
import MainPage from './pages/MainPage';
import Post from './pages/Post'
import MainPageAnchor from './pages/MainPageAnchor';

// import "../public/assets/css/style.css";
// import "../public/assets/css/bootstrap.css";
// import "../public/assets/css/animate.css";
// import "../public/assets/css/icomoon.css";
// import "../public/assets/css/magnific-popup.css";
// import "../public/assets/css/owl.theme.default.min.css";

const App = () => {
  return (
    <div>
      {/* <div className="navbar">
        <div className="links"> 
        <a href="/">Main Page</a>
        <a href="/createpost">Create Post</a>
        </div>
     
      </div> */}
    

    <Router>
      <Route path="/" exact render={(props) => <MainPageAnchor />} />
      <Route path="/mainPage" exact render={(props) => <MainPage />} />
      <Route path="/createpost" render={(props)=> <CreatePost />} />
      <Route path="/post/:postId" render={(props)=> <Post />}/>
     
    </Router>
    </div>
  )
}

export default App;

