import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";

function Cards(props) {
    return (
        <>
            <Col>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={props.img}/>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            {props.age}<br/>
                            {props.student ? 'Student' : 'Not Student'}
                        </Card.Text>
                        <Button variant="primary">More About</Button>
                    </Card.Body>
                </Card>
            </Col>
            <br />
        </>
    );
}

Cards.proptype = {
    name: PropTypes.string,
    age: PropTypes.number,
    student: PropTypes.bool,
    img: PropTypes.string,
}

Cards.defualtProps = {
    name: 'Name',
    age: 0,
    student: false,
    img: 'https://via.placeholder.com/150'
}

export default Cards;