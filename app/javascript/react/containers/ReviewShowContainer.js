import React from 'react'
import ReviewFormContainer from './ReviewFormContainer'
import ReviewDootContainer from './ReviewDootContainer'

const ReviewShowContainer = (props) => {
	let orderedReviews = props.reviews.sort(function(a,b) {
		return (b.doot_score - a.doot_score)
	})
  let reviews = orderedReviews.map((review) => {
  	return(
      <ReviewDootContainer
				review={review}
        key={review.id}
				shopId={props.shopId}
				handleDelete={props.handleDelete}
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
