import { Droppable } from "react-beautiful-dnd"
import DraggableCard from "./DraggableCard";
import styled from "styled-components";

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

interface IBoardProps {
    toDos: string[];
    boardId: string;
}

const Board = ({toDos, boardId}: IBoardProps) => {
    return(
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(prev, snapshot)=> (
                    <Zone 
                        isDraggingOver={snapshot.isDraggingOver}
                        isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                        ref={prev.innerRef} 
                        {...prev.droppableProps}
                    >
                        {toDos.map((toDo, index)=> (
                            <DraggableCard key={toDo} index={index} toDo={toDo}/>
                        ))}
                    </Zone>
                )}
            </Droppable>
        </Wrapper>
    )
}

export default Board;