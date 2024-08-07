import React from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.production.min';
import { getTodoAsync } from '../redux/todoSlice';

const TodoList = () => {
	const todos = useSelector((state)=> state.todos);
	const dispatch = useDispatch();
	// useEffect(()=>{
	// 	dispatch(getTodoAsync());
	// },[dispatch])	
	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
