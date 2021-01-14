import React from 'react';

import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import {Table} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import avatar2 from "../../../../assets/images/users/avatar-1.jpg";
//Import Breadcrumb

const thanks = [
    { name: "Trần Thanh Tùng", department: "dev", thanks:10},
    { name: "Trần Thanh Tùng", department: "dev", thanks:10},
    { name: "Trần Thanh Tùng", department: "dev", thanks:10},
    { name: "Trần Thanh Tùng", department: "dev", thanks:10},
    { name: "Trần Thanh Tùng", department: "dev", thanks:10},
];

const SideLeft = (props) => {

    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <CardBody>
                            <CardTitle>Xếp hạng cảm ơn</CardTitle>
                            <CardSubtitle className="mb-3">
                                Số lời cảm ơn trong một (Quý)
                            </CardSubtitle>

                            <div className="table-responsive">
                                <Table className="table mb-0">
                                    <thead>
                                    </thead>
                                    <tbody>
                                    {thanks.map(function(thank, i){
                                        return(
                                            <tr>
                                                <td><img className="d-flex mr-3 rounded-circle avatar-xs" src={avatar2} /></td>
                                                <td>{thank.name}</td>
                                                <td>{thank.department}</td>
                                                <td>{thank.thanks}</td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </Table>
                            </div>
                            <CardTitle className="mt-5">Tổng số Thanks: 50</CardTitle>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default SideLeft;