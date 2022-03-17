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
console.log('Correct', shipDetails);
  return ( 
  <>
  {shipDetails.name}
  {shipDetails.model}
  </> );
}
 
export default StarShipDetails;