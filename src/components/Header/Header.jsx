import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form, Container } from 'react-bootstrap';
import {Link, useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { searchBooks } from '../../redux/books-reducer';

const Header = () => {

    let [value, setValue] = useState('')
    
    const dispatch = useDispatch()
    const history = useHistory()

    let onSubmit = (e) => {
        e.preventDefault()
        history.push("/books");
        dispatch(searchBooks(value))
    }

    return (
        <Navbar bg="light" expand="lg" className="header">
            <Container>
                <Navbar.Brand ><Link to="/">BOOK APP</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/books">Books</Link></Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline onSubmit={(e) => onSubmit(e)} >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;