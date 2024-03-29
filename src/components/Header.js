import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Header extends Component {
    render () {
        return (

            <Navbar className="mb-3" bg="dark" variant="dark">
                <Navbar.Brand href="#home">IMDB</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Movies</Nav.Link>
                <Nav.Link href="#pricing">Chart & Trends</Nav.Link>
                <Nav.Link href="#pricing">TV & Videos</Nav.Link>
                <Nav.Link href="#pricing">Categories</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        )
    }
}

export default Header;