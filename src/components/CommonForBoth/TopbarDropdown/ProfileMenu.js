import React, {useState} from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import {logoutUser} from "../../../store/auth/login/actions";


const ProfileMenu = (props) => {
    const [menu, setMenu] = useState(false);

    return (
        <React.Fragment>
            <Dropdown
                isOpen={menu}
                toggle={() => setMenu(!menu)}
                className="d-inline-block"
            >
                <DropdownToggle
                    className="btn header-item waves-effect"
                    id="page-header-user-dropdown"
                    tag="button"
                >
                    <img
                        className="rounded-circle header-profile-user"
                        src={props.authUser.user.avatar}
                        alt="Header Avatar"
                    />
                    <span className="d-none d-xl-inline-block ml-2 mr-1">{props.authUser.user.user_name}</span>
                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block"/>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem tag="a" href="/profile">
                        <i className="bx bx-user font-size-16 align-middle mr-1"/>
                        {props.t("Trang cá nhân")}{" "}
                    </DropdownItem>
                    <DropdownItem tag="a" href="/edit-profile">
                        <i className="bx bx-edit font-size-17 align-middle mr-1"/>
                        {props.t("Chỉnh sửa thông tin cá nhân")}
                    </DropdownItem>
                    <div className="dropdown-divider"></div>
                    <button onClick={ () => {props.dispatch(logoutUser(true))} } className="dropdown-item">
                        <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"/>
                        <span>{props.t("Đăng xuất")}</span>
                    </button>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

const mapStatetoProps = state => {
    const { error, success } = state.Profile
    const { authUser } = state.Login
    return { error, success, authUser }
}

export default withRouter(connect(mapStatetoProps)(withNamespaces()(ProfileMenu)))