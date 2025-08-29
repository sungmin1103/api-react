import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Header from "../component/Header";
import GyongnamTourcultureList from "../component/GyeongnamTourcultureList";

const List=()=>{
    return(
        <Container>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row>
            <Col>
                <h2 className="text-center">경상남도 문화관광 리스트</h2>
            </Col>
            </Row>
            <Row>
                <Col>
                    <GyongnamTourcultureList/>
                </Col>
            </Row>
        </Container>
    );
};

export default List;