import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

function SkillSet(props) {
    return (
        <>
            <Col>
                <Card bg='primary' key={props.skillset.name} text="white" style={{width: '18em'}} className="my-3">
                    <Card.Body>
                        <Card.Title>{ props.skillset.name }</Card.Title>
                        <Card.Text>
                            { props.skillset.level }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default SkillSet;