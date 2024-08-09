const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());
let todos = [
	{
		id: nanoid(),
		title: 'todo 1',
		completed: true,
	},
	{
		id: nanoid(),
		title: 'todo 2',
		completed: false,
	},
	{
		id: nanoid(),
		title: 'todo 3',
		completed: false,
	},
	{
		id: nanoid(),
		title: 'todo 4',
		completed: false,
	},
	{
		id: nanoid(),
		title: 'todo 5',
		completed: false,
	},
];
let response ={
	data:todos,
	status:404,
	messageCode:"List of Todo"
}

app.get('/todos', (req, res) => res.send(response));

app.post('/todos', (req, res) => {
	const todo = { title: req.body.title, id: nanoid(), completed: false };
	todos.push(todo);
	return res.send(response);;
});

app.patch('/todos/:id', (req, res) => {
	const id = req.params.id;
	console.log(id)
	console.log(req.body)
	const index = todos.findIndex((todo) => todo.id == id);
	const completed = Boolean(req.body.completed);
	if (index > -1) {
		todos[index].completed = completed;
	}
	return res.send({data:todos[index],status:200,
		messageCode:"Changed"});
});

app.delete('/todos/:id', (req, res) => {
	const id = req.params.id;
	const index = todos.findIndex((todo) => todo.id == id);
	if (index > -1) {
		todos.splice(index, 1);
	}

	res.send(response);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
