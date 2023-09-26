import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom';

function Header(){
    const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate("/register")
    }

    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">KarzaLo</Navbar.Brand>
                <Nav variant="underline" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={navigateToRegister}>Register</Nav.Link>
                </Nav.Item>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;