import React from 'react';
import {Link} from "react-router-dom";
import {Row, Col, BreadcrumbItem} from "reactstrap";

const Breadcrumb = (props) => {
    return (
        <Row>
            <Col xs="12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0 font-size-18">{props.title}</h4>
                </div>
            </Col>
        </Row>
    );
}

export default Breadcrumb;