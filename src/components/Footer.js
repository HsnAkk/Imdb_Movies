import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';



class Footer extends Component {
    render () {
        return (
            <Navbar fixed="bottom" className="mt-3" bg="dark" variant="dark">
                <Nav className="container mr-auto">
                    {/* <Nav.Link href="#home"></Nav.Link> */}
                </Nav>
            </Navbar>
        )
    }
}

export default Footer;