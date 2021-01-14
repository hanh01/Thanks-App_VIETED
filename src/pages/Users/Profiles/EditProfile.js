import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class EditProfile extends React.Component{
  render() {
    return (
        <React.Fragment>
          <div className="body-profile">
            <Row>
              <Col>
                <Card className="card-profile">
                  <CardBody>
                    <CardTitle className="mb-4">Nhập thông tin cá nhân</CardTitle>
                    <div className="row">
                      <div className="col-xl-8">
                        <div className="form-group row">
                          <label
                              htmlFor="example-text-input"
                              className="col-md-3 col-form-label"
                          >
                            Tên người dùng:
                          </label>
                          <div className="col-md-9">
                            <input className="form-control width60" type="text" />
                          </div>
                        </div>
                        <FormGroup className="form-group row">
                          <Label
                              className="col-md-3
                       col-form-label"
                          >
                            Giới tính:
                          </Label>
                          <div className="col-md-9">
                            <div className="custom-control custom-radio custom-control-inline ">
                              <Input
                                  type="radio"
                                  id="customRadioInline1"
                                  name="customRadioInline1"
                                  className="custom-control-input"
                              />
                              <Label
                                  className="custom-control-label"
                                  htmlFor="customRadioInline1"
                              >
                                Nam
                              </Label>
                            </div>
                            &nbsp;
                            <div className="custom-control custom-radio custom-control-inline">
                              <Input
                                  type="radio"
                                  id="customRadioInline2"
                                  name="customRadioInline1"
                                  className="custom-control-input"
                              />
                              <Label
                                  className="custom-control-label"
                                  htmlFor="customRadioInline2"
                              >
                                Nữ
                              </Label>
                            </div>
                          </div>
                        </FormGroup>
                        <div className="form-group row">
                          <label
                              htmlFor="example-date-input"
                              className="col-md-3
                         col-form-label"
                          >
                            Sinh nhật
                          </label>
                          <div className="col-md-9">
                            <input
                                className="form-control width60"
                                type="date"
                                defaultValue="1993-11-19"
                                id="example-date-input"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                              className="col-md-3
                       col-form-label"
                          >
                            Quê quán
                          </label>
                          <div className="col-md-9">
                            <select className="custom-select width60">
                              <option>HN</option>
                              <option>HCM</option>
                              <option>DN</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                              className="col-md-3
                       col-form-label"
                          >
                            Phòng ban
                          </label>
                          <div className="col-md-9">
                            <select className="custom-select width60">
                              <option>Support</option>
                              <option>Sale</option>
                              <option>Test</option>
                              <option>Devenlop</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="img-avatar col-xl-4">
                        <img
                            className="rounded-circle img-thumbnail img-profile"
                            src="https://www.w3schools.com/howto/img_avatar.png"
                        ></img>
                        <div className="btn-img-profile">
                          <i className="fas fa-camera fa-3x" />
                        </div>
                      </div>
                      <input type="file" style={{display : "none"}}></input>
                    </div>

                    <div className="form-group row">
                      <label
                          htmlFor="example-tel-input"
                          className="col-md-2 col-form-label"
                      >
                        Giới thiệu:
                      </label>
                      <div className="col-md-10">
                      <textarea
                          className="introduce-profile"
                          type="tel"
                          rows="4"
                          maxLength="250"
                          placeholder="Giới thiệu về bản thân (250 ký tự)."
                      ></textarea>
                      </div>
                    </div>
                    <div className="div-btn-profile">
                      <Button
                          className="btn-profile"
                          color="primary"
                          type="submit"
                      >
                        Cập nhật
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </React.Fragment>
    );
  }
}

export default EditProfile;
