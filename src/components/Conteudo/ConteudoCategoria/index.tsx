import { styled } from "styled-components"
import itens from '../../../json/itens.json'
import Image from "next/image"
import Filtrar from "@/components/Filtrar"

const ConteudoCategoriaContainer = styled.section`
    margin-top: 8rem;
    ul{
        padding-top: 2rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`

export default function ConteudoCategoria(){
    const genero = 'masculino'
    const categoria = 'camisa'

    const generoClicado = itens.roupas.filter(item => {
        return item.genero === genero
    })

    const generoECategoriaClicado = generoClicado.filter(item => {
        return item.categoria === categoria
    })

    return(
        <ConteudoCategoriaContainer>
            <Filtrar />
            <ul>
                {generoECategoriaClicado.map((item, index) => (
                    <li key={index}>
                        <h2>{item.titulo}</h2>
                        <Image src={`/imagens/imagem${item.id}.png`} width={100} height={100} alt={item.titulo}/>
                        <button>Mais detalhes</button>
                    </li>
                ))}
            </ul>
        </ConteudoCategoriaContainer>
    )
}