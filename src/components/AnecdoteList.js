import React from 'react';
//import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {vote as voteAction} from '../reducers/anecdoteReducer';
import {set} from '../reducers/notificationReducer';
// const AnecdoteList = () => {

// 	const anecdotes = useSelector(state => {
// 		if(state.filter){
// 			return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()));
// 		}else{
// 			return state.anecdotes;
// 		}

// 	});
// 	const dispatch = useDispatch();
// 	const vote = (anecdote) => {
// 		dispatch(voteAction(anecdote));
// 		dispatch(set(`you voted '${anecdote.content}'`,5));
// 	};

// 	return(
// 		<>
// 			{anecdotes.map(anecdote =>
// 				<div key={anecdote.id}>
// 					<div>
// 						{anecdote.content}
// 					</div>
// 					<div>
// 					has {anecdote.votes}
// 						<button onClick={() => vote(anecdote)}>vote</button>
// 					</div>
// 				</div>
// 			)}
// 		</>
// 	);
// };

// export default AnecdoteList;
const AnecdoteList = (props) => {
	const vote = (anecdote) => {
		props.voteAction(anecdote);
		props.set(`you voted '${anecdote.content}'`,5);
	};

	return(
		<>
			{props.anecdotes.map(anecdote =>
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
					has {anecdote.votes}
						<button onClick={() => vote(anecdote)}>vote</button>
					</div>
				</div>
			)}
		</>
	);
};

const mapsStateToProps = (state) => {
	if(state.filter){
		return {
			anecdotes: state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
		};
	}else{
		return {
			anecdotes:state.anecdotes
		};
	}
};

const mapDispatchToProps = {
	set, voteAction
};

const ConnectedAnecdotes = connect(mapsStateToProps, mapDispatchToProps)(AnecdoteList);
export default ConnectedAnecdotes;

