import { Col, Container, Row } from "react-bootstrap";

const Index = () => {
    ////return 'Hello from dashboard/index.jsx'

    return (
        <Container>
            <Row>
                <Col xs="12" className="bg-white py3 my-3 rounded-2 shadow-sm">
                    <Row>
                        <Col>
                            <h1>Login </h1>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Index;
