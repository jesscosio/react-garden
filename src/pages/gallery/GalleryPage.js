import React from "react";
import {connect} from "react-redux";
import { fetchGallery } from "../../actions/GalleryActions";
import gallery from "../../apis/gallery";
import Nav from "../../components/Nav";


class GalleryPage extends React.Component{
    componentDidMount() {
        this.props.fetchGallery();
    }
    renderGallery() {
        
        if(this.props.gallery) {
            return (this.props.gallery).map((img)=> {
                return (<div className="four wide column" key={img.media_id}>
                    
                    {/* <img src={img.media_url} alt="gallery image"/> */}
                </div>);
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tab={{name:"Gallery",value:"gallery", path:"/gallery"}}/>
                <div className="ui grid">
                    {this.renderGallery()}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        gallery: Object.values(state.gallery)
    };
}

export default connect(mapStateToProps, {fetchGallery})(GalleryPage);