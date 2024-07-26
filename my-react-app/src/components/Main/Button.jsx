import { Button } from "react-bootstrap"


function Buttons() {
    const handleClick = () => console.log('Hiii!')

    const handleClick2 = (name) => console.log(`Hii! ${name}`)

    return(
        <>
            <Button variant="primary" onClick={() => handleClick2("Amir")}>More About</Button>
        </>
    )
}

export default Buttons;