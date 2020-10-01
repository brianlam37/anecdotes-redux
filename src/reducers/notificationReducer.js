
export const set = (message, time) => {
	return async dispatch => {
		dispatch({
			type:'SET',
			message,
			timeID: setTimeout(() => {
				dispatch({
					type:'REMOVE',
				});
			}, time*1000)
		});

	};
};
const initialState = {
	message: null,
	timeID: null
};
const reducer = (state = initialState, action) => {

	switch(action.type){
		case 'SET':{
			if(state.timeID){
				clearTimeout(state.timeID);
			}
			const copy = {
				message:action.message,
				timeID: action.timeID
			};
			return copy;
		}
		case 'REMOVE':{
			return initialState;
		}
		default:
			return state;
	}
};

export default reducer;