import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 7px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? "%" : "auto")};
`;
