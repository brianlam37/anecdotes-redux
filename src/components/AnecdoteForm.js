import React from 'react';
//import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {createAnecdote} from '../reducers/anecdoteReducer';
import {set} from '../reducers/notificationReducer';
// const AnecdoteForm = () => {
// 	const dispatch = useDispatch();
// 	const addAnecdote = async (e) => {
// 		e.preventDefault();
// 		const content = e.target.anecdote.value;
// 		e.target.anecdote.value = '';
// 		dispatch(set(`you added '${content}'`,5));
// 		dispatch(createAnecdote(content));
// 	};
// 	return(
// 		<>
// 			<h2>create new</h2>
// 			<form onSubmit = {addAnecdote}>
// 				<div><input name = 'anecdote'/></div>
// 				<button type = 'submit'>create</button>
// 			</form>
// 		</>
// 	);
// };
const AnecdoteForm = (props) => {
	const addAnecdote = async (e) => {
		e.preventDefault();
		const content = e.target.anecdote.value;
		e.target.anecdote.value = '';
		props.set(`you added '${content}'`,5);
		props.createAnecdote(content);
	};
	return(
		<>
			<h2>create new</h2>
			<form onSubmit = {addAnecdote}>
				<div><input name = 'anecdote'/></div>
				<button type = 'submit'>create</button>
			</form>
		</>
	);
};
//export default AnecdoteForm;
export default connect(null, {createAnecdote, set})(AnecdoteForm);