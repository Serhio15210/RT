import React from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import Footer from "../Footer/Footer";

const Tabs = () => {
    return (
        <Container>
            <Tab.Container id="ledt-tabs-example" defaultActiveKeys="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Global</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Own</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <img src="/"/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img src="/"/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default Tabs;