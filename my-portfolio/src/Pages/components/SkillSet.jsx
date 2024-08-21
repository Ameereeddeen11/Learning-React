import { Col, Card, ProgressBar } from "react-bootstrap";

function SkillSet(props) {
    const level = props.skillset.level
    return (
        <>
            <Col>
                <Card bg="dark" key={props.skillset.name} text="white" style={{width: '15em'}} className="my-3 p-4">
                    <Card.Img variant="top" src={"https://skillicons.dev/icons?i="+props.skillset.img}/>
                    <Card.Body>
                        <Card.Title>{ props.skillset.name }</Card.Title>
                        <Card.Text>
                            <ProgressBar now={level} label={level + "%"}/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default SkillSet;