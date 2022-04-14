import React from 'react'
import { TodoContext } from '../../context'
import './TodoSearch.css'

const TodoSearch = () => {
  
  const { search, setSearch } = React.useContext(TodoContext)
  
  const onSearchValueChange = event => {
    setSearch(event.target.value)
    console.log(event.target.value)
  }

  return (
    <input
      className='TodoSearch'
      placeholder='Cebolla'
      value={search}
      onChange={event => onSearchValueChange(event)}
    />
  )
}

export { TodoSearch }
