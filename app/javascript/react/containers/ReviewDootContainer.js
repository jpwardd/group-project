import React, { Component} from 'react'

class ReviewDootContainer extends Component{
	constructor(props) {
		super(props)
		this.state = {
			review: props.review,
			comments: [],
			doot_boolean: null
		}
		this.upDoot = this.upDoot.bind(this)
		this.downDoot = this.downDoot.bind(this)
		this.handleChangeDoot = this.handleChangeDoot.bind(this)
	}

	handleChangeDoot(formPayLoad) {
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
		this.setState( { review: this.state.review } )

		let formPayLoad = {
			doot_score: this.state.review.doot_score,
			user_doot: this.state.doot_boolean
		};

		this.handleChangeDoot(formPayLoad)
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
		this.setState( { review: this.state.review } )

		let formPayLoad = {
			doot_score: this.state.review.doot_score,
			user_doot: this.state.doot_boolean
		};

		this.handleChangeDoot(formPayLoad)
	}

	render() {
		let deleteReview = () => {
			this.props.handleDelete(this.state.review.id)
		}

		let deleteButton

		if((this.state.review.user.id == this.state.review.current_user_id) || this.state.review.current_user_role === "admin") {
			deleteButton = <button onClick={deleteReview}>Delete</button>
		}

		return(
			<div key={this.state.review.id} className="row review-container">
				<i className="fa fa-arrow-up fa-2x" onClick={this.upDoot}></i>
				<p>{this.state.review.doot_score}</p>
				<i className="fa fa-arrow-down fa-2x" onClick={this.downDoot}></i>

				<ul className="no-bullet list">
					<li><strong>Donut Review:</strong> {this.state.review.donut_review}</li>
					<li><strong>Coffee Review:</strong> {this.state.review.coffee_review}</li>
					<li><strong>Shop Review:</strong> {this.state.review.shop_review}</li>
				</ul>
				<blockquote className="cite">
					<cite>{this.state.review.user.first_name} {this.state.review.user.last_name}</cite>
				</blockquote>
				{deleteButton}
			</div>
		)
	}
}

export default ReviewDootContainer
