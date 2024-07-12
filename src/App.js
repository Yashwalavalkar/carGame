import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screen/Home';
import About from './homeComponents/About';
import Ticktactoa from '../src/tictackToa/components/Ticktactoa'
import Cargame from '../src/carGame/component/Game'

function App() {
  return (
    <div className="">
      <BrowserRouter> 
        {/* <Home/>
        <Middlepart/> */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path="/tictac" element={<Ticktactoa/>} />
          <Route path='/cargame' element={<Cargame/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
