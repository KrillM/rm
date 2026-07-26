import { atom, selector } from "recoil";
import ToDo from "./Components/ToDo";

export enum CategoryList{
    "ToDo" = "ToDo",
    "Doing" = "Doing",
    "Done" = "Done"
}

export interface IForm {
    toDo: string;
}

export interface IToDo {
    text: string;
    id: number;
    category: CategoryList;
}

export const categoryState = atom<IToDo["category"]>({
    key:"category",
    default:CategoryList.ToDo,
})

// atom은 전부 가져온다.
export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
})

// selector는 조건에 따라 분류한다.
export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category)
    }
})