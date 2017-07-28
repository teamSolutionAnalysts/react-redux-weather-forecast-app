import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
	buildRow(city) {
		let data = []
		city.list.forEach(function (ls) {
			// console.log(ls.main);
			data.push(ls.main.humidity);
		});

		console.log(data);

		return (<tr key={city.city.name}>
			<td>{city.city.name}</td>
			<td>
				<Sparklines data={data}>
					<SparklinesLine color="blue" />
				</Sparklines>
			</td>
		</tr>)
	}
	render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>City</th>
							<th>Humidity</th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.buildRow)}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		weather: state.weather
	}
}

export default connect(mapStateToProps)(WeatherList);