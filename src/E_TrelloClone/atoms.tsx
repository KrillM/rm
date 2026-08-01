import { atom, selector } from "recoil";

export interface IToDo {
    id: number;
    text: string;
}

interface IToDoState {
    [key: string]: IToDo[];
}

const localStorageEffect = (key: string) => ({setSelf, onSet}: any) => {
    const savedValue = localStorage.getItem(key);

    if(savedValue != null) setSelf(JSON.parse(savedValue));

    onSet((newValue: any, _: any, isReset: boolean) => {
        isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue));
    })
}

const sessionStorageEffect = (key: string) => ({setSelf, onSet}: any) => {
    const savedValue = sessionStorage.getItem(key);

    if(savedValue != null) setSelf(JSON.parse(savedValue));

    onSet((newValue: any, _: any, isReset: boolean) => {
        isReset
            ? sessionStorage.removeItem(key)
            : sessionStorage.setItem(key, JSON.stringify(newValue));
    })
}


export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        "To Do": [],
        Doing: [],
        Done: [],
        Delete: [],
    },
    // effects: [localStorageEffect('toDo')],
    effects: [sessionStorageEffect('toDo')],
})