import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";

//Import scss
import '../../../assets/scss/custom/pages/thanks/post-thanks.scss';

//Import images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

//i18n
import { withNamespaces } from 'react-i18next';


const NotificationDropdown = (props) => {

  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  return (
      <>
        <Dropdown
            isOpen={menu}
            toggle={() => setMenu(!menu)}
            className="dropdown d-inline-block"
            tag="li"
        >
          <DropdownToggle
              className="btn header-item noti-icon waves-effect"
              tag="button" id="page-header-notifications-dropdown">
            <i className="bx bx-bell bx-tada"></i>
            <span className="badge badge-danger badge-pill">2</span>
          </DropdownToggle>

          <DropdownMenu className="dropdown-menu dropdown-menu-lg dropdown-thanks-notification p-0" right>
            <div className="p-3">
              <Row className="align-items-center">
                <Col>
                  <h6 className="m-0"> {props.t('Thông báo')} </h6>
                </Col>
                <div className="col-auto">
                  <a href="#!" className="small"> Xem hết</a>
                </div>
              </Row>
            </div>

            <SimpleBar style={{ height: "500px"}}>
              <Link to="/thanks-detail" className="text-reset notification-item">
                <div className="media">
                  <img src={avatar3} className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                  <div className="media-body">
                    <div className="menu-notification">
                      <h6 className="mt-0 mb-0">Trần Thanh Tùng</h6>
                      <div className="font-size-11 text-muted">
                        <p className="mb-0 mr-2 ml-2">{props.t('đã gửi lời cảm ơn tới')}</p>
                      </div>
                      <h6 className="mt-0 mb-0">bạn</h6>
                    </div>
                    <div className="font-size-12 text-muted">
                      <p className="mb-0"><i className="mdi mdi-clock-outline"></i>{props.t('(thời gian)')} </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/thanks-detail" className="text-reset notification-item">
                <div className="media">
                  <img src={avatar4} className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                  <div className="media-body">
                    <div className="menu-notification">
                      <h6 className="mt-0 mb-0">Trần Thanh Tùng</h6>
                      <div className="font-size-11 text-muted">
                        <p className="mb-0 mr-2 ml-2">{props.t('đã gửi lời cảm ơn tới')}</p>
                      </div>
                      <h6 className="mt-0 mb-0">bạn</h6>
                    </div>
                    <div className="font-size-12 text-muted">
                      <p className="mb-0"><i className="mdi mdi-clock-outline"></i>{props.t('(thời gian)')} </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/thanks-detail" className="text-reset notification-item">
                <div className="media">
                  <img src={avatar3} className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                  <div className="media-body">
                    <div className="menu-notification">
                      <h6 className="mt-0 mb-0">VietED</h6>
                      <div className="font-size-11 text-muted">
                        <p className="mb-0 mr-2 ml-2">{props.t('đã đăng một tin mới.')}</p>
                      </div>
                    </div>
                    <div className="font-size-12 text-muted">
                      <p className="mb-0"><i className="mdi mdi-clock-outline"></i>{props.t('(thời gian)')} </p>
                    </div>
                  </div>
                </div>
              </Link>
            </SimpleBar>
            <div className="p-2 border-top">
              <Link
                  className="btn btn-sm btn-link font-size-14 btn-block text-center"
                  to="#"
              >
                {" "}
                {props.t('Xem hết')}{" "}
              </Link>
            </div>
          </DropdownMenu>
        </Dropdown>
      </>
  );
}

export default withNamespaces()(NotificationDropdown);