import React from 'react'
import { useGlobal } from '../../../context/ContextProvider';

function Button({title}) {
    const { setIsCreating } = useGlobal();
    const handleButton = () => {
        if (title === 'Add Task') {
            setIsCreating((prev) => !prev);
        }
    }
  return (
    <div 
    onClick={handleButton}
    className='w-fit duration-150 cursor-pointer bg-white/10 hover:bg-[#02300c] h-fit p-2 rounded-sm'>
        {title}
    </div>
  )
}

export default Button