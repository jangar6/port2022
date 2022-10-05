const pageMiddleWare =
	({ dispatch, getState }) =>
	(next) =>
	async (action) => {
		next(action);
		const { type } = action;
		const currentState = getState();
	};
export default pageMiddleWare;
