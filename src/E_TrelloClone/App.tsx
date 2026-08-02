import { DragDropContext, DropResult } from "react-beautiful-dnd"
import Board from "./Component/Board";
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
    // width: 100%;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
`;

export default function App(){
    const [toDos, setToDos] = useRecoilState(toDoState);

    const onDragEnd = (info:DropResult) => {
        const {destination, source} = info;

        if(!destination) return;
        if(destination?.droppableId === source.droppableId){
            setToDos((oldToDos)=> {
                const boardCopy = [...oldToDos[source.droppableId]];
                const taskObj = boardCopy[source.index]
                boardCopy.splice(source.index, 1);
                boardCopy.splice(destination?.index, 0, taskObj);
                return{
                    ...oldToDos,
                    [source.droppableId]: boardCopy,
                }
            })
        }
        else { // 다른 Board로 옮기기
            setToDos((allBoards)=>{
                // sourceBoard - 원래 Board
                // targetBoart - 이동할 Board
                const sourceBoard = [...allBoards[source.droppableId]];
                const taskObj = sourceBoard[source.index];
                const targetBoard = [...allBoards[destination.droppableId]];

                sourceBoard.splice(source.index, 1);
                targetBoard.splice(destination?.index, 0, taskObj);

                if(destination.droppableId === "Delete"){
                return {
                        ...allBoards,
                        [source.droppableId]: sourceBoard,
                    }
                }

                return {
                    ...allBoards,
                    [source.droppableId]: sourceBoard,
                    [destination.droppableId]: targetBoard,
                }
            })
        }
    }

    const addBoard = (newBoard: string) => {
        setToDos((allBoards) => ({
            ...allBoards, 
            [newBoard]: [],
        }))
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <button onClick={()=> addBoard(Date.now().toString())}>Add Board</button>
            <Wrapper>
                <Boards>
                    {Object.keys(toDos).map((boardId) => (
                        <Board 
                            boardId={boardId} 
                            key={boardId} 
                            toDos={toDos[boardId]} 
                        />
                    ))}
                </Boards>
            </Wrapper>
        </DragDropContext>
    );
}