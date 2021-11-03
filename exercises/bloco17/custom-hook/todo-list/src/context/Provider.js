import { useState } from "react"
import Mycontext from "./Mycontext";

const Provider = ({ children }) => {
  const [ todos, setTodos] = useState([]);

  const addTodo = (value) => {
    setTodos([...todos, value])
  }

  const contextValue = {
    todos,
    addTodo,
  }

  return (
    <Mycontext.Provider value={ contextValue }>
      { children }
    </Mycontext.Provider>
  )
}

export default Provider;