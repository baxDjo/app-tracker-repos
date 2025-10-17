import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import FilterBar from './components/FilterBar'
import TodoList from './components/TodoList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-yellow flex h-screen items-center justify-center">
        <div className="m-auto">
          <p className='class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white"'>Todo Tracker</p>
          <FilterBar />
          <br>
          </br>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </>
  )
}

export default App
