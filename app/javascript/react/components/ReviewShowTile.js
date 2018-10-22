import React from 'react';

const ReviewShowTile = (props) => {
	return(
		<div key={props.id}>
			<i className="fa fa-arrow-up fa-2x"></i>
			<p>{props.doot_score}</p>
			<i className="fa fa-arrow-down fa-2x"></i>


			<li>
				<p>{props.donutReview}</p>
				<p>{props.coffeeReview}</p>
				<p>{props.shopReview}</p>
			</li>
		</div>
	)
}

export default ReviewShowTile
