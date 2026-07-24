import { useRecoilValue } from "recoil";
import CreateToDo from "./Components/CreateToDo";
import { toDoState } from "./atoms";
import ToDo from "./Components/ToDo";

export default function TodoList(){
    const toDos = useRecoilValue(toDoState);

    console.log(toDos);

    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <CreateToDo />
            <ul>
                {toDos.map((toDo)=> (
                    // <ToDo
                    //     text={toDo.text}
                    //     category={toDo.category}
                    //     id={toDo.id}
                    // />
                    <ToDo {...toDo} />
                ))}
            </ul>
        </div>
    );
}