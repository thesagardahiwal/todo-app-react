import React, {createContext, useContext, useState} from 'react'

export const global = createContext(null);

function ContextProvider({children}) {
    const [isCreating, setIsCreating] = useState(false);
    const [tasks, setTask] = useState([]);

    const addTask = (task) => {
        setTask((prev) => [task, ...prev]);
    }

    const removeTask = (id) => {
        setTask((prev) => prev.filter((el => el.id !== id)));
    };

    const taskDone = (id) => {
        const task = tasks.find(el => el.id === id);
        task.isDone = true;
        removeTask(id);
        addTask(task);
    }
  return (
    <global.Provider value={{
        isCreating, setIsCreating,
        tasks, addTask, removeTask, taskDone
    }}>
        {children}
    </global.Provider>
  )
}

export const useGlobal = () => {
    return useContext(global);
}

export default ContextProvider