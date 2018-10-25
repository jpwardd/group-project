import React from 'react'
import { Link } from 'react-router'

 const ShopIndexTile = (props) => {
  return(
    <div className="index-container large-12 medium-12 small-12 columns">
    	<img src={props.image} />
      <h1><Link to={`/shops/${props.id}`}>{props.name}</Link></h1>
      <p>{props.address} {props.city}, {props.state} {props.zip}</p>
      <p>{props.phoneNumber}</p>
     </div>
  )
}

 export default ShopIndexTile
