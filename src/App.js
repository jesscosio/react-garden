import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/home/HomePage";
import BlogPage from "./pages/blog/BlogPage";
import EditPostPage from "./pages/blog/EditPostPage";
import EditPostSuccessModal from "./pages/blog/EditPostSuccessModal";
import GalleryPage from "./pages/gallery/GalleryPage";
// import AboutPage from "./pages/AboutPage";
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
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/blog/edit/:id" exact component={EditPostPage} />
          <Route path="/edit-success/:id" exact component={EditPostSuccessModal} />
          <Footer />
        </Router>
    );
  }
}

export default App;
