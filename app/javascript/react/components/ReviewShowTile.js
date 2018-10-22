
import React from 'react'

const ReviewShowTile = (props) => {

	let deleteReview = () => {
		props.handleDelete(props.id)
	}

	return(
		<div key={props.id}>
			<li>
			<p>{props.donutReview}</p>
			<p>{props.coffeeReview}</p>
			<p>{props.shopReview}</p>
			<button onClick={deleteReview}>Delete</button>
			</li>
		</div>
	)
}

export default ReviewShowTile
