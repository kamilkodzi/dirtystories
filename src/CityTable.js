import React, {useState,useEffect} from 'react';
import './CityTable.css';

export default function CityTables(){
  const [cities,setCities]=useState([]);
  const [lastMeasurments,setLatsMeasurments]=useState([]);

useEffect(()=>{
  const fetchCities= async()=> {
    const listA= await fetch("https://api.openaq.org/v1/cities?country=DE&limit=10000")
      .then(response=>response.json())
      .then(response=>response.results)
      .then(response=>response.map(element=>(element.city)))
    setCities(listA)  
  }
  fetchCities()
},[])

useEffect(()=>{
  const fetchMeasurments= async()=>{
    const listB = await cities.map(city=>(
      fetch("https://api.openaq.org/v1/latest?country=DE&city="+city+"&parameter=pm25")
      .then(response=>response.json())
      .then(response=>response.results[0])
      .then(response=>console.log(response))
      ))
    setLatsMeasurments(listB)
  }
  fetchMeasurments()
},cities!=[]||[])

  return(
    <div>
      <p>Moje wypociny</p>
        {lastMeasurments.map(lastMeasure=>(
          <li>
          <h1>{lastMeasure}</h1>
          {/* <p>{lastMeasure.measurements.value}</p> */}
          </li>
        ))}
    </div>
  );
}


// const listB = await listA.map(city=>(
//   fetch("https://api.openaq.org/v1/latest?country=DE&city="+city+"&parameter=pm25")
// .then(response=>response.json())
// .then(response=>response.results[0])
// .then(response=>console.log(response))
// ))
// .then(response=>setData(response))