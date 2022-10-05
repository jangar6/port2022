import { pageIndex } from '../define/enum';

export const set_current_page = (type, payload) => ({
	type,
	payload,
});

const initialState = {
	current: '/',
};

export default function page(state = initialState, action) {
	switch (action.type) {
		case pageIndex.current_header:
			return {
				...state,
				current: action.type,
			};

		case pageIndex.current_main:
			return {
				...state,
				current: action.type,
			};
		case pageIndex.current_intro:
			return {
				...state,
				current: action.type,
			};
		case pageIndex.current_aboutMe:
			return {
				...state,
				current: action.type,
			};
		case pageIndex.current_skils:
			return {
				...state,
				current: action.type,
			};
		case pageIndex.current_study:
			return {
				...state,
				current: action.type,
			};
		case pageIndex.current_project:
			return {
				...state,
				current: action.type,
			};

		default:
			return state;
	}
}
