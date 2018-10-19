
import React from 'react'
import { Link } from 'react-router'

 const ShopIndexTile = (props) => {
  return(
    <div>
      <h1><Link to={`/shop/${props.id}`}>{props.name}</Link></h1>
      <p>{props.address} {props.city}, {props.state} {props.zip}</p>
      <p>{props.phoneNumber}</p>
    </div>
  )
}

 export default ShopIndexTile
