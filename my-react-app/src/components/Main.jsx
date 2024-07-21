import { useState } from "react";
import Cards from "./Cards.jsx";
import Cantainer from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import profile_pic_1 from "../assets/1.png";
import profile_pic_2 from "../assets/2.jpg";
import profile_pic_3 from "../assets/3.png";

function Main() {
    const list = [
        { id: 1, name: 'Amir', age: 19, student: true, img: profile_pic_1 },
        { id: 2, name: 'Dan', age: 18, student: true, img: profile_pic_2 },
        { id: 3, name: 'Fanda', age: 21, student: true, img: profile_pic_3 },
    ]

    const [selectedItem, setSelectedItem] = useState(-1) // hook

    const validation = list.length === 0 && <p>There are no items in the list</p>

    return (
        <>
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
            <Cantainer>
                <Row>
                    {list.map((item) => (
                        <Cards name={item.name} age={item.age} student={item.student} img={item.img}/>
                    ))}
                </Row>
            </Cantainer>
        </>
    );
}

export default Main;