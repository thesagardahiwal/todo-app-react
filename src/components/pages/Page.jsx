import React from 'react'
import Todolist from '../TodoList/Todolist';
import { useGlobal } from '../../context/ContextProvider';
import CreateTask from '../../forms/CreateTask/CreateTask';

function Page() {
    const {isCreating, tasks} = useGlobal();

    return (
    <div className={` ${isCreating && 'items-center'} flex-1 overflow-y-auto flex justify-center p-2 w-full bg-slate-50`}>
        <Todolist tasks={tasks} />
        { isCreating && 
            <CreateTask/>
        }
    </div>
  )
}

export default Page