import { useState } from 'react'
import { TodoForm } from './components/TodoForm'
import TodoListItem from './components/TodoListItem'

interface FormData {
  id: string
  taskName: string
  taskDescription: string
  difficulty: string
  dueDate: Date | undefined
  completed: boolean
}

const App = () => {
  const [todos, setTodos] = useState<FormData[]>([])

  const handleAddTodo = (todo: FormData) => {
    setTodos((prevTodos) => [...prevTodos, todo])
  }

  const handleUpdateTodo = (id: string, updatedTodo: Partial<FormData>) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    )
  }

  return (
    <div className='flex flex-col lg:flex-row gap-5 m-5'>
      <TodoForm onSubmit={handleAddTodo} />
      {todos &&
        todos.map((task) => (
          <TodoListItem key={task.id} {...task} onUpdate={handleUpdateTodo} />
        ))}
    </div>
  )
}

export default App
