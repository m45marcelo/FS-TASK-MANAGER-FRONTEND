import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

import "./AddTask.scss";

const AddTask = ({ fetcTasks }) => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                alert("erro");
            }

            await axios.post("http://localhost:8000/tasks", {
                description: task,
                isCompleted: false,
            });

            await fetcTasks();

            setTask("");

            alert("A tarefa foi adicionada com sucesso!");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa ..."
                value={task}
                onChange={onChange}
                onEnterPress={handleTaskAddition}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#fff" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
