
import React, { Component} from 'react';

class ReviewShowTileContainer extends Component{
	constructor(props) {
		super(props)
		this.state = {
			review: props.review,
			comments: [],
			doot_boolean: null
		}
		this.upDoot = this.upDoot.bind(this)
		this.downDoot = this.downDoot.bind(this)
		this.toDootOrNotToDoot = this.toDootOrNotToDoot.bind(this)
	}

	// compare & contrast userid to determine if current review has already been voted on
	//
	// componentDidMount() {
	// 	fetch(`/api/v1/shops/${this.props.shopId}/reviews/${this.state.review.id}`, {
	// 		credentials: 'same-origin'
	// 	})
	// 		.then(response => {
	// 			if (response.ok) {
	// 				return response
	// 			} else {
	// 				let errorMessage = `${response.status} (${response.statusText})`,
	// 					error = new Error(errorMessage)
	// 				throw error
	// 			}
	// 		})
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			this.setState( { FIX } )
	// 		})
	// 		.catch(error => console.error(`Error in fetch: ${error.message}`))
	// }

	toDootOrNotToDoot(formPayLoad) {
		fetch(`/api/v1/shops/${this.props.shopId}/reviews/${this.state.review.id}`, {
			method: 'PATCH',
			body: JSON.stringify(formPayLoad),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json' },
			credentials: 'same-origin'
		})
			.then(response => {
				if (response.ok) {
					return response
				} else {
					let errorMessage = `${response.status} (${response.statusText})`,
						error = new Error(errorMessage)
					throw error
				}
			})
			.then(response => response.json())
			.then(body => {
				this.setState( { review: body})
			})
			.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	upDoot(event) {
		if (this.state.doot_boolean === null) {
			this.setState( { doot_boolean: true } )
			this.state.review.doot_score += 1
		} else if (this.state.doot_boolean === false) {
			this.setState( { doot_boolean: true } )
			this.state.review.doot_score += 2
		} else {
			this.setState( { doot_boolean: null } )
			this.state.review.doot_score -= 1
		}
		this.setState( { reviews: this.state.reviews } )

		let formPayLoad = {
			doot_score: this.state.review.doot_score
		};

		this.toDootOrNotToDoot(formPayLoad)
	}

	downDoot(event) {
		if (this.state.doot_boolean === null) {
			this.setState( { doot_boolean: false } )
			this.state.review.doot_score -= 1
		} else if (this.state.doot_boolean === true) {
			this.setState( { doot_boolean: false } )
			this.state.review.doot_score -= 2
		} else {
			this.setState( { doot_boolean: null } )
			this.state.review.doot_score += 1
		}
		this.setState( { reviews: this.state.reviews } )

		let formPayLoad = {
			doot_score: this.state.review.doot_score
		};

		this.toDootOrNotToDoot(formPayLoad)
	}

	render() {
		let upDoot = () => this.upDoot(event)
		let downDoot = () => this.downDoot(event)
		return(
			<div key={this.state.review.id}>
				<i className="fa fa-arrow-up fa-2x" onClick={this.upDoot}></i>
				<p>{this.state.review.doot_score}</p>
				<i className="fa fa-arrow-down fa-2x" onClick={this.downDoot}></i>


				<li>
					<p>{this.state.review.donut_review}</p>
					<p>{this.state.review.coffee_review}</p>
					<p>{this.state.review.shop_review}</p>
				</li>
			</div>
		)
	}
}

export default ReviewShowTileContainer