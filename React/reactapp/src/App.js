import logo from './logo.svg';
import './App.css';
import Tile from './Tile.js'

// function Tile(){
//   return(
//     <div>
//       <span>X</span>
//     </div>
//   )
// }


function App() {
  return (
    <div>
      <h1 style={{backgroundColor: "red"}}>Welcome to react</h1>
      <span>how are you doing??</span>
      <Tile />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87uFVVDdHE0aMphlj8OWbg5cVNSgS2ccOKA&usqp=CAU" alt="" />
    </div>
  );
}

export default App;
