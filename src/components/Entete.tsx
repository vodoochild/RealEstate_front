import React, {useState} from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export const Entete = () => {
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
              <NavLink href="/Ads/">Mes annonces </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/NewAd">Nouvelle Annonce</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Ads">Dashboard</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>  
        </div>
    );
}
export default Entete;
