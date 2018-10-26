import React from 'react'

const ShopShowTile = (props) => {
	return(
		<div className="row review-container">
			<div className="medium-6 columns">
			<img className="show-pic img" src={props.imageUrl} />
			</div>

			<div className="medium-6 columns">
				<h1>{props.name}</h1>
				<p>{props.address}</p>
				<p>{props.city}, {props.state} {props.zip}</p>
				<p>{props.phoneNumber}</p>
			</div>
		</div>
	)
}

export default ShopShowTile
