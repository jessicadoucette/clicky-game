import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron"; 
import SimpsonCard from "./components/SimpsonCard";
import simpsons from "./simpsons.json";

const App = () => (
<div>
<Nav />
<Jumbotron>
<h1>The Simpson's Clicky Game!</h1> 
<br></br>
<h2>Click on an image to earn points, but don't click on any more than once!</h2>
</Jumbotron>
<SimpsonCard 
image={simpsons[0].image}
/>
<SimpsonCard 
image={simpsons[1].image}
/>
<Counter />
</div>
); 

export default App;
