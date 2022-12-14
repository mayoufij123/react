import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';

function App() {
    return ( <
        div className = "App" >
        <
        h1 > react < /h1> <
        h2 > decembre 2022 < /h2> <
        Navbar bg = "dark"
        variant = "dark" >
        <
        Container >
        <
        Navbar.Brand href = "#home" > Navbar < /Navbar.Brand> <
        Nav className = "me-auto" >
        <
        Nav.Link href = "#home" > Home < /Nav.Link> <
        Nav.Link href = "#features" > Features < /Nav.Link> <
        Nav.Link href = "#pricing" > Pricing < /Nav.Link> < /
        Nav > <
        /Container> < /
        Navbar > <
        Dropdown >
        <
        Dropdown.Toggle variant = "success"
        id = "dropdown-basic" >
        Dropdown Button <
        /Dropdown.Toggle>

        <
        Dropdown.Menu >
        <
        Dropdown.Item href = "#/action-1" > Action < /Dropdown.Item> <
        Dropdown.Item href = "#/action-2" > Another action < /Dropdown.Item> <
        Dropdown.Item href = "#/action-3" > Something
        else </Dropdown.Item> < /
        Dropdown.Menu > <
        /Dropdown>

        <
        Card style = {
            { width: '18rem' }
        } >
        <
        Card.Img variant = "top"
        src = "https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" / >
        <
        Card.Body >
        <
        Card.Title > Card Title < /Card.Title> <
        Card.Text >
        Some quick example text to build on the card title and make up the bulk of the card 's content. < /
        Card.Text > <
        Button variant = "primary" > Go somewhere < /Button> < /
        Card.Body > <
        /Card>

        <
        Form >
        <
        Form.Group className = "mb-3"
        controlId = "exampleForm.ControlInput1" >
        <
        Form.Label > Email address < /Form.Label> <
        Form.Control type = "email"
        placeholder = "name@example.com" / >
        <
        /Form.Group> <
        Form.Group className = "mb-3"
        controlId = "exampleForm.ControlTextarea1" >
        <
        Form.Label > Example textarea < /Form.Label> <
        Form.Control as = "textarea"
        rows = { 3 }
        /> < /
        Form.Group > <
        /Form> <
        Stack gap = { 2 }
        className = "col-md-5 mx-auto" >
        <
        Button variant = "secondary" > Save changes < /Button> <
        Button variant = "outline-secondary" > Cancel < /Button> < /
        Stack >



        <
        Table striped bordered hover variant = "dark" >
        <
        thead >
        <
        tr >
        <
        th > # < /th> <
        th > hassan < /th> <
        th > ousema < /th> <
        th > jaber < /th> < /
        tr > <
        /thead> <
        tbody >
        <
        tr >
        <
        td > 1 < /td> <
        td > jaber < /td> <
        td > mayoufi < /td> <
        td > @mdo < /td> < /
        tr > <
        tr >
        <
        td > 2 < /td> <
        td > hassn < /td> <
        td > Thornton < /td> <
        td > @fat < /td> < /
        tr > <
        tr >
        <
        td > 3 < /td> <
        td colSpan = { 2 } > ousema < /td> <
        td > @twitter < /td> < /
        tr > <
        /tbody> < /
        Table >



        <
        /div>
    );
}

export default App;