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
import "../styles/app.css";

class Nav extends React.Component {
    componentDidMount() {
        this.props.SelectActiveTab(this.props.tab);
    }
  renderedTabs = this.props.tabs.map( tab => {
    return (
      <li className="nav-item">
        <Link
        key={tab.value}
        to={tab.path}
        className={`${tab.value === this.props.tab.value ? "active" : ""} nav-link`}>
        {tab.name} 
      </Link>
      </li>
    );
  });

  render() {
      if(!this.props.tabs) {
          return <div>Loading...</div>;
      }
    // return <div style={{backgroundColor:'#DADED4',paddingTop:'10px', fontFamily: 'Raleway, cursive'}} 
    // className="ui top attached tabular menu">{this.renderedTabs}</div>;
    return (
      <nav class="navbar navbar-expand-md navbar-light bg-light ">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            {this.renderedTabs}
          </ul>
        </div>
      </div>
    </nav>
    );

  }
};

const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab,
        tabs: state.tabs
    };
};

export default connect(mapStateToProps,{SelectActiveTab})(Nav);
