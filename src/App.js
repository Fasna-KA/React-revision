import './App.css';
import Effect from './day3/UseEffect';
// import ClassComp from "./day1/classComp"
// import FunctionalComp from "./day1/functionalComp"

// import Nav from './day2/Nav'
// import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './day2/pages/Home';
// import About from './day2/pages/About';
// import Notfound from './day2/pages/Notfound';

import Reducer from './day3/UseReducer'
import State from './day3/UseState';
import EffectHook from './day3/UseEffect';

function App() {
  return (
    <div className="App">

      {/* <FunctionalComp/>
      <ClassComp/> */}

{/* <BrowserRouter>
  <Nav/>
  <Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/notfound' element={<Notfound/>}/>
  </Routes>
</BrowserRouter> */}

  <State/>
  <Reducer/>
  <EffectHook/>


    </div>
  );
}

export default App;
