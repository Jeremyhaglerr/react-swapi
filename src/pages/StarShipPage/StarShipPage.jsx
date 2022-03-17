import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails, getStarShipList } from '../../services/sw-api';


const StarShipDetails = (props) => {
  const [shipDetails, setShipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getDetails(location.state.ship.url)
    .then(shipDetails => 
      setShipDetails(shipDetails)
    )
  }, [])

  return ( 
    <div className='ship-details-card'>
    {shipDetails.length ? 
  <>
  Name: {shipDetails.name}
  <br />
  Model: {shipDetails.model}
  <br />
  <a href="/">Return</a>
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
  </div> );
}
 
export default StarShipDetails;