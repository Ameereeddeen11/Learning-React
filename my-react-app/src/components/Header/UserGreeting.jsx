import { Navbar } from "react-bootstrap"
import PropTypes from "prop-types"

function UserLoggedIn(props) {
    const Welcome =     <Navbar.Text>
                            Signed in as: <a href="#login">{props.name}</a>
                        </Navbar.Text>

    const isNotLoggedIn =   <Navbar.Text>
                                <a href="#login">Sign In</a>
                            </Navbar.Text>

    return (props.isLoggedIn ? Welcome : isNotLoggedIn)
}

UserLoggedIn.proptype = {
    name: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

export default UserLoggedIn