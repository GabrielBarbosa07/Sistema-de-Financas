import React from 'react'
import { ResumeItem } from '../ResumeItem'
import * as C from "./styles"
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from "react-icons/fa"

export function Resume() {
  return (
    <C.Container>
      <ResumeItem title="Entradas" icon={FaRegArrowAltCircleUp} value="1000" />
      <ResumeItem title="Saídas" icon={FaRegArrowAltCircleDown} value="1000" />
      <ResumeItem title="Total" icon={FaDollarSign} value="1000" />
    </C.Container>
  )
}
