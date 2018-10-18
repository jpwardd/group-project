
import React from 'react'


const ShopShowTile = (props) => {
	return(
		
		<div className="callout">
			<div className="medium-6 columns">
				<img className="thumbnail" src={"https://placehold.it/650x350"}	/>
			<button className="map-button warning">map</button>
			</div>

			<div className="row medium-6 large-5 columns">
				<h1>{props.name}</h1>
				<p >{props.address}</p>
				<p>{props.city}, {props.state} {props.zip}</p>
				<p>{props.phoneNumber}</p>
			</div>

		</div>
			
	)
}

export default ShopShowTile