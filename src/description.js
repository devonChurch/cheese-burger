import React, {Component} from 'react';

class Description extends Component {

	render() {

		const {description} = this.props;

		return (

			<div>
				<p>{description}</p>
			</div>

		);

	}

}

export default Description;
