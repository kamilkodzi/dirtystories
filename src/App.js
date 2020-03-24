import React from 'react';
import './App.css';
import CountryInput from './components/CountryInput';
import CityTables from './components/CityTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import img from './components/pictures/smoke2.jpg';
import NavbarInput from './components/NavbarInput';
import Context from './helpers/context';

const StyledNavbar = styled(Navbar)`
background-color:none;
.current-localization{
  color:#E94F37;
&:hover{
  color:#D0361E;
}}`

const StyledJumbotron = styled(Jumbotron).attrs({
  className: "Jumbotron-landing d-flex align-items-center min-vh-100",
})`
background-image: url(${img})!important;
background-size:cover;
margin-bottom: 0px;
color: #F6F7EB;
text-align: center;
line-height: 1.5;
min-width:300px;
align-items: center;
justify-content: center;
h1{
  font-size:11vmin;
  margin-bottom:1.2vmin;
  font-weight:700;
  padding-left:2.5vmin;
}
p{
  font-size:5vmin;
  line-height: 1.2;
}
.brand-icon{
  font-size:10vmin;
}
.jumbotron-button{
  background-color:#E94F37;
  color:#F6F7EB;
  border:0;
  padding:1vmin;
  margin-top:2vmin;
  min-width:40vmin;

  &:active{
  background-color:#E94F37!important;
  outline:none;
}
}
.brand-icon-crown{
  font-size:3vmin;
  color:#F9DC5C;
  vertical-align:top;
  margin-top:1.5vmin;
}
`;



function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [chosenCountry, setChosenCountry] = React.useState('');
  const [chosenCountryCode, setchosenCountryCode] = React.useState('')

  return (
    <Context.Provider value={{ chosenCountryCode, chosenCountry }}>
      <styledApp>

        <StyledNavbar className="fixed-top" expand="sm" variant="dark">
          {chosenCountry ? <NavbarInput chosencountry={chosenCountry} onClick={() => setModalShow(true)} /> : null}
        </StyledNavbar>

        <StyledJumbotron fluid >

          <Container>
            {chosenCountryCode === '' ?
              <span>
                <h1> smogking<FontAwesomeIcon className="brand-icon-crown" icon={faCrown} /></h1>
                <p>Did you chose for today?</p>
                <Button className="jumbotron-button" variant="danger" onClick={() => setModalShow(true)}>Seek for polutions</Button>
              </span>
              : <span><CityTables /></span>}

            <CountryInput
              show={modalShow}
              onhide={() => setModalShow(false)}
              plhandler={() => setChosenCountry("Poland", setchosenCountryCode("PL", setModalShow(false)))}
              sphandler={() => setChosenCountry("Spain", setchosenCountryCode("ES", setModalShow(false)))}
              gehandler={() => setChosenCountry("Germany", setchosenCountryCode("DE", setModalShow(false)))}
              frhandler={() => setChosenCountry("France", setchosenCountryCode("FR", setModalShow(false)))}
            />
          </Container>
        </StyledJumbotron>
      </styledApp>
    </Context.Provider>
  );
}

export default App;
