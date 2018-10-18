
import React from 'react'

const ReviewShowTile = (props) => {
	return(
		<div key={props.id}>
			<li>
			<p>{props.donutReview}</p>
			<p>{props.coffeeReview}</p>
			<p>{props.shopReview}</p>
			</li>
		</div>
	)
}

export default ReviewShowTile