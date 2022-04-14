import React from 'react'
import { TodoContext } from '../../context';
import './TodoCounter.css';

const TodoCounter = () => {
  const {totalTodos, completedTodos} = React.useContext(TodoContext)
  return (
  <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}
 
export { TodoCounter };
