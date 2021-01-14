import React,{useState} from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

// Redux Store
import {  showRightSidebarAction,toggleLeftmenu } from "../../store/actions";

// Import menuDropdown
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import logo from "../../assets/images/thanks/logo-thank.png";

//i18n
import { withNamespaces } from 'react-i18next';

const Header = (props) => {

      return (
        <React.Fragment>
        <header id="page-topbar" className="background-header">
          <div className="navbar-header top-header thanks-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logo} alt="" height="35" />
                  </span>
                  <span className="logo-lg">
                    <img src={logo} alt="" height="65" />
                  </span>
                </Link>

              </div>

            </div>

            <div className="d-flex">

              <NotificationDropdown />

              <ProfileMenu />

            </div>
          </div>
        </header>
      </React.Fragment>
      );
    }

const mapStatetoProps = state => {
  const { layoutType,showRightSidebar, leftMenu } = state.Layout;
  return { layoutType,showRightSidebar,leftMenu };
};

export default connect(mapStatetoProps, { showRightSidebarAction,toggleLeftmenu })(withNamespaces()(Header));


