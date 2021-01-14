import React from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Container,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NewProfile() {
  // const { Option } = Select;
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="body-profile">
      <Container fluid={true}>
        <Row>
          <Col>
            <Card className="card-profile" style={{ border: "none" }}>
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
                        <select className="form-control width60">
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
                        <select className="form-control width60">
                          <option>Supporter</option>
                          <option>Saler</option>
                          <option>Tester</option>
                          <option>Devenloper</option>
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
                      <svg
                        width="13em"
                        height="2em"
                        viewBox="0 0 16 16"
                        className="bi bi-camera bi-10x "
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                        />
                        <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                      </svg>
                    </div>
                  </div>
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
                      maxlength="250"
                      placeholder="Giới thiệu về bản thân (250 ký tự)."
                    ></textarea>
                  </div>
                </div>
                <div className="div-btn-profile">
                  <Button className="btn-profile" color="primary" type="submit">
                    Tiếp tục
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewProfile;
