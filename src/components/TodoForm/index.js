import React from 'react'
import { TodoContext } from '../../context'
import './TodoForm.css'

const TodoForm = () => {
  const [newTodo, setNewTodo] = React.useState('')
  const { addTodo, setOpenModal } = React.useContext(TodoContext)

  const onCancel = () => {
    console.log('cancelar ....')
    setOpenModal(false)
  }

  const onChange = event => {
    console.log('change ....')
    setNewTodo(event.target.value)
  }
  const onSubmit = event => {
    event.preventDefault()
    console.log('añadir todo ....')
    addTodo(newTodo)
    setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodo}
        onChange={onChange}
        placeholder='Cortar la cebolla'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          onClick={onCancel}
          className='TodoForm-button TodoForm-button-cancel'
        >
          Cancelar
        </button>
        <button type='submit' className='TodoForm-button TodoForm-button-add'>
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
