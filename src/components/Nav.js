/**
 * Usage:
 * In component file include component with name, value, path
 * i.e.
 *    <Nav tab={{name:"Blog",value:"blog", path:"/blog"}}/>
 */
import React from "react";
import { SelectActiveTab } from "../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/app.css";

class Nav extends React.Component {
  state = {
    menuToggle: false,
  };

  componentDidMount() {
    this.props.SelectActiveTab(this.props.tab);
  }

  renderedTabs = this.props.tabs.map((tab) => {
    return (
      <li className="nav-item" key={tab.value}>
        <Link
          to={tab.path}
          className={`${
            tab.value === this.props.tab.value ? "active" : ""
          } nav-link`}
        >
          {tab.name}
        </Link>
      </li>
    );
  });

  render() {
    if (!this.props.tabs) {
      return <div>Loading...</div>;
    }
    // return <div style={{backgroundColor:'#DADED4',paddingTop:'10px', fontFamily: 'Raleway, cursive'}}
    // className="ui top attached tabular menu">{this.renderedTabs}</div>;
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light" style={{position: "absolute", zIndex: "1050", width: "100vw"}}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"
            onClick={(ev)=>{ev.preventDefault(); this.setState({menuToggle: !this.state.menuToggle});}}></span>
          </button>
          <div className={`collapse navbar-collapse ${this.state.menuToggle ? 'show': ''}`} id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {this.renderedTabs}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeTab: state.activeTab,
    tabs: state.tabs,
  };
};

export default connect(mapStateToProps, { SelectActiveTab })(Nav);
