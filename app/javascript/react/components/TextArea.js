
import React from 'react'

const TextArea = (props) => {
	return(
		<div>
			<input
				placeholder={props.placeholder}
				name={props.name}
				type='text'
				value={props.content}
				onChange={props.handleChange}
			/>
		</div>
	)
}



export default TextArea