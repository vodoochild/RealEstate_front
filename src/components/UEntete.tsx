import React, {useState} from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
export const UEntete = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
      return (
          <div>
              <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">LOGO D'ENTREPRISE</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/Ads/">Trouver votre bien </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/NewAd">Actualités </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Ads">Nous contacter </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>  
          </div>
      );
}
export default UEntete;
