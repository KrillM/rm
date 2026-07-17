import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;

const Btn = styled.button`
    color:white;
    background-color:olive;
    border:0;
    border-radius:15px;
`;

const Input = styled.input.attrs({ required:true , minLength:10})`
    background-color:gold;
`;

export default function A_StyledComponent() {
  return (
    <Father>
        {/* <Btn>Log IN</Btn>
        {/* as : HTML 태그를 바꿔준다. */}
        {/* <Btn as="a">Log IN</Btn> */}
        <Input />
    </Father>
  );
}