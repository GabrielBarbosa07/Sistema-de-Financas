import * as C from "./styles"
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash
} from "react-icons/fa"

export function GridItem({ item, onDelete }) {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alignCenter>{item.expense ? (
        <FaRegArrowAltCircleDown color="red" />
      ) : (
        <FaRegArrowAltCircleUp color="green" />
      )}</C.Td>
      <C.Td alignCenter cursorPointer>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  )
}