// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App(){
  // const title = "KitabKor";
  return(
    <div className='App'>
      <Navbar></Navbar>
      <div className='content'>
        <Home></Home>
        {/* <h1>{title}</h1> */}
      </div>
    </div>
  )
}
export default App;

