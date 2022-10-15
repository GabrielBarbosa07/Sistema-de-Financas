import { Header } from "./components/Header/index.jsx"
import { Resume } from "./components/Resume/index.jsx"
import { Form } from "./components/Form/index.jsx"

import { GlobalStyle } from "./styles/global.js"

export default function App() {
  return (
    <>
      <Header />
      <Resume />
      <Form />
      <GlobalStyle />
    </>
  )
}
