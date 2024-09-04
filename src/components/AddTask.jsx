import Input from "./Input";
import { useState } from "react";

function AddTask({onAddTasksSubmmit}) {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input 
            type="text" 
            placeholder="Insira uma nova tarefa" 
            value={title}
            onChange={() =>setTitle(event.target.value)}
            />
            <Input 
            type="text" 
            placeholder="Digite a descrição da tarefa" 
            value={description}
            onChange={() =>setDescription(event.target.value)}
            />
            <button onClick={() => {
                   if (!title || !description) {
                    return alert("Preencha o titulo e descrição da tarefa");
                }
                onAddTasksSubmmit(title.trim(),description.trim())
                setTitle("");
                setDescription("");
                }} 
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
                Adcionar
            </button>
        </div>
    );
}

export default AddTask;