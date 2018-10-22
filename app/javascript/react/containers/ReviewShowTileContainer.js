
import React, { Component} from 'react';

class ReviewShowTileContainer extends Component{
	constructor(props) {
		super(props)
		this.state = {
			review: props.review,
			comments: [],
			upDoot: false,
			downDoot: false
		}

		this.toUpDoot = this.toUpDoot.bind(this)
	}

	toUpDoot(event) {
		if this.state.upDoot == true
		this.state.review.doot_score += 1
		this.setState( { reviews: this.state.reviews } )
	}

	toDownDoot(event) {

	}

	render() {
		let toUpDoot = () => this.toUpDoot(event)
		return(
			<div key={this.state.review.id}>
				<i className="fa fa-arrow-up fa-2x" onClick={toUpDoot}></i>
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
