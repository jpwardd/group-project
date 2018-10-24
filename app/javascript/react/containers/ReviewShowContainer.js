import React from 'react'
import ReviewFormContainer from './ReviewFormContainer'
import ReviewShowTile from '../components/ReviewShowTile'

const ReviewShowContainer = (props) => {
	let reviews = props.reviews.map((review) => {
		return(
			<ReviewShowTile
				key={review.id}
				id={review.id}
				donutReview={review.donut_review}
				coffeeReview={review.coffee_review}
				shopReview={review.shop_review}
				handleDelete={props.handleDelete}
				firstName={review.user.first_name}
				lastName={review.user.last_name}
				userId={review.user.id}
				currentUserRole={review.current_user_role}
				currentUser={review.current_user_id}
			/>
		)
	})


		return(
			<div>
				<ReviewFormContainer
					addNewReview={props.addNewReview}
				/>
				{reviews}
			</div>
		)
}


export default ReviewShowContainer
