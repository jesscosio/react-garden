import React from 'react';
import { SelectActiveTab } from '../../actions';
import Nav from '../../components/Nav';
import { connect } from 'react-redux';

class StandardNav extends React.Component {

    componentDidMount() {
        this.props.SelectActiveTab(this.props.tab);
    }

    render() {
        return (
            <div>
                <Nav tabs={this.props.tabs} selected={this.props.activeTab}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab,
        tabs: state.tabs
    };
};

export default connect(mapStateToProps, {SelectActiveTab})(StandardNav);