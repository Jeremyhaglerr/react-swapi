import './App.css';
import Header from './components/Header/Header';
import Starshiplist from './pages/StarShipsList/StarShipsList';
import StarShipDetails from './pages/StarShipPage/StarShipPage';
import {Route, Routes} from 'react-router-dom';



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Starshiplist/>} />
      <Route path='/starship' element={<StarShipDetails/>} />
    </Routes>
    </>
  );
}

export default App;
