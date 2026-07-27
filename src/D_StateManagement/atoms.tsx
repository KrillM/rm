import { atom, selector } from "recoil";

export const minuteState = atom({
    key:"minutes",
    default: 0
})

export const hourSelector = selector<number>({
    key: "hours",
    // get, set 둘다 selector의 내장 함수다
    get: ({ get }) => {
        const minutes = get(minuteState);
        return minutes/60;
    },
    set: ({ set }, newValue) => {
        const minutes = Number(newValue) * 60;
        set(minuteState, minutes);
    } 
})