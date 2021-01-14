import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Card, CardBody, Media} from "reactstrap";
import upimage from "../../../../assets/images/thanks/upload.png";

//Import scss
import "../../../../assets/scss/custom/pages/thanks/post-thanks.scss";

//Import Image
import avatar2 from "../../../../assets/images/users/avatar-1.jpg";

//Import Breadcrumb
import {Button, Col, FormGroup, Input, Label, Modal, Row} from "reactstrap/es";
import Select from "react-select";
import {Form} from "redux-form";
import Dropzone from "react-dropzone";
import logo from "../../../../assets/images/thanks/logo-thank.png";

const optionGroup = [
    {label: "Trong công việc", value: "inwork"},
    {label: "Ngoài công việc", value: "outwork"},
    {label: "Thông tin mới", value: "newinfo"}
];

const optionReceiver = [
    {label: "Trần Thanh Tùng", value: "ttt"},
    {label: "Đặng Thế Hưng", value: "dth"},
    {label: "Đỗ Hồng Hạnh", value: "dhh"},
    {label: "Nguyễn Duy Sinh", value: "nds"},
    {label: "Bùi Hoàng Dương", value: "bhd"}
];

const PostThank = (props) => {

    const [modal_standard, setmodal_standard] = useState(false);

    function removeBodyCss() {
        document.body.classList.add("no_padding");
    }

    function tog_standard() {
        setmodal_standard(!modal_standard);
        removeBodyCss();
    }

    //Modal type of thanks
    const [selectedGroup, setselectedGroup] = useState(null);

    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }

    //Modal Receiver people
    const [selectedReceiver, setselectedReceiver] = useState(null);

    function handleSelectReceiver(selectedReceiver) {
        setselectedReceiver(selectedReceiver);
    }

    //Modal content Thanks
    const [textareabadge, settextareabadge] = useState(0);
    const [textcount, settextcount] = useState(0);

    function textareachange(event) {
        var count = event.target.value.length;
        if (count > 0) {
            settextareabadge(true);
        } else {
            settextareabadge(false);
        }
        settextcount(event.target.value.length);
    }

    //Modal upload image
    const [selectedFiles, setselectedFiles] = useState([]);

    function handleAcceptedFiles(files) {
        files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: formatBytes(file.size)
        }));

        setselectedFiles(files);
    }

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <Media>
                        <img className="d-flex mr-3 rounded-circle avatar-xs" src={avatar2} />
                        <Media body>
                            <div className="thank-people">
                                <Input
                                    type="text"
                                    onClick={() => {
                                        tog_standard()
                                    }}
                                    placeholder="Gửi lời cảm ơn tới đồng nghiệp của bạn..."
                                    className="form-control mt-0"
                                    data-toggle="modal"
                                    data-target=".bs-example-modal-lg"
                                    readOnly={true}
                                />
                            </div>
                        </Media>
                    </Media>

                </CardBody>
            </Card>
            <Modal
                size="lg"
                isOpen={modal_standard}
                toggle={() => {
                    tog_standard()
                }}
                className="pt-5"
            >
                <div className="modal-header">
                    <h5
                        className="modal-title mt-0"
                        id="myLargeModalLabel"
                    >
                        Gửi lời cảm ơn tới đồng nghiệp của bạn...
                    </h5>
                    <button
                        onClick={() => {
                            setmodal_standard(false)
                        }}
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form className="mt-3 mb-3 ml-4 mr-4">
                        <Row>
                            <Col lg="12">
                                <FormGroup className="select2-container">
                                    <Label>Kiểu bài cảm ơn</Label>
                                    <Select
                                        value={selectedGroup}
                                        onChange={() => {
                                            handleSelectGroup()
                                        }}
                                        options={optionGroup}
                                        classNamePrefix="select2-selection"
                                    />

                                </FormGroup>
                            </Col>
                            <Col lg="12">
                                <FormGroup className="select2-container">
                                    <Label>Người nhận</Label>
                                    <Select
                                        value={selectedReceiver}
                                        onChange={() => {
                                            handleSelectReceiver()
                                        }}
                                        options={optionReceiver}
                                        classNamePrefix="select2-selection"
                                    />

                                </FormGroup>
                            </Col>
                            <Col lg="12">
                                <div className="mt-3">
                                    <Label>Nội dung</Label>

                                    <Input
                                        type="textarea"
                                        id="textarea"
                                        onChange={(e) => {
                                            textareachange(e)
                                        }}
                                        maxLength="225"
                                        rows="5"
                                        placeholder="Bạn chỉ được nhập giới hạn không quá 500 ký tự."
                                    />
                                    {textareabadge ? (
                                        <span className="badgecount badge badge-success">
													{" "}
                                            {textcount} / 500{" "}
												</span>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg="12">
                                <div className="mt-3">
                                    <Label>Thêm ảnh</Label>
                                    <Dropzone
                                        onDrop={(acceptedFiles) => {
                                            handleAcceptedFiles(acceptedFiles)
                                        }}
                                    >
                                        {({getRootProps, getInputProps}) => (
                                            <div className="dropzone">
                                                <div
                                                    className="dz-message needsclick"
                                                    {...getRootProps()}
                                                >
                                                    <input {...getInputProps()} />
                                                    <div className="dz-message needsclick">
                                                        <div className="mb-2">
                                                            <img className="display-3 text-muted bx up-image"
                                                                 src={upimage} height="50"/>
                                                        </div>
                                                        <h4>Drop files here or click to upload.</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Dropzone>
                                    <div
                                        className="dropzone-previews mt-2"
                                        id="file-previews"
                                    >
                                        {selectedFiles.map((f, i) => {
                                            return (
                                                <Card
                                                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                    key={i + "-file"}
                                                >
                                                    <div className="p-2">
                                                        <Row className="align-items-center">
                                                            <Col className="col-auto">
                                                                <img
                                                                    data-dz-thumbnail=""
                                                                    height="80"
                                                                    className="avatar-sm rounded bg-light"
                                                                    alt={f.name}
                                                                    src={f.preview}
                                                                />
                                                            </Col>
                                                            <Col>
                                                                <Link
                                                                    to="#"
                                                                    className="text-muted font-weight-bold"
                                                                >
                                                                    {f.name}
                                                                </Link>
                                                                <p className="mb-0">
                                                                    <strong>{f.formattedSize}</strong>
                                                                </p>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Card>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Col>

                            <Col lg="12">
                                <div align="center" className="mt-3">
                                    <Button type="submit" color="primary">Gửi lời cảm ơn</Button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default PostThank;