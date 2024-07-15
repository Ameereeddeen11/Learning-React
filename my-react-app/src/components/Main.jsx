import { useState } from "react";

function Main() {
    const list = [
        { id: 1, name: 'Amir' },
        { id: 2, name: 'Dan' },
        { id: 3, name: 'Patrik' },
        { id: 4, name: 'Fanda' },
    ]

    const [selectedItem, setSelectedItem] = useState(-1) // hook

    const validation = list.length === 0 && <p>There are no items in the list</p>

    return (
        <>
            {validation}
            <ul className="list-group">
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
            </ul>
        </>
    );
}

export default Main;