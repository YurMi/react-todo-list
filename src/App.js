import './App.css';
import List from "./components/List/List";
import {useState} from "react";
import AddNewItemForm from "./components/AddNewItemForm/AddNewItemForm";

function App() {
	const START_LIST_DATA = [
		{label: 'Learn English', id: 'c1'},
		{label: 'Learn React', id: 'c2'},
		{label: 'Read English Book', id: 'c3'},
	]

	const [list, setList] = useState(START_LIST_DATA);

	const setNewTask = (data) => {
		const newEl = {
			label: data,
			id: String(Date.now()),
		}
		setList(prev => [newEl, ...prev])
	}

	const rerenderListHandler = (data) => {
		setList(list.filter(el => el.id !== data))
	}


	return (
		<section className='App'>
			<div className="container">
				<AddNewItemForm setNewTaskValue={setNewTask}/>
				<List
					list_arr={list}
					removeItem={rerenderListHandler}
				/>
			</div>
		</section>
	);
}

export default App;
