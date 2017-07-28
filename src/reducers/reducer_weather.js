import { AT_FETCH_WEATHER } from '../actions/index';

export default (state = [], action) => {
	switch (action.type) {
		case AT_FETCH_WEATHER: {
			console.log([action.payload.data, ...state]);

			return [action.payload.data, ...state];
		}
	}

	return state;
}