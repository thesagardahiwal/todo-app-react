import React from 'react'
import Button from '../BottomBar/components/Button'
import { useGlobal } from '../../context/ContextProvider'

function Task({task}) {
    const {removeTask, taskDone} = useGlobal();
  return (
    <div className={` ${task.isDone ? 'bg-green-600' : 'bg-slate-200'} p-2 flex justify-between items-center my-1 rounded-md w-full`}>
        <div>
            {task.task}
        </div>
        <div className='flex items-center gap-1'>
            <div onClick={() => removeTask(task.id)} className='bg-red-500 rounded-md text-white font-semibold'>
                <Button title='Delete' />
            </div>
            {!task.isDone &&
                <div onClick={() => taskDone(task.id)} className='bg-green-500 rounded-md text-white font-semibold'>
                    <Button title='Done' />
                </div>
            }
        </div>
    </div>
  )
}

export default Task