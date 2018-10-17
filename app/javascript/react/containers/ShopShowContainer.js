
import React, { Component } from 'react'
import ReviewFormContainer from './ReviewFormContainer'
import ShopShowTile from '../components/ShopShowTile'
import ReviewShowTile from '../components/ReviewShowTile'

class ShopShowContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			shop: {},
      reviews: []
		}
    this.addNewReview = this.addNewReview.bind(this)
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
        this.setState( { shop: data } )
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  addNewReview(formPayLoad) {
    let shopId = this.props.params.id
    fetch(`/api/v1/shops/${shopId}/reviews`, {
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
    		/>
        <ReviewShowTile
        />
        <ReviewFormContainer
          addNewReview={this.addNewReview}
        />
      </div>
		)
  }
}

export default ShopShowContainer