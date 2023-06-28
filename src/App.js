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

import MealsProvider from "./componente/MealsProvider"; 
import MealsList from "./componente/MealsList";
import Counter from "./componente/Counter";

function App() {
  return (
    <MealsProvider>
      <MealsList />
      <Counter />
    </MealsProvider>
  );
}

export default App;
