import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

class Navigation extends Component{
    render(){
        return(
            <Navbar sticky="top"  bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="#second">About</Nav.Link>
                    <Nav.Link href="#third">Skill</Nav.Link>
                </Nav>
            </Navbar>

        );
    }

}

export default Navigation