
import React, { Component } from 'react'
import TextArea from '../components/TextArea'

class ReviewFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			donutReview: '',
      coffeeReview: '',
      shopReview: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleFormClear = this.handleFormClear.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		let name = event.target.name
		let value = event.target.value
		this.setState( { [name]: value } )
	}

	handleFormClear(event) {
		this.setState( {
      donutReview: '',
      coffeeReview: '',
      shopReview: ''
		})
	}

	handleSubmit(event) {
    event.preventDefault()
    if ((this.state.donutReview.trim() != '') && (this.state.coffeeReview.trim() != '') && (this.state.shopReview.trim() != '')) {
      let formPayLoad= {
        donut_review: this.state.donutReview,
        coffee_review: this.state.coffeeReview,
        shop_review: this.state.shopReview
      }
      this.props.addNewReview(formPayLoad)
      this.handleFormClear()
    }
    else
      alert('Please fill out the entire form before submitting!')
	}

	render() {
		return(
      <div className='row'>
        <form onSubmit={this.handleSubmit}>

    			<TextArea
            placeholder="Donut Review"
            name="donutReview"
            content={this.state.donutReview}
            handleChange={this.handleChange}
    			/>

          <TextArea
            placeholder="Coffee Review"
            name="coffeeReview"
            content={this.state.coffeeReview}
            handleChange={this.handleChange}
          />

          <TextArea
            placeholder="Shop Review"
            name="shopReview"
            content={this.state.shopReview}
            handleChange={this.handleChange}
          />

          <input className="button" type="submit" value="Submit" />

        </form>
      </div>
		)
	}
}

export default ReviewFormContainer
