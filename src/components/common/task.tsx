import { TaskProps } from "../../interface/common";
import CustomizedCheckbox from "./customCheckbox";

const Task: React.FC<{task: TaskProps}> = ({ task }) => {
    return (
        <div className="flex flex-row w-full" id={task.id}>
            <CustomizedCheckbox checked={task.checked} className="float-left"/>
            <span className="flex items-center">{task.title}</span>
        </div>
    );
}

export default Task;