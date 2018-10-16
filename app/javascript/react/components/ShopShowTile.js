
import React from 'react'

const ShopShowTile = (props) => {
	return(
		<div className="row">
			<div className="medium-6 columns">
				<img className="thumbnail" src={"https://placehold.it/650x350"}	/>
			<div className="row small-up-4">
			
			<div className="column">
				<img className="thumbnail" src={"https://placehold.it/250x200"} />	 
			</div>
			
			<div className="column">
				<img className="thumbnail" src={"https://placehold.it/250x200"} />	 
			</div>
			
			<div className="column">
				<img className="thumbnail" src={"https://placehold.it/250x200"} />	 
			</div>

			<div className="column">
				<img className="thumbnail" src={"https://placehold.it/250x200"} />	 
			</div>
			</div>
		</div>

			<div className="medium-6 large-5 columns">
				<h1>{props.name}</h1>
				<p >{props.address}</p>
				<p>{props.city}, {props.state} {props.zip}</p>
				<p>{props.phoneNumber}</p>

			</div>
	</div>

	)
}

export default ShopShowTile