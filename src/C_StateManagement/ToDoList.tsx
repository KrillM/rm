import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./Components/CreateToDo";
import { CategoryList, categoryState, toDoSelector, toDoState } from "./atoms";
import ToDo from "./Components/ToDo";

export default function TodoList(){
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    }
    
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <select value={category} onInput={onInput}>
                <option value={CategoryList.ToDo}>To Do</option>
                <option value={CategoryList.Doing}>Doing</option>
                <option value={CategoryList.Done}>Done</option>
            </select>
            <CreateToDo />
            {toDos?.map((toDo)=>(
                <ToDo key={toDo.id} {...toDo}/>
            ))}
         {/* <h2>To Do</h2>
            <ul>
                {toDo.map((toDo)=> (
                    // <ToDo
                    //     text={toDo.text}
                    //     category={toDo.category}
                    //     id={toDo.id}
                    // />
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr/>
            <h2>Doing</h2>
            <ul>
                {doing.map((toDo)=> (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <h2>Done</h2>
            <ul>
                {done.map((toDo)=> (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul> */}
        </div>
    );
}