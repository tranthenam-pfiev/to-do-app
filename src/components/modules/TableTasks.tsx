import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskProps } from '../../interface/common';
import CreateTask from '../common/createModal';
import ListTasks from './ListTasks';

const TableTasks: React.FC = () => {
    const today = dayjs();
    const [date, setDate] = useState<string>(today.format('DD/MM/YYYY').toString());
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [showCreate, setShowCreate] = useState<boolean>(false);
    const [tasks, setTasks] = useState<TaskProps[]>([{
        id: "b312e4b2-2b76-4463-9c19-75f5e163f14c",
        title: "test",
        checked: false
    }]);
    const [currentTask, setCurrentTask] = useState<TaskProps>();

    const handleChangeDate = (day: dayjs.Dayjs | null) => {
        if (day) setDate(day.add(1, 'day').format('DD/MM/YYYY').toString());
    }

    const handleShowCalendar = () => {
        setShowCalendar(!showCalendar);
    }

    const handleShowCreate = () => {
        setShowCreate(!showCreate);
    }

    const addNewTask = (title: string) => {
        if (title != "") {
            const id = uuidv4();
            setCurrentTask({
                id: id,
                title: title,
                checked: false
            });
        }
    }

    const handleCreate = () => {
        if (currentTask?.id != undefined) {
            setTasks((prev) => {
                return [...prev, currentTask];
            });
            setCurrentTask({} as TaskProps);
        }
    }

    useEffect(() => {
        handleCreate();
    }, [currentTask])

    return (
        <div className="absolute w-3/5 rounded-lg border-2 flex flex-row justify-between mt-5 p-4">
            <p>{dayjs.isDayjs(dayjs(date)) || date == "Invalid date" ? date : today.toString()}</p>
            <div className='flex flex-col items-end'>
                <div className='flex flex-row'>
                    <AddCircleOutlineTwoToneIcon
                        className="hover:scale-150 hover:text-red-500 me-5"
                        onClick={() => handleShowCreate()}
                    />
                    <CalendarTodayTwoTone
                        className="hover:scale-150 hover:text-red-500"
                        onClick={() => handleShowCalendar()}
                    />
                </div>
                {showCalendar && <div className="bg-gray-600 absolute top-10 rounded-xl">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar onChange={(e) => handleChangeDate(e)}/>
                    </LocalizationProvider>
                </div>}
                {showCreate && <CreateTask open={showCreate} setOpen={handleShowCreate} create={addNewTask}/>}
                {
                    tasks.length > 0 && <ListTasks tasks={tasks}/>
                }
            </div>
        </div>
    );
}

export default TableTasks;