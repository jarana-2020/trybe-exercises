import { useState, useContext } from "react";
import useArray from '../hooks/manipulateArray';
import Todo from '../components/Todo';
import Mycontext from "../context/Mycontext";

const TodoInput = () => {
  const [task, setTask] = useState('');
  const { addTask, tasks } = useArray();
  const { addTodo, todos } = useContext(Mycontext);

  const handleClick = () => {
    // addTask(task);
    addTodo(task);
  }

  return (
    <main>
      <section className='input-task'>
        <label htmlFor='input-task'>
          Task:
          <input 
           id='input-task'
           value={ task }
           onChange={ ({ target }) => setTask(target.value) }
          />
        </label>
        <button 
          type='button'
          onClick={ handleClick }
        >
          Add Task
        </button>
      </section>
      <section className='section-todos'>
        <Todo tasks = { todos }/>
      </section>
    </main>
  )
}

export default TodoInput;