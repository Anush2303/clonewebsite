import React from "react";
import '../css/Navbar.css';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    return(
        <Nav fill className="navbar fixed-top sticknav" activeKey="/home">
        <div className="header1">
        <Nav.Item>
          <Nav.Link href="/" className="nav-links">
            Aesop
          </Nav.Link>
        </Nav.Item>  
        <Nav.Item>
          <Nav.Link href="/" className="hide nav-links">
            Skin Care
          </Nav.Link>
        </Nav.Item>         
        <Nav.Item>
          <Nav.Link href="/" className="hide nav-links">
            Body & Hand
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="hide nav-links" href="/about">
            Hair
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="hide nav-links" href="/comp">
            Fragnance
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="hide1 nav-links" href="/proj">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="hide nav-links" href="/cont">
            Kits & Travel
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="hide nav-links" href="/cont">
            Gifts
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="hide1 nav-links" href="/cont">
            Read
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="hide1 nav-links" href="/cont">
            Stores
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventkey="link-2" className="hide1 nav-links">
                <FontAwesomeIcon icon={faSearch}/>
            </Nav.Link>
        </Nav.Item>       
        </div>
        <div className="header2">
        <Nav.Item>
            <Nav.Link eventkey="link-2" className="hide__ nav-links">
                Login
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventkey="link-2" className="hide__ nav-links">
                Cart
            </Nav.Link>
        </Nav.Item>
        </div>
      </Nav>
    );
}
export default Navbar;
