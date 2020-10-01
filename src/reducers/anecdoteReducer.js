import anecdoteService from '../services/anecdotes';
const getId = () => (100000 * Math.random()).toFixed(0);

export const vote = (anecdoteOld) => {
	const updated = {
		content: anecdoteOld.content,
		votes: anecdoteOld.votes+1,
		id: anecdoteOld.id
	};
	return async dispatch => {
		const anecdote = await anecdoteService.updateVote(updated);
		dispatch({
			type:'VOTE',
			anecdote
		});
	};
};

export const createAnecdote = (content) => {
	const data = {
		content,
		id: getId(),
		votes:0
	};
	return async dispatch => {
		const anecdote = await anecdoteService.createNew(data);
		dispatch({
			type:'CREATE',
			anecdote
		});
	};
};

export const initializeAnecdotes = () => {
	return async dispatch => {
		const data = await anecdoteService.getAll();
		dispatch({
			type: 'INIT',
			data
		});
	};
};

const reducer = (state = [], action) => {
	let copy = [...state];

	switch(action.type){
		case 'VOTE':{
			let target = copy.findIndex(anecdote => anecdote.id === action.anecdote.id);
			if(target > -1){
				copy[target] = action.anecdote;
			}
			return copy.sort((a, b) => b.votes - a.votes);
		}
		case 'CREATE':{
			return copy.concat(action.anecdote).sort((a, b) => b.votes - a.votes);
		}
		case 'INIT':{
			return action.data;
		}
		default:
			return copy.sort((a, b) => b.votes - a.votes);
	}
};

export default reducer;