import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useAppContext } from '../helpers/MyHooks';
import styled from 'styled-components';



const StyledAccordion = styled(Accordion)`
margin-top:27vmin;
padding-bottom:15px;
color:#F6F7EB;

.city-card{
  margin-bottom:10px;
  background-color:rgba(233, 79, 55, 0.6);
  border-radius:5px!important;

}
button{
  color:#F6F7EB;
  &:hover{
    color:#F6F7EB;
    text-decoration: none;
  }
}
`


export default function CityTables() {
  const { chosenCountryCode } = useAppContext();
  const [cities, setCities] = useState([])
  console.log(chosenCountryCode)
  useEffect(() => {
    const fetchCities = async () => {
      function checkZero(measure) {
        return measure.measurements[0].value > 0
      }
      function checkDate(measure) {
        // console.log(moment((measure.measurements[0].lastUpdated)))
        const measureDate = moment(measure.measurements[0].lastUpdated)
        const someDaysBefore = moment().subtract(3, 'days')
        console.log(someDaysBefore)
        if (moment(measureDate).isAfter(someDaysBefore)) {
          return measure
        }
      }

      const listA = await fetch("https://api.openaq.org/v2/latest?country=" + chosenCountryCode + "&parameter=pm25&limit=10000")
        .then(response => response.json())
        .then(response => response.results)
        .then(response => response.filter(checkZero))
        .then(response => response.filter(checkDate))
      setCities(listA)

    }
    fetchCities()
  }, [chosenCountryCode])

  return (
    <div>
      <StyledAccordion>
        {cities.slice(0, 5).map((city, index) => (
          <Card className="city-card">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                {city.location} pm2.5 is: {city.measurements[0].value} updated at {new Date(city.measurements[0].lastUpdated).toLocaleDateString()}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </StyledAccordion>
    </div>
  );
}