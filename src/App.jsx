import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Failed to parse tasks from localStorage:", error);
      return [];
    }
  });

function onTaskClick(taskId) {
  const newTasks = tasks.map((task => {
    if (task.id === taskId) {
      return { ...task, isCompleted: !task.isCompleted
      }
    }
    return task;
  }));
  setTasks(newTasks);
}

function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId) 
    setTasks(newTasks);
}

function onAddTasksSubmmit(title,description) {
  const newTaks = {
    id: v4(),
    title,
    description,
    isCompleted:false,
  }
  setTasks([...tasks, newTaks]);
}
//hook que salva no armazenamento local, pra olhar, especione entre em aplicativo -> localstorage -> localhost

useEffect(() => {
  localStorage.setItem("tasks",JSON.stringify(tasks))
})
//só vai ser executado uma vez pq a lista ta vazia

// useEffect(() =>{
//   //o use effect não aceita função assicrona diretamente então se for usar o fetch do js coloque uma função assicrona dentro
//   async function fetchTasks() {
    
//     //conecta e chama no maximo 18 dados da api fake
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',{
//       method:'GET'
//     });
//     const data = await response.json();
//     setTasks(data);// vou armazenar no localSTorage
//   }
//   // fetchTasks();
// },[]
// );

  return (
    <div className="w-screen h-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Gerenciador de Tarefas
          </h1>
          <AddTask
            onAddTasksSubmmit ={onAddTasksSubmmit}
          />
          <Tasks 
          tasks={tasks} 
          onTaskClick ={onTaskClick} 
          onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
      
      
    </div>
  )
}

export default App
