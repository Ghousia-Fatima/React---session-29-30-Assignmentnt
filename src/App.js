import image from './images/random-image.jpg'
import './App.css';
import React from 'react';



// Integer Data (Pincode)
let pincode = "500006";

// String Data (Name) 
let name = "Zeba Fatima";

// Boolean Data (isActive)
let isActive = true;

// Object Data
let person = {
  name: "Sachin",
  job: "Developer",
  Country: "Dubai"
}

// Array Data 
let Technologies = ["React", "Angular", "Vue.js"];

// current Date & Time


let date = new Date().getDate(); //To get the Current Date
let month = new Date().getMonth() + 1; //To get the Current Month
let year = new Date().getFullYear(); //To get the Current Year
let hours = new Date().getHours(); //To get the Current Hours
let min = new Date().getMinutes(); //To get the Current Minutes
let sec = new Date().getSeconds(); //To get the Current Seconds


// Internal Styling
let myStyle = {
color: "blue",
backgroundColor: "pink",
fontSize: "20px",
fontFamily: "roboto"
}


function App() {
  return (
  <>
  <h2> React Expressions </h2>

  <h3>Int & String Data via react jsx </h3>

  <p>My Pincode is: {pincode} </p>

  <p>My Name is: {name} </p>

  <h3>Boolean Result vis jsx</h3>

 {isActive ? "Yes, It is Active" : "No, It isn't Active"}

  <h3>Object Data via react jsx (Internal style) </h3>
  <p style={myStyle}>Person details from an object : <br/>
  Name: {person.name+ ""} <br/>
  Job: {person.job+ ""} <br/>
  country: {person.Country+ ""} </p> 

  <h3>Array Data via react jsx </h3>
  The Technologies are: {
    Technologies.map((i)=>{
    return <p>{i}</p>
    })
  }

  <h3>Current Date & Time (Inline styled)</h3>
  <p style={{backgroundColor:'yellowgreen'}}>{date+ " /" } {month+ " /" } {year+ " - "} {hours+ ":"} {min+ ":"} {sec+ "."}</p>

  <h3>Public/Network Image</h3>
  <img src="https://e1.pxfuel.com/desktop-wallpaper/534/995/desktop-wallpaper-random-great-flowers-backgrounds-full-screen-1600x900-for-your-mobile-tablet.jpg" alt="flower" height="200px" width="300px"/>
  <h3>Src/Local Image</h3>
  <img src={image} alt="flower" height="200px" width="300px"/>
  
  <h3>Evaluated expression result</h3>
  {10*2-10/5}

 
  
  </>
  );
}

export default App;
