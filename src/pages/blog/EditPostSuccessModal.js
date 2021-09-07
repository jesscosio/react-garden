import React from "react";
import Modal from '../../components/Modal';
import history from '../../history';
import { Link } from "react-router-dom";

class EditPostSuccesModal extends React.Component {
    renderActions () {
        const {id} = this.props.match.params;

        return (<div>
            <Link to="/" className="ui button">OK</Link>
        </div>);
    }
    render() {
        console.log("rendering modal");
       return (
        <Modal
        header = "Post Updated"
        content = "Post was updated successfully"
        actions = {this.renderActions()}
        onDismiss = {()=>{history.push('/')}}
    />
       );
    }
}

export default EditPostSuccesModal;