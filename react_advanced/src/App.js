import UpdateNameRestaurant from "./componente/UpdateNameRestaurant";
import FormReact1 from "./componente/FormReact1";
import LearnUseEffect from "./componente/LearnUseEffect";
  function App() {
  return(
    <div>
      <LearnUseEffect />
      <UpdateNameRestaurant />
      <FormReact1 />
    </div>
  );
}
 export default App;





// //import ArrayIs from "./componente/ArrayIs";
// import FromReact from "./componente/FormReact";


// function App() {

//   return (
//     <div className="App">
//       <FromReact />
//     </div>
//   );
// }

// export default App;


// import { UserProvider, useUser } from "./componente/UserContext";

// const LoggedInUser = () => {
//   const {user} = useUser();
//   return(
//     <p>
//       Hello <span>{user.name}</span>
//     </p>
//   );
// };

// const Header = () => {
//   return (
//     <header>
//       <h2>Blog App</h2>
//       <LoggedInUser />
//     </header>
//   );
// };

// const Page = () => {
//   const {user} = useUser();
//   return (
//     <div>
//       <h2>What is Lorem Ipsum ? </h2>
//       <p>
//         Lorem Ipsum dolor sit amet A tiny VS 
//         Code extension made up of a few commands 
//         that generate and insert lorem ipsum text
//          into a text file. To use the extension,
//           open the command palette F1 or cmd/ctr
//           l+shift+p, type "lorem ipsum" and select
//            to insert either a line or paragraph.
//       </p>
//       <p>Scris de {user.name}</p>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div>
//       <Header />
//       <Page />
//     </div>
//   );
// }

// export default function Root () {
//   return(
//     <UserProvider>
//       <App />
//     </UserProvider>
//   );
// };

