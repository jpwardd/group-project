import React from 'react'

 const ShopIndexTile = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.address} {props.city} {props.state} {props.zip}</p>
      <p>{props.phoneNumber}</p>
    </div>
    )
}
 export default ShopIndexTile