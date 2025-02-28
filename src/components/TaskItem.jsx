const TaskItem = ({ task })=>{
    return(
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "completa" : "Não Completa"}</p>
        </>
    )
}

export default TaskItem