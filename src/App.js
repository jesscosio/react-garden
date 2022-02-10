import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/home/HomePage";
import BlogPage from "./pages/blog/BlogPage";
import PostPage from "./pages/blog/PostPage";
import EditPostPage from "./pages/blog/EditPostPage";
import CreatePostPage from "./pages/blog/CreatePostPage";
import EditPostSuccessModal from "./pages/blog/EditPostSuccessModal";
import GalleryPage from "./pages/gallery/GalleryPage";
import AboutPage from "./pages/about/AboutPage";
import { Router, Route } from "react-router-dom";
import logo from "./assets/windmill.png";
import history from "./history";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Header path="/" imageSrc={logo} headerText="Daffodil Mill" />
        <Route path="/" exact component={HomePage} />
        <Route path="/gallery" exact component={GalleryPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/blog" exact component={BlogPage} />    
        <Route path="/blog/create" exact component={CreatePostPage} />
        <Route path="/blog/edit/:id" exact component={EditPostPage} />
        <Route path="/blog/post/:id" exact component={PostPage} />
        <Route path="/edit-success/:id" exact component={EditPostSuccessModal} />
        <Route path="/venmo" component={() => {
            window.location.href =
              "https://venmo.com/code?user_id=3358072256856064394";
            return null; }} />
        <Footer />
      </Router>
    );
  }
}

export default App;
