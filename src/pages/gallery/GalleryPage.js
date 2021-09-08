import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fetchGallery } from "../../actions/GalleryActions";
import Nav from "../../components/Nav";

class GalleryPage extends React.Component {
  componentDidMount() {
    this.props.fetchGallery();
  }
  renderGallery() {
    if (this.props.gallery) {
      return this.props.gallery.map((img) => {
          return ( <li className="media col-4 p-3" key={img.media_id}>
          <img className="mr-3" style={{width:"100%"}} src={img.media_url} alt="floral arrangement" />
        </li>);
        
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tab={{ name: "Gallery", value: "gallery", path: "/gallery" }} />
        <div className="container pt-5">
            <ul className="row" style={{paddingLeft:'0', listStyle:'none'}}>{this.renderGallery()}</ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gallery: Object.values(state.gallery),
  };
};

export default connect(mapStateToProps, { fetchGallery })(GalleryPage);
