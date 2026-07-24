import {useForm} from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { IForm, toDoState } from "../atoms";

export default function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState)
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const handleValid = ({ toDo } : IForm)=> {
        setToDos((oldToDos) => [
            {text:toDo, id: Date.now(), category:"ToDo"},
             ...oldToDos,
        ]);
        setValue("toDo", "");
    };

    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input 
                {...register("toDo", {
                    required: "Please write To Do"
                })}
                placeholder="Write to do"
            />
            <button>Add</button>
        </form>
    );
}