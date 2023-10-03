import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react';

import '../App.css';


// class MyNav extends React.Component {
function MyNav() {

    const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
    const [loginNav, setLoginNav] = useState();
    const [loginSet, setLoginSet] = useState(false);

    // useEffect(() => {
        
    // })
    if (!isLoading && loginSet == false) {
        if (isAuthenticated) {
            setLoginNav(
                <Nav className="justify-content-end">
                    <Nav.Link href="/messages">Messages</Nav.Link>
                    <Nav.Link onClick={() => logout({ returnTo: "http://127.0.0.1:3000" })}>Logout</Nav.Link>

                </Nav>

            )
            setLoginSet(true)
            }
        else {
            setLoginNav(
                <Nav className="justify-content-end">
                    <Nav.Link onClick={() => loginWithRedirect()}>Login</Nav.Link>
                </Nav>
            )
            setLoginSet(true)
        }
        
        
    }

    // render() {
        return <div>
           
                <Navbar bg="light" className="MyNav">
                <Container>
                    <Navbar.Brand href="/">MyQuiver</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link id="c-n" href="/">Home</Nav.Link>
                        <Nav.Link id="c-n" href="/for-sale">For Sale</Nav.Link>
                        {/* <Nav.Link id="c-n" href="/wanted">Wanted</Nav.Link> */}
                    </Nav>
                    {loginNav}
                 
                </Container>

                </Navbar>     
                   
        </div>
       
    // }
}  
// }

export default MyNav;