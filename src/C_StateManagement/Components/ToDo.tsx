import { useSetRecoilState } from "recoil";
import { CategoryList, IToDo, toDoState } from "../atoms";

export default function ToDo({text, category, id}: IToDo){
    const setToDos = useSetRecoilState(toDoState);
    const changeCategory = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name},
        } = event;
        setToDos((oldToDos) => {
            // ToDo의 id부터 찾는다.
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            const newToDo = {text, id, category:name as any}
            return [
                ...oldToDos.slice(0, targetIndex), 
                newToDo,
                 ...oldToDos.slice(targetIndex+1)
            ];
        })
    }

    const deleteToDo = () => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            return [
                ...oldToDos.slice(0, targetIndex), 
                 ...oldToDos.slice(targetIndex+1)
            ];
        })
    }
    
    return (
        <li>
            <span>{text}</span>
            {category !== CategoryList.Doing && 
                <button name={CategoryList.Doing} onClick={changeCategory}>
                    Doing
                </button>
            }
            {category !== CategoryList.ToDo && 
                <button name={CategoryList.ToDo} onClick={changeCategory}>
                    To Do
                </button>
            }
            {category !== CategoryList.Done && 
                <button name={CategoryList.Done} onClick={changeCategory}>
                    Done
                </button>
            }
            <button onClick={deleteToDo}>
                Delete
            </button>
        </li>
    )
}