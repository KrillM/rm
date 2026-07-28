import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Boards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
    padding: 20px 10px;
    padding-top: 30px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 200px;
`;

const Card = styled.div`
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px 10px;
    background-color: ${(props) => props.theme.cardColor};
`;

const toDos = ["a", "b", "c", "d", "e", "f"];

export default function App(){
    const onDragEnd = () => {}

    return (
    <>
        {/* <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="one">
                {(prev)=>(
                    <ul ref={prev.innerRef} {...prev.droppableProps}>
                        {/* <Draggable draggableId="first" index={0}>
                            {(prev) => (
                                <li 
                                    ref={prev.innerRef} 
                                    {...prev.draggableProps} 
                                    {...prev.dragHandleProps}
                                >
                                    One
                                </li>
                            )}
                        </Draggable>
                        <Draggable draggableId="second" index={1}>
                            {(prev) => (
                                <li
                                    ref={prev.innerRef} 
                                    {...prev.draggableProps} 
                                    {...prev.dragHandleProps}
                                >
                                    Two
                                </li>
                            )}
                        </Draggable> */}
                        {/* <Draggable draggableId="first" index={0}>
                            {(prev) => (
                                <li 
                                    ref={prev.innerRef} 
                                    {...prev.draggableProps} 
                                >
                                    <span {...prev.dragHandleProps}>🔥</span>
                                    One
                                </li>
                            )}
                        </Draggable>
                        <Draggable draggableId="second" index={1}>
                            {(prev) => (
                                <li
                                    ref={prev.innerRef} 
                                    {...prev.draggableProps} 
                                >
                                    <span {...prev.dragHandleProps}>🔥</span>
                                    Two
                                </li>
                            )}
                        </Draggable> */}
                    {/* <Draggable draggableId="first" index={0}>
                            {(prev) => (
                                <li 
                                    ref={prev.innerRef} 
                                    {...prev.draggableProps} 
                                >
                                    <span {...prev.dragHandleProps}>🔥</span>
                                    One
                                </li>
                            )}
                        </Draggable>
                    </ul>
                )}
            </Droppable>
        </DragDropContext> */}
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    <Droppable droppableId="one">
                        {(prev)=> (
                            <Board ref={prev.innerRef} {...prev.droppableProps}>
                                {toDos.map((toDo, index)=>(
                                    <Draggable draggableId={toDo} index={index}>
                                        {(prev)=>(
                                            <Card
                                                ref={prev.innerRef}
                                                {...prev.dragHandleProps}
                                                {...prev.draggableProps}
                                            >
                                                {toDo}    
                                            </Card>
                                        )}
                                    </Draggable>
                                ))}
                                {prev.placeholder}
                            </Board>
                        )}
                    </Droppable>
                </Boards>
            </Wrapper>
        </DragDropContext>
    </>
    );
}