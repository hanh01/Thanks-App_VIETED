import React, { Component } from "react";
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { loginUser } from "../../store/actions";
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/thanks/logo-thank.png";
import "../../assets/scss/custom/pages/Authentication/login.scss";
import { GoogleLogin } from "react-google-login";
import Loading from "./Loading";

const Login = (props) => {
  const clientId = process.env.REACT_APP_CLIENT_ID;

  const responseGoogle = (response) => {
    props.dispatch(loginUser(response, props.history));
  };

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-soft-primary">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Thanks.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="80"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="form-login">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        this.handleValidSubmit(e, v);
                      }}
                    >
                      <div className="form-group">
                        <GoogleLogin
                          className="google-login"
                          clientId={clientId}
                          buttonText="Sign in with Google"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={"single_host_origin"}
                        />
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  © {new Date().getFullYear()} Thanks. Send thanks give love{" "}
                  <i className="mdi mdi-heart text-danger" />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(connect()(Login));
