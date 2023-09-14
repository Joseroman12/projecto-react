import { useState} from "react"
const TaskFilter = () => {
    const [tasks, setTasks] = useState ([
       { id: 1, title: "Tarea 1", completed: false},
        {id: 2, title: "Tarea 2", completed: true},
       { id: 3, title: "Tarea 3", completed: false}

    ])

    const [filter, setFilter] = useState ("all")

    const handleFilterChange = (event) => {
        setFilter(event.target.Value)
    }

   const handleTaskChange = (TaskId) => {
    setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === TaskId ? { ...task, completed: !task.completed } : task
    )
  );
   }
  

  

   const FilteredTasks = tasks.filter((task)=> {
     if(filter === "all") return true
     if( filter === "completed") return task.completed
     if( filter == "uncompleted") return !task.completed
    return false
   })

   return (
    <div>
        <h1>Lista de tareas</h1>
        <div>
            <label>filtrar por estado</label>
            <select value={filter} onChange={handleFilterChange}>
            <option value="all">todas</option>
            <option value="completed">Completadas</option>
            <option value="uncompleted">no completado</option>
            </select>
            
        </div>
        <div>
            {
                FilteredTasks.map((t)=>{
                    <div key={t.id}>
                    <imput type = "checkbox" checked={t .completed}
                    onChange={() => handleTaskChange(t .id)}
                    />
                    <span>{t.title}</span>
                    </div>
                })
            }
        </div>
    </div>
   )

    }
 

    export default TaskFilter;

 