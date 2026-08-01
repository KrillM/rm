import { Droppable } from "react-beautiful-dnd"
import DraggableCard from "./DraggableCard";
import styled from "styled-components";
import { useRef } from "react";
import { set, useForm } from "react-hook-form";
import{ IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
    width: 300px;
    padding-top: 10px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size:18px;
`

interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
}

const Zone = styled.div<IAreaProps>`
    background-color: ${(props)=>
        props.isDraggingOver ? "pink" : props.isDraggingFromThis ? "green" : "orange"};
    props.isDraggingOver
        ? "#dfe6e9"
        ? props.isDraggingFromThis
        ? "#b2bec3"
        ? "transparent"
    flex-grow: 1;
    transition: background-color 0.3s ease-in-out;
    padding: 20px
` 

const Form = styled.form`
    width: 100%;
    input {
        width: 100%;
    }
`

interface IBoardProps {
    toDos: IToDo[];
    boardId: string;
}

interface IForm {
    toDo: string;
}

const Board = ({toDos, boardId}: IBoardProps) => {

    // 간단한 useRef 개념 정리
    // const inputRef = useRef<HTMLInputElement>(null);
    // const onClick = () => {
    //     inputRef.current?.focus();
    //     setTimeout(()=>{
    //         inputRef.current?.blur()
    //     }, 5000)
    // }
    
    const setToDos = useSetRecoilState(toDoState);
    const {register, setValue, handleSubmit} = useForm<IForm>();
    const onValid = ({toDo}:IForm) => {
        const newToDo = {
            id:Date.now(),
            text: toDo,
        }
        setToDos(allBoards => {
            return {
                ...allBoards, 
                [boardId]: [
                    ...allBoards[boardId],
                    newToDo
                ]
            }
        });
        setValue("toDo", "");
    }

    return(
        <Wrapper>
            <Title>{boardId}</Title>
            {/* <input ref={inputRef} placeholder="Type here"/>
            <button onClick={onClick}>Click Here</button> */}

            {boardId !== "Delete" && (
                <Form onSubmit={handleSubmit(onValid)}>
                    <input 
                        {...register("toDo", {required: true})}
                        type="text" 
                        placeholder={`Add task on ${boardId}`}
                    />
                </Form>
            )}
            <Droppable droppableId={boardId}>
                {(prev, snapshot)=> (
                    <Zone 
                        isDraggingOver={snapshot.isDraggingOver}
                        isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                        ref={prev.innerRef} 
                        {...prev.droppableProps}
                    >
                        {toDos.map((toDo, index)=> (
                            <DraggableCard 
                                key={toDo.id} 
                                index={index} 
                                toDoId={toDo.id}
                                toDoText={toDo.text}
                            />
                        ))}
                    </Zone>
                )}
            </Droppable>
        </Wrapper>
    )
}

export default Board;