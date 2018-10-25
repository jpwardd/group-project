import React from 'react'
import ReviewFormContainer from './ReviewFormContainer'
import ReviewDootContainer from './ReviewDootContainer'

const ReviewShowContainer = (props) => {
	let reviewProps = props.reviews.sort(function(a,b) {
		return b.doot_score - a.doot_score
	})
  let reviews = reviewProps.map((review) => {
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
