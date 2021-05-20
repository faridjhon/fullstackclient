import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../image/Bg.png';
import { Navbar,Nav } from 'react-bootstrap';


const Header = () => {
    return (
               <div 
               style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
                            <Navbar  variant="dark">
                            <Navbar.Brand href="/home">PICKnPAY</Navbar.Brand>
                             <Nav className="nav">
                                <ul >
                                    <li>
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/orders">Orders</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin">Admin</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    
                                    
                                </ul>
                            
                            </Nav>
                            
                        </Navbar>
                    </div>
        
    );
};

export default Header;

