import React from 'react'
import Button from './components/Button'

function BottomBar() {
  return (
    <div className='bg-[#00011c] flex items-center justify-center text-white font-semibold h-14'>
        <Button title='Add Task'/>
    </div>
  )
}

export default BottomBar