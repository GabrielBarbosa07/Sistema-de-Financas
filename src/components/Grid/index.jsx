import { GridItem } from "../GridItem"
import * as C from "./styles"

export function Grid({ itens, setItens }) {
  const onDelete = (id) => {
    const newArray = itens.filter((transaction) => transaction.id !== id)

    setItens(newArray)
    localStorage.setItem("transactions", JSON.stringify(newArray))
  }

  return (
    <C.Table>
      <C.THead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={10} alignCenter>Valor</C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.THead>

      <C.TBody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.TBody>
    </C.Table>
  )
}
