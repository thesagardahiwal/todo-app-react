import React from 'react'
import Task from '../Task/Task'

function Todolist({tasks}) {
  return (
    <div className='w-full'>
        {tasks.map((task, i) => (
            <Task key={i} task={task}/>
        ))}
    </div>
  )
}

export default Todolist