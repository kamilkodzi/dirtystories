import React, {useState,useEffect} from 'react';
import moment from 'moment';
import './CityTable.css';

export default function CityTables(){
  const [cities,setCities]=useState([])

useEffect(()=>{
  const fetchCities= async()=> {
    function checkZero(measure){
      return measure.measurements[0].value>0
    }
    function checkDate(measure){
      const measureDate= moment(measure.measurements[0].lastUpdated)
      const threeDaysBefore= moment().subtract(7,'days')
      return measureDate>=threeDaysBefore
    }

    const listA= await fetch("https://api.openaq.org/v1/latest?country=FR&parameter=pm25&limit=10000")
      .then(response=>response.json())
      .then(response=>response.results)
      .then(response=>response.filter(checkZero))
      .then(response=>response.filter(checkDate))
      setCities(listA)

  }
  fetchCities()
},[])

  return(
    <div>
      <p>Moje wypociny</p>
        {cities.map(city=>(
          <li>{city.city} pm2.5 is: {city.measurements[0].value} </li>
        ))}
    </div>
  );
}