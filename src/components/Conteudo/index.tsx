import React from 'react'
import { styled } from 'styled-components'

const ConteudoContainer = styled.main`
    display: grid;
    grid-template-columns: 20% 80%;
`

export default function Conteudo() {
  return (
    <ConteudoContainer>
        <section>Filtros</section>
        <section>Conteudo</section>
    </ConteudoContainer>
  )
}