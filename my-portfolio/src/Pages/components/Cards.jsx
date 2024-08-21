import { Col, Card, ProgressBar } from "react-bootstrap";

function Cards(props) {
    const level = props.skillset.level
    const img = props.skillset.img
    const skills = <ProgressBar now={level} label={level + "%"} style={{height: '20px'}} />
    const text = <Card.Text>{props.skillset.text}</Card.Text>
    const imgSrc = "https://skillicons.dev/icons?i="+img

    return (
        <>
            <Col key={props.skillset.name}>
                <Card 
                    bg="dark" 
                    key={props.skillset.name} 
                    text="white" 
                    style={{
                        width: '15em',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                        overflow: 'hidden',
                    }} 
                    className="my-3 p-4"
                >
                    <Card.Img variant="top" src={img ? imgSrc : null}/>
                    <Card.Body>
                        <Card.Title>{ props.skillset.name }</Card.Title>
                        {level ? skills : null}
                        {props.skillset.text ? text : null}
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default Cards;