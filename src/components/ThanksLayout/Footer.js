import React from 'react';
import { Container, Row, Col } from "reactstrap";

//Import scss
import '../../assets/scss/custom/pages/thanks/post-thanks.scss';

const Footer = (props) => {
  return (
   <React.Fragment>
            <footer className="footer thanks-footer">
                <Container fluid={true}>
                    <Row>
                        <Col md={6}>
                            {new Date().getFullYear()} © Thanks.
                        </Col>
                        <Col md={6}>
                            <div className="text-sm-right d-none d-sm-block">
                                Design & Develop by VietED
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
  );
}

export default Footer;