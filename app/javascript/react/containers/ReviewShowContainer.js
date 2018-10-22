
import React, { Component } from 'react'
import ReviewFormContainer from './ReviewFormContainer'
import ReviewShowTileContainer from './ReviewShowTileContainer'

class ReviewShowContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			reviews: []
		}
    this.addNewReview = this.addNewReview.bind(this)
	}

	componentDidMount() {
		fetch(`/api/v1/shops/${this.props.shopId}/reviews`,
		{
			credentials: 'same-origin'
  	})
	   .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState( { reviews: data } )
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  addNewReview(formPayLoad) {
    fetch(`/api/v1/shops/${this.props.shopId}/reviews`, {
      method: 'post',
      body: JSON.stringify(formPayLoad),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => {
        if (response.ok) {
          return response
        }
        else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        let newReviews = this.state.reviews.concat(body)
        this.setState( { reviews: newReviews } )
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

	render() {
    let reviews = this.state.reviews.map((review) => {
    	return(
	      <ReviewShowTileContainer
          key={review.id}
          review={review}
	      />
      )
    })

		return(
			<div>
        {reviews}
	      <ReviewFormContainer
	        addNewReview={this.addNewReview}
	      />
      </div>
		)
	}
}

export default ReviewShowContainer
