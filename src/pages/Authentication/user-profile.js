import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Card, Alert, CardBody, Media, Button} from "reactstrap";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import avatar from '../../assets/images/users/avatar-1.jpg';
import {editProfile} from '../../store/actions';
import BackGround from '../../assets/images/thanks/avt.PNG';
import img2 from "../../assets/images/small/img-2.jpg";
import {CardImg} from "reactstrap/es";
import "../../assets/scss/custom/pages/Authentication/user-profile.scss"

const UserProfile = (props) => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [idx, setIdx] = useState(1);

    const sectionStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: `url(${BackGround})`,
        backgroundRepeat: 'no-repeat',
    };

    useEffect(() => {
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser"));
            if (process.env.REACT_APP_DEFAULTAUTH === 'firebase') {
                setName(obj.displayName);
                setEmail(obj.email);
                setIdx(obj.uid);
            } else if ((process.env.REACT_APP_DEFAULTAUTH === 'fake') || (process.env.REACT_APP_DEFAULTAUTH === 'jwt')) {
                setName(obj.username);
                setEmail(obj.email);
                setIdx(obj.uid);
            }
        }
    }, [props.success]);

    function handleValidSubmit(event, values) {
        props.editProfile(values);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container>
                    <Row>
                        <Col lg="12">
                            {props.error && props.error ? <Alert color="danger">{props.error}</Alert> : null}
                            {props.success && props.success ? <Alert color="success">{props.success}</Alert> : null}

                            <Card style={sectionStyle}>
                                <CardBody>
                                    <div className="text-center img-avt">
                                        <img src={avatar} alt="" className="rounded-circle" height="190" style={{}}/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <h4 className="text-center mt-3 mb-4">DO HONG HANH</h4>

                    <Row>
                        <Col lg="4">
                            <Card>
                                <CardBody>
                                    <h5 className="mb-4">Thông tin cá nhân</h5>
                                    <h6>Họ và tên : Đỗ THị Hồng Hạnh</h6>
                                    <h6>Ngày sinh : 21/01/2020</h6>
                                    <h6>Phòng ban : Sản phẩm</h6>
                                    <h6>Giới thiệu bản thân : Là một người vui vẻ ... &ensp;
                                        <u>Xem thêm</u></h6>
                                    <h6>Sở thich : Nghe nhạc</h6>
                                    <div className="text-center mt-4">
                                        <Button type="submit" color="danger" href='/edit-profile'>Chỉnh sửa thông
                                            tin</Button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <h5 className="mb-4">Ảnh của bạn </h5>
                                    <Row>
                                        <Col lg="4">
                                            <img src={avatar} alt="" className="mb-4 img-user"/>
                                        </Col>
                                        <Col lg="4">
                                            <img src={avatar} alt="" className="mb-4 img-user"/>
                                        </Col>
                                        <Col lg="4">
                                            <img src={avatar} alt="" className="mb-4 img-user"/>
                                        </Col>
                                        <Col lg="4">
                                            <img src={avatar} alt="" className="mb-4 img-user"/>
                                        </Col>
                                        <Col lg="4">
                                            <img src={avatar} alt="" className="mb-4 img-user"/>
                                        </Col>
                                    </Row>
                                    <a className="float-right see-more-picture" href="/"><u>Xem thêm hình ảnh</u></a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="8">
                            <Card>
                                <CardBody>
                                    <Media className="mb-4">
                                        <img className="d-flex mr-3 rounded-circle avatar-sm" src={avatar}/>
                                        <Media body>
                                            <div className="thank-people">
                                                <h5 className="font-size-14 mt-1">Humberto D. Champion</h5>
                                                <p className="font-size-5 m-1"> đã gửi lời cảm ơn tới </p>
                                                <h5 className="font-size-14 mt-1">Trần Thanh Tùng</h5>
                                            </div>
                                            <small className="text-muted">(thời gian)</small>
                                        </Media>
                                    </Media>

                                    <h4 className="mt-0 font-size-16">This Week's Top Stories</h4>

                                    <p>Dear Lorem Ipsum,</p>
                                    <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu
                                        leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci
                                        varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis
                                        ac velit maximus convallis.
                                    </p>
                                    <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu
                                        venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum
                                        orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum,
                                        ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
                                    <p>Sincerly,</p>
                                    <hr/>
                                    <CardImg className="img-fluid" src={img2}/>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <Media className="mb-4">
                                        <img className="d-flex mr-3 rounded-circle avatar-sm" src={avatar}/>
                                        <Media body>
                                            <div className="thank-people">
                                                <h5 className="font-size-14 mt-1">Humberto D. Champion</h5>
                                                <p className="font-size-5 m-1"> đã gửi lời cảm ơn tới </p>
                                                <h5 className="font-size-14 mt-1">Trần Thanh Tùng</h5>
                                            </div>
                                            <small className="text-muted">(thời gian)</small>
                                        </Media>
                                    </Media>

                                    <h4 className="mt-0 font-size-16">This Week's Top Stories</h4>

                                    <p>Dear Lorem Ipsum,</p>
                                    <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu
                                        leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci
                                        varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis
                                        ac velit maximus convallis.
                                    </p>
                                    <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu
                                        venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum
                                        orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum,
                                        ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
                                    <p>Sincerly,</p>
                                    <hr/>
                                    <CardImg className="img-fluid" src={img2}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

const mapStatetoProps = state => {
    const {error, success} = state.Profile;
    return {error, success};
}

export default withRouter(connect(mapStatetoProps, {editProfile})(UserProfile));

