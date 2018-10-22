
import React from 'react'

const ReviewShowTile = (props) => {

	let deleteReview = () => {
		props.handleDelete(props.id)
	}


	return(
		<div key={props.id} className="row review-container">
			<div className="">

					<ul className="no-bullet list">
						<li><strong>Donut Review:</strong> {props.donutReview}</li>
						<li><strong>Coffee Review:</strong> {props.coffeeReview}</li>
						<li><strong>Shop Review:</strong> {props.shopReview}</li>
					</ul>
					<blockquote className="cite">
						<cite>{props.firstName} {props.lastName}</cite>
					</blockquote>
					<button onClick={deleteReview}>Delete</button>
			</div>
		</div>
	)
}

export default ReviewShowTile
