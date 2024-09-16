import React, { useState } from 'react'
import Button from '../../components/BottomBar/components/Button';
import { useGlobal } from '../../context/ContextProvider';

function CreateTask() {
    const [todo, setTodo] = useState('');
    const {addTask, tasks} = useGlobal();
    const handleSubmit = () => {
        addTask({task: todo, id: tasks.length+1, isDone: false});
    }   
  return (
    <div className='absolute flex p-3 justify-center bg-white/10'>
        <div className='w-10/12 bg-[#001c] p-2 rounded-md items-center gap-1 flex'>
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Add Task...' 
                type="text"  
                className='w-full flex-1 p-2 rounded-md border-none'/>
                
                <div  
                    className='w-fit bg-white drop-shadow-sm rounded-md hover:text-white font-bold duration-150'
                    onClick={handleSubmit}>
                        <Button title="Add" />
                </div>
        </div>
    </div>
  )
}

export default CreateTask