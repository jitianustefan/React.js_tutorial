// //import Avatar from "./componente/Avatar";
// //import Btn from "./componente/Btn";
// //import ModeToggler from "./componente/ModeToggler";
// import React, { useState } from 'react';
// import Heading from "./componente/Heading";

// function App() {
//   const [word, setWord] = React.useState('Eat');
  
//   function handleClick() {
//     setWord('Drink');
//   }
//   return(
//     <div>
      
//       <Heading message={word + " at Little Lemon"}/>
//       <button onClick={handleClick}>Click here</button>
//     </div>
//   );
// }


// export default App;


// Here I learned the concept of React Context API

// import MealsProvider from "./componente/MealsProvider"; 
// import MealsList from "./componente/MealsList";
// import Counter from "./componente/Counter";

// function App() {
//   return (
//     <MealsProvider>
//       <MealsList />
//       <Counter />
//     </MealsProvider>
//   );
// }

// export default App;


// Here I implement a simple NavBar using React BrowserRouter
import Homepage from './navigation/Homepage';
import AboutMe from './navigation/AboutMe';
import CalculatorLink from './navigation/CalculatorLink';
import { Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      {/* <nav className='nav'>
        <a href="#" className='nav-item'>Homepage</a>
        <a href="#" className='nav-item'>About Me</a>
      </nav> */}
      <nav className='nav'>
        <Link to="/" className='nav-item'>Homepage</Link>
        <Link to="/about-me" className='nav-item'>AboutMe</Link>
        <Link to="/calculator" className='nav-item'>Calculator</Link>
      </nav>
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about-me' element={<AboutMe />} />
      <Route path='/calculator' element={<CalculatorLink />} />
      </Routes>
    </div>
  );
}

export default App;
