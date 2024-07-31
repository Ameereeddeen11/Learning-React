import { useState } from "react";
import Cards from "./Cards.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Button, Col } from "react-bootstrap";
import profile_pic_1 from "./img/1.png";
import profile_pic_2 from "./img/2.jpg";
import profile_pic_3 from "./img/3.png";
import { Card } from "react-bootstrap";

const journey = [
    { id: 1, name: 'List', link: 'list/', element: "<Lists/>"},
    { id: 2, name: 'Grid', link: 'grid/', element: "<Grid/>"},
    { id: 3, name: 'Card', link: 'card/', element: "<Cards/>"},
    { id: 4, name: 'Conditional rendering', link: 'conditional-rendering/', element: "<conditionalRendering/>"},
    { id: 5, name: 'Button', link: 'button/', element: "<Button/>"},
    { id: 6, name: 'Event', link: 'event/', element: "<Event/>"},
    { id: 7, name: 'Hook', link: 'hook/', element: "<Hook/>"},
  ]

function Main() {
    const list = [
        { id: 1, name: 'Amir', age: 19, student: true, img: profile_pic_1 },
        { id: 2, name: 'Dan', age: 18, student: true, img: profile_pic_2 },
        { id: 3, name: 'Fanda', age: 21, student: false, img: profile_pic_3 },
        { id: 4, name: 'John', age: 17, student: false, img: profile_pic_1 },
    ]

    const [selectedItem, setSelectedItem] = useState(-1) // hook

    const validation = list.length === 0 && <p>There are no items in the list</p>

    // list.sort((a, b) => a.name.localeCompare(b.name))
    list.sort((a, b) => a.age - b.age)

    const adult = list.filter(item => item.age >= 18 && item.student)

    const listItem = adult.map(item => <li key={item.id}>{item.name}</li>)

    return (
        <>
            <Container className="my-5">
                <Row>
                    {journey.map((item) => (
                        <Col>
                            <Card style={{ width: '18rem'}} className="my-3">
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        This is a card with a button
                                    </Card.Text>
                                    <a href={item.link}><Button>Link to it</Button></a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            {validation}
            <ul>
                {list.map((item, index) => (
                    <li 
                        className={selectedItem === index ? 'list-groud-item active' : 'list-group-item'}
                        key={item.id} 
                        aria-current={selectedItem === index ? 'true' : 'false'}
                        onClick={() => {setSelectedItem(index)}}
                    >
                        {item.name}
                    </li>
                ))}
            </ul> <br />

            
            <h4>Adult student</h4>
            <ul>
                {listItem}
            </ul>

            <Container>
                <Row>
                    {list.map((item) => (
                        <Cards name={item.name} age={item.age} student={item.student} img={item.img}/>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Main;