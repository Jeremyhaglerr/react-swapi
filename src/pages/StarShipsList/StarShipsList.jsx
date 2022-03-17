import React, { useState, useEffect } from 'react';
import { getStarShipList } from '../../services/sw-api';
import { Link } from 'react-router-dom';


const Starshiplist = (props) => {

  const [ships, setShips] = useState([])

  useEffect(()=> {
    getStarShipList()
    .then(shipData => setShips(shipData.results))
  }, [])

  return (  
    <>
    <div className="ship-cards">
      {ships.length ?
      <>
      {ships.map(ship =>
        <Link to='/starship' state={{ship}} key={ship.name}>
          <div className='ship-card'> 
          {ship.name} <br />
          </div>
        </Link>
      )}
      </>
      :
      <>
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      </>
      }   
    </div>
    </>
  );
}
 
export default Starshiplist;