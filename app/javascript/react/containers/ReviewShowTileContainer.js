
import React, { Component} from 'react';

class ReviewShowTileContainer extends Component{
	constructor(props) {
		super(props)
		this.state = {
			review: props.review,
			comments: [],
			userDoot: nil
		}

		this.upDoot = this.upDoot.bind(this)
	}

	upDoot(event) {
		this.state.review.doot_score += 1
		this.setState( { reviews: this.state.reviews } )
	}

	downDoot(event) {

	}

	render() {
		let upDoot = () => this.upDoot(event)
		return(
			<div key={this.state.review.id}>
				<i className="fa fa-arrow-up fa-2x" onClick={upDoot}></i>
				<p>{this.state.review.doot_score}</p>
				<i className="fa fa-arrow-down fa-2x"></i>


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
