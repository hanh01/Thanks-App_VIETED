import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Media } from "reactstrap";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

//Import scss
import '../../../assets/scss/custom/pages/thanks/post-thanks.scss';
import ThanksList from "./ThanksList/ThanksList";

const PersonalDetail = (props) => {

    return (
        <React.Fragment>
            <div className="page-content personal-detail-page">
                <Container>

                    <Row>
                        <PersonalInfo/>
                    </Row>
                    <Row>
                        <ThanksList/>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
}

export default PersonalDetail;

