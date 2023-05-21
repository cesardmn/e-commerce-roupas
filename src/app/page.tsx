'use client'

import ConteudoCategoria from "@/components/Conteudo/ConteudoCategoria"
import ConteudoInicio from "@/components/Conteudo/ConteudoInicio"
import Menu from "@/components/Menu"

export default function Home() {
  return (
    <>
      <Menu />
      {/* <ConteudoInicio /> */}
      <ConteudoCategoria />
    </>
  )
}