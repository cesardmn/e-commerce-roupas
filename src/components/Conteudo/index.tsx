import React from 'react'
import { styled } from 'styled-components'
import json from '../../json/itens.json'
import Image from 'next/image'

const ConteudoContainer = styled.main`
  margin-top: 30%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 0;
  `
const MaisVendidosContainer = styled.section`
  h2{
    font-size: 1.3rem;
    text-align: center;
  }
  ul{
    overflow-x: scroll;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    li{
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      button{
        width: 100%;
      }
    }
  }
`

const AdicionadosRecentementeContainer = styled.section`
  h2{
    font-size: 1.3rem;
    text-align: center;
  }
  ul{
    overflow-x: scroll;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    li{
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      button{
        width: 100%;
      }
    }
  }
`

export default function Conteudo() {
  const produtos = json.roupas
  const mapProdutos = produtos.map(item => item)

  const adicionadosRecentemente = mapProdutos.splice(mapProdutos.length -10, 10)

  return (
    <ConteudoContainer>
          <MaisVendidosContainer>
            <h2>Mais vendidos</h2>
            <ul>
            {produtos.map((prod, index) => (
              <li key={index}>
                <Image src={`/imagens/imagem${prod.id}.png`} width={100} height={100} alt={prod.titulo} />
                <button>Mais detalhes</button>
              </li>
            ))}
              <li>

              </li>
            </ul>
          </MaisVendidosContainer>

          <AdicionadosRecentementeContainer>
            <h2>Adicionados recentemente</h2>
            <ul>
              {adicionadosRecentemente.map((prod, index) => (
                <li key={index}>
                  <Image src={`/imagens/imagem${prod.id}.png`} width={100} height={100} alt={prod.titulo} />
                  <button>Mais detalhes</button>
                </li>
              ))}
            </ul>
          </AdicionadosRecentementeContainer>
    </ConteudoContainer>
  )
}