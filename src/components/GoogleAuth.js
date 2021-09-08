import React from 'react';
import { signIn, signOut } from '../actions';
import {connect} from 'react-redux';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '621576344621-m3de1jtjfsc5jmpf6if567ro8ame76ht.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());

                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };
    onSignInClick = ()=>{ this.auth.signIn();};
    onSignOutClick = ()=>{ this.auth.signOut(); };


    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="btn btn-primary btn-sm"><i className="google icon" />Sign Out</button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="btn btn-primary btn-sm"><i className="google icon" />Sign In</button>
            );
       }
    }
    render() {
        return <div style={{position:"absolute", right:0}} >{this.renderAuthButton()}</div>;
    }
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);