
import React, { Component } from 'react'
import ReviewFormContainer from './ReviewFormContainer'
import ReviewShowTile from '../components/ReviewShowTile'

class ReviewShowContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			reviews: [],
		}
    this.addNewReview = this.addNewReview.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.deleteReview = this.deleteReview.bind(this)
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

	handleDelete(id){
		fetch(`http://localhost:3000/api/v1/shops/${this.props.shopId}/reviews/${id}`,
		{
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json' } ,
			credentials: 'same-origin'
		})
		.then(response => {
			if (response.ok) {
				alert("Review was deleted!")
				this.deleteReview(id)
			}
			else {
				console.log(this.props.shopId)
				let errorMessage = `${response.status} (${response.statusText})`,
					error = new Error(errorMessage)
				throw error
			}
		})
	}

	deleteReview(id){
    let newReview = this.state.reviews.filter((review) => review.id !== id)
    this.setState({
      reviews: newReview
    })
  }

	render() {
		debugger

    let reviews = this.state.reviews.map((review) => {
    	return(
	      <ReviewShowTile
          key={review.id}
          id={review.id}
	        donutReview={review.donut_review}
	        coffeeReview={review.coffee_review}
	        shopReview={review.shop_review}
					handleDelete={this.handleDelete}
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
	        addNewReview={this.addNewReview}
	      />
				{reviews}

      </div>
		)
	}
}

export default ReviewShowContainer
