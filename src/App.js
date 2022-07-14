import './App.css';
// import Body from './component/Body';
import Filter from './component/Filter';
import Home from './component/Home';
 import Main from './component/Main';
// import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
     <Home/>
     <Filter/>
     <Main/> 
    
     {/* <Body/> */}
    </div>
  );
}

export default App;
