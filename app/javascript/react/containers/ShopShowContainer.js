import React, { Component } from 'react'
import ShopShowTile from '../components/ShopShowTile'
import ReviewShowContainer from './ReviewShowContainer'

class ShopShowContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			shop: {},
			reviews: []
		}
		this.addNewReview = this.addNewReview.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.deleteReview = this.deleteReview.bind(this)
	}

	componentDidMount() {
		let shopId = this.props.params.id
		fetch(`/api/v1/shops/${shopId}`,
		{
			credentials: 'same-origin',
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
        this.setState({
					shop: {
						id: data.id,
						name: data.name,
						address: data.address,
						city: data.city,
						state: data.state,
						zip: data.zip,
						image_url: data.image_url,
						phone_number: data.phone_number,
						current_user_id: data.current_user_id,
						current_user_role: data.current_user_role
					},
					reviews: data.reviews
				})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

	addNewReview(formPayLoad) {
		let shopId = this.props.params.id
    fetch(`/api/v1/shops/${this.props.params.id}/reviews`, {
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
		let shopId = this.props.params.id
		fetch(`/api/v1/shops/${shopId}/reviews/${id}`,
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
				let errorMessage = `${response.status} (${response.statusText})`,
					error = new Error(errorMessage)
				throw error
			}
		})
		.catch(error => {
			console.error(`ERROR IN FETCH: ${error}`)
		})
	}

	deleteReview(id){
    let newReview = this.state.reviews.filter((review) => review.id !== id)
    this.setState({
      reviews: newReview
    })
  }

  render() {
  	console.log(this.state)
  	return(
      <div>
    		<ShopShowTile
    			key={this.state.shop.id}
    			id={this.state.shop.id}
    			name={this.state.shop.name}
    			address={this.state.shop.address}
    			city={this.state.shop.city}
    			state={this.state.shop.state}
    			zip={this.state.shop.zip}
    			phoneNumber={this.state.shop.phone_number}
    			imageUrl={this.state.shop.image_url}
    		/>
				<ReviewShowContainer
					shopId={this.state.shop.id}
					reviews={this.state.reviews}
					addNewReview={this.addNewReview}
					handleDelete={this.handleDelete}
				/>
      </div>
		)
  }
}

export default ShopShowContainer
