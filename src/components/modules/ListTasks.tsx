import { TaskProps } from "../../interface/common";
import Task from "../common/task";

const ListTasks: React.FC<{ tasks: TaskProps[] }> = ({ tasks }) => {

    return (
        <>
            {
                tasks.map((task) => (
                    <Task task={task} key={task.id}/>
                ))
            }
        </>
    );
}

export default ListTasks;