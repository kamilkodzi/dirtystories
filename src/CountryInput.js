import React, {
 useState
} from 'react';
import './CountryInput.css'

export default function CountryInput() {
 const [countryName, setCountryName] = useState("Poland");
 
function handleNameChange(e){
  setCountryName(e.target.value);
}

 return(
   <div className='countryInput'>
     <input 
     value={countryName}
     onChange={console.log(cities)}
     />
   </div>
 )
}

// import React, { useState } from 'react';

// export default function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }