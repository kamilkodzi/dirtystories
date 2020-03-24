import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';


const StyledNavbar = styled(Navbar)`
background-color:none;
.current-localization{
  color:#E94F37;
&:hover{
  color:#D0361E;
}
}
`
export default function NavbarInput(props){


    return(
        <div {...props}>
            <Navbar.Brand>smogking </Navbar.Brand>
            <StyledNavbar.Text className="current-localization" onClick={props.onClick}>
              <span> {props.chosencountry}</span>
            </StyledNavbar.Text>
        </div>
    )
}