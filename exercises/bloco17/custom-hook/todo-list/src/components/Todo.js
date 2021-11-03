
const Todo = ({ tasks }) => {
  return (
    <ul>
      { tasks.map((task) => <li>{ task }</li>)}
    </ul>
  )
}

export default Todo;