import React from 'react'

const ShopShowTile = (props) => {
	return(

		<div className="callout">
			<div className="medium-6 columns">
			<img className="show-pic" src={props.imageUrl} />
			</div>

			<div className="row medium-6 large-5 columns">
				<h1>{props.name}</h1>
				<p>{props.address}</p>
				<p>{props.city}, {props.state} {props.zip}</p>
				<p>{props.phoneNumber}</p>
			</div>
		</div>
	)
}

export default ShopShowTile
