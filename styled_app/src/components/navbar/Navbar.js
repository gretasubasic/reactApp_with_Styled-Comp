import React from 'react';
import { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from "../../GlobalStyles"
import { Nav, NavBarContainer, NavLogo, NavIcon, MobileIcon, 
    NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from "./Navbar.elements";



const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    const handleClick = () => {
        setClick(!click)
    }

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener("resize", showButton)

    return ( 
        <div>
            <IconContext.Provider value={{color: "#fff"}}>
          <Nav>
              <NavBarContainer>
                  <NavLogo to="/">
                      <NavIcon />
                      maker
                  </NavLogo>
                  <MobileIcon onClick={handleClick}>
                      {click ? <FaTimes /> : <FaBars />}
                  </MobileIcon>
                  <NavMenu onClick={handleClick} click={click}>
                      <NavItem>
                          <NavLinks to="/">Home</NavLinks>
                      </NavItem>
                  
                  
                      <NavItem>
                          <NavLinks to="/about">About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="/pricing">Pricing</NavLinks>
                      </NavItem>
                  
                 
                      
                      <NavItemBtn>
                          {button ? (
                              <NavBtnLink to="/sign-up">
                                  <Button primary>Sign Up</Button>
                              </NavBtnLink>
                          ) : (
                              <NavBtnLink to="/sign-up">
                                  <Button fontBig primary>Sign Up</Button>
                              </NavBtnLink>
                          )}
                      </NavItemBtn>
                  </NavMenu>
              </NavBarContainer>
          </Nav>
          </IconContext.Provider>
        </div>
     );
    }
 
export default Navbar; 