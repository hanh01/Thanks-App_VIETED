import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Media } from "reactstrap";
import NewFeed from "./NewFeed/NewFeed";
import PostThank from "./PostThank/PostThank";
import SideRight from "./SideRight/SideRight";
import SideLeft from "./SideLeft/SideLeft";

//Import scss
import '../../../assets/scss/custom/pages/thanks/post-thanks.scss';
import {Dropdown, DropdownMenu, DropdownToggle} from "reactstrap/es";

const HomePage = (props) => {
    const [singlebtn, setSinglebtn] = useState(false);
    const [singlebtn1, setSinglebtn1] = useState(false);

    return (
        <React.Fragment>
            <div className="page-content home-page">
                <Container fluid className="container-thanks-home-page">

                    <Row>
                        <div align='center' className="col-lg-3 col-md-0">
                            <div className="side-content">
                                <SideLeft />
                            </div>
                        </div>

                        <div className="email-rightbar news-feed col-lg-6 col-md-12">
                            <PostThank/>
                            <Row className="drop-button">
                                <Col align="center" className="col-6 button-left">
                                    <Dropdown
                                        isOpen={singlebtn}
                                        toggle={() => setSinglebtn(!singlebtn)}
                                    >
                                        <DropdownToggle className="btn btn-secondary" caret>
                                            Xếp hạng cảm ơn{" "}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <SideLeft/>
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Col align="center" className="col-6 button-right">
                                    <Dropdown
                                        isOpen={singlebtn1}
                                        toggle={() => setSinglebtn1(!singlebtn1)}
                                    >
                                        <DropdownToggle className="btn btn-secondary" caret>
                                            Đồng nghiệp của tôi{" "}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <SideRight/>
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <NewFeed/>
                        </div>

                        <div align='center' className="col-lg-3 col-md-0">
                            <div className="side-content">
                                <SideRight/>
                            </div>
                        </div>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
}

export default HomePage;