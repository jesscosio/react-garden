import React from "react";


class BlockImage extends React.Component {

    render() {
        return (
            <div className="text-center">
                <img class="rounded" style={{maxWidth:"50vw"}} src={this.props.image} alt={this.props.altTxt}></img>
            </div>
        );
    }

}

export default BlockImage;