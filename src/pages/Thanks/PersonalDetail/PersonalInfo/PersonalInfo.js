import React, { useState , useEffect } from 'react';
import { Container, Row, Col, Card,Alert, CardBody,Media, Button } from "reactstrap";

//Import scss
import "../../../../assets/scss/custom/pages/thanks/post-thanks.scss";

import avatar from '../../../../assets/images/users/avatar-1.jpg';

const PersonalInfo = (props) => {

    return (
        <React.Fragment>
            <div className="page-content personal-info" >
                <Row>
                    <Col lg="12">

                        <Card>
                            <CardBody>
                                <div className="detail-info">
                                    <div align="center" className="col-5">
                                        <img src={avatar} alt="" className="rounded-circle" height="200"/>
                                    </div>
                                    <div className="align-self-center col-7">
                                        <div className="text-muted">
                                            <h2>Trần Thanh Tùng</h2>
                                            <p className="mb-1">tranthanhtung110699@gmail.com</p>
                                            <div className="text-muted detail-info">
                                                <h5>Phòng ban : </h5><div className="ml-3 mb-0">Dev</div>
                                            </div>
                                            <div className="text-muted detail-info">
                                                <h5>Giới tính : </h5><div className="ml-3 mb-0">Nam</div>
                                            </div>
                                            <div className="text-muted detail-info">
                                                <h5>Ngày sinh : </h5><div className="ml-3 mb-0">11/06/1999</div>
                                            </div>
                                            <div className="text-muted detail-info">
                                                <h5>Quê quán : </h5><div className="ml-3 mb-0">Hà Nội</div>
                                            </div>
                                            <h5>Mô tả : </h5>
                                            <div className="text-muted detail-info">
                                                <div className="ml-3 mb-0">Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus convallis.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default PersonalInfo;