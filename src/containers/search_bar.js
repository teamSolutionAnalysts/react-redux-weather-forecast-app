import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cityName: ''
		}
	}

	render() {
		return (
			<form onSubmit={(e) => { this.onSubmit(e) }}>
				<input type="text" value={this.state.cityName} onChange={(e) => { this.setState({ cityName: e.target.value }) }} />
				<button type="submit">Submit</button>
			</form>
		)
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.fetchWeather(this.state.cityName);
		this.setState({ cityName: '' })
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchWeather: fetchWeather }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar);