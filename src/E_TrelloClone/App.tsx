import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd"
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";

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

export default function App(){
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = ({draggableId, destination, source}:DropResult) => {
        if(!destination) return;
        setToDos(oldToDos => {
            const copyToDos = [...oldToDos];
            
            // 순서를 변경할 대상을 배열에서 삭제한다.
            copyToDos.splice(source.index, 1);

            // 대상을 다시 입력한다.
            copyToDos.splice(destination?.index, 0, draggableId);

            return copyToDos;
        })
    }

    return (
    <>
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    <Droppable droppableId="one">
                        {(prev)=> (
                            <Board ref={prev.innerRef} {...prev.droppableProps}>
                                {toDos.map((toDo, index)=>(
                                    <Draggable key={toDo} draggableId={toDo} index={index}>
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