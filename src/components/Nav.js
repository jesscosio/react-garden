/**
 * Usage:
 * In component file include component with name, value, path
 * i.e.
 *    <Nav tab={{name:"Blog",value:"blog", path:"/blog"}}/>
 */
import React from "react";
import { SelectActiveTab } from '../actions';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Nav extends React.Component {
    componentDidMount() {
        this.props.SelectActiveTab(this.props.tab);
    }
  renderedTabs = this.props.tabs.map( tab => {
    return (
      <Link
        key={tab.value}
        to={tab.path}
        className={`${tab.value === this.props.tab.value ? "active" : ""} item`}
      >
        {tab.name} 
      </Link>
    );
  });

  render() {
      if(!this.props.tabs) {
          return <div>Loading...</div>;
      }
    return <div style={{backgroundColor:'#DADED4',paddingTop:'10px', fontFamily: 'Raleway, cursive'}} 
    className="ui top attached tabular menu">{this.renderedTabs}</div>;
  }
};

const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab,
        tabs: state.tabs
    };
};

export default connect(mapStateToProps,{SelectActiveTab})(Nav);
