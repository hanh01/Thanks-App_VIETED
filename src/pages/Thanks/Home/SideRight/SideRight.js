import React, {useEffect, useState} from 'react';
import get from "lodash/get";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Media,
    Card,
    CardBody, CardTitle
} from "reactstrap";

//Import Scrollbar
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

//Import scss
import '../../../../assets/scss/custom/pages/thanks/post-thanks.scss';

//Import Images
import {connect} from "react-redux";
import {getAllPartner} from "../../../../store/user/actions";


const SideRight = (props) => {

    useEffect(() => {
        props.dispatch(getAllPartner());
    },[]);

    console.log(props.partners);

    //Search members
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    // useEffect(() => {
    //     const results = props.partners.filter(chat =>
    //         chat.name.toLowerCase().includes(searchTerm)
    //     );
    //     setSearchResults(results);
    // }, [searchTerm]);

    return (
        <React.Fragment>
            <Row>
                <Col lg="12">
                    <div>
                        <Card>
                            <CardBody>
                                <CardTitle>Đồng nghiệp của tôi</CardTitle>
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm..."
                                    value={searchTerm}
                                    onChange={handleChange}
                                    className="mb-3 search-partner"
                                />
                                <ul className="list-unstyled chat-list">
                                    <PerfectScrollbar className="side-right" style={{ height: "650px" }}>
                                        {
                                            props.partners.map((chat) =>
                                                <li className={chat.isActive ? "active" : ""}>
                                                    <Link to="/personal-detail">
                                                        <Media>
                                                            <div className="align-self-center mr-3">
                                                                <img src={chat.avatar} className="rounded-circle avatar-xs" alt="" />
                                                            </div>

                                                            <Media className="overflow-hidden" body>
                                                                <h5 className="text-truncate font-size-14 mb-1">{chat.name}</h5>
                                                                <p className="text-truncate mb-0">{chat.email}</p>
                                                            </Media>
                                                        </Media>
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    </PerfectScrollbar>
                                </ul>

                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => state.Partner;

export default connect(mapStateToProps)(SideRight);